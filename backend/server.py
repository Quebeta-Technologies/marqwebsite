from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional, Literal
import uuid
from datetime import datetime, timezone
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import asyncio
from concurrent.futures import ThreadPoolExecutor

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="MARQ Realtors API")
api_router = APIRouter(prefix="/api")

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

_executor = ThreadPoolExecutor(max_workers=2)

# ---------- Email ----------
ZOHO_SMTP_HOST = "smtp.zoho.in"   # use smtp.zoho.com if your account is .com
ZOHO_SMTP_PORT = 587
ZOHO_USER     = os.environ.get("ZOHO_USER", "")      # sales@marqrealtors.com
ZOHO_PASSWORD = os.environ.get("ZOHO_PASSWORD", "")  # Zoho app password
NOTIFY_TO     = os.environ.get("NOTIFY_EMAIL", "sales@marqrealtors.com")


def _build_email_html(enquiry: "Enquiry") -> str:
    rows = [
        ("Source", enquiry.source),
        ("Purpose", enquiry.purpose or "—"),
        ("Property Type", enquiry.property_type or "—"),
        ("Name", enquiry.name or "—"),
        ("Mobile", enquiry.mobile or "—"),
        ("Email", enquiry.email or "—"),
        ("City", enquiry.city or "—"),
        ("Budget", enquiry.budget or "—"),
        ("Requirement", enquiry.requirement or "—"),
        ("Received At", enquiry.created_at.strftime("%d %b %Y, %I:%M %p UTC")),
    ]
    rows_html = "".join(
        f"""<tr>
              <td style="padding:8px 12px;font-weight:600;color:#7a6a3a;
                         background:#faf8f3;border-bottom:1px solid #ede8d8;
                         white-space:nowrap">{label}</td>
              <td style="padding:8px 12px;color:#1a1810;
                         border-bottom:1px solid #ede8d8">{value}</td>
            </tr>"""
        for label, value in rows
    )
    return f"""
    <div style="font-family:Georgia,serif;max-width:560px;margin:0 auto;
                border:1px solid #d4c89a;background:#ffffff">
      <div style="background:#1a1810;padding:20px 24px">
        <p style="margin:0;font-size:11px;letter-spacing:0.18em;
                  color:#c9a84c;text-transform:uppercase">MARQ Realtors</p>
        <h2 style="margin:6px 0 0;color:#ffffff;font-size:20px;font-weight:400">
          New Enquiry Received
        </h2>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        {rows_html}
      </table>
      <div style="padding:16px 24px;background:#faf8f3;
                  font-size:11px;color:#9a8e7a;letter-spacing:0.05em">
        This is an automated notification from marqrealtors.com
      </div>
    </div>
    """


def _send_email_sync(enquiry: "Enquiry"):
    if not ZOHO_USER or not ZOHO_PASSWORD:
        logger.warning("Zoho credentials not set — skipping email notification")
        return
    try:
        msg = MIMEMultipart("alternative")
        msg["Subject"] = f"New Enquiry — {enquiry.name or 'Unknown'} [{enquiry.source}]"
        msg["From"]    = ZOHO_USER
        msg["To"]      = NOTIFY_TO
        if enquiry.email:
            msg["Reply-To"] = enquiry.email

        plain = (
            f"New enquiry from {enquiry.name or '—'}\n"
            f"Mobile: {enquiry.mobile or '—'}\n"
            f"Email:  {enquiry.email or '—'}\n"
            f"Source: {enquiry.source}\n"
            f"Purpose: {enquiry.purpose or '—'}\n"
            f"Type: {enquiry.property_type or '—'}\n"
            f"City: {enquiry.city or '—'}\n"
            f"Budget: {enquiry.budget or '—'}\n"
            f"Requirement: {enquiry.requirement or '—'}\n"
        )
        msg.attach(MIMEText(plain, "plain"))
        msg.attach(MIMEText(_build_email_html(enquiry), "html"))

        with smtplib.SMTP(ZOHO_SMTP_HOST, ZOHO_SMTP_PORT) as server:
            server.ehlo()
            server.starttls()
            server.login(ZOHO_USER, ZOHO_PASSWORD)
            server.sendmail(ZOHO_USER, NOTIFY_TO, msg.as_string())

        logger.info(f"Enquiry email sent for {enquiry.name} ({enquiry.mobile})")
    except Exception as e:
        logger.error(f"Failed to send enquiry email: {e}")


async def send_enquiry_email(enquiry: "Enquiry"):
    loop = asyncio.get_event_loop()
    await loop.run_in_executor(_executor, _send_email_sync, enquiry)


# ---------- Models ----------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class EnquiryCreate(BaseModel):
    source: Literal["hero", "property", "advisor"]
    purpose: Optional[str] = None
    property_type: Optional[str] = None
    name: Optional[str] = None
    mobile: Optional[str] = None
    email: Optional[str] = None
    city: Optional[str] = None
    budget: Optional[str] = None
    requirement: Optional[str] = None


class Enquiry(EnquiryCreate):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "MARQ Realtors API"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check.get('timestamp'), str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


@api_router.post("/enquiries", response_model=Enquiry)
async def create_enquiry(payload: EnquiryCreate):
    if not (payload.name or payload.mobile):
        raise HTTPException(status_code=400, detail="Name or mobile is required")

    enquiry = Enquiry(**payload.model_dump())
    doc = enquiry.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.enquiries.insert_one(doc)
    logger.info(f"New enquiry: source={enquiry.source} name={enquiry.name} mobile={enquiry.mobile}")

    # Fire-and-forget email — never blocks the API response
    asyncio.create_task(send_enquiry_email(enquiry))

    return enquiry


@api_router.get("/enquiries", response_model=List[Enquiry])
async def list_enquiries():
    items = await db.enquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    for it in items:
        if isinstance(it.get('created_at'), str):
            it['created_at'] = datetime.fromisoformat(it['created_at'])
    return items


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()