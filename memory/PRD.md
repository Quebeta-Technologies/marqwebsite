# MARQ Realtors — Product Requirements Document

## Original Problem Statement
User uploaded the MARQ Realtors logo (gold on black) and a "Home Page Content.docx" describing a premium real estate advisory business serving Pune and Mumbai. Task: build a single-page marketing site for MARQ Realtors covering all sections from the doc (Hero, About, Buy/Sell/JV, Why MARQ, Property Types, Property Enquiry, Featured Opportunities, Talk to a Property Advisor, Client Stories, Footer).

## User Choices
- **Scope**: Single-page site (all content on home).
- **Theme**: Light theme — explicitly NOT dark.
- **Forms**: Enquiries stored in DB; email integration deferred.
- **Content**: Polished placeholder content for properties & testimonials.

## Architecture
- **Frontend**: React 19 + Tailwind + Cormorant Garamond (serif) + Outfit (sans) + Sonner toasts. Components live under `src/components/marq/`.
- **Backend**: FastAPI (`/app/backend/server.py`) with two endpoints:
  - `POST /api/enquiries` — Create enquiry (source: hero | property | advisor)
  - `GET /api/enquiries` — List all enquiries (admin, no auth yet)
- **DB**: MongoDB collection `enquiries`.

## Implemented (2026-06-03)
- Light/ivory luxury aesthetic with gold (`#C9A961`) accents and rich charcoal text.
- Sticky header with contact top-bar, logo, nav, mobile menu, "Book a Consultation" CTA.
- Hero with editorial headline + cinematic image + integrated 4-field enquiry form.
- About section with three stat tiles (25+ years, 1.5K+ clients, 18+ projects).
- Buy / Sell / JV services cards (icon + body).
- Why MARQ — dark inverted section with M·A·R·Q bento grid.
- Explore Property Types — 3 image cards (Commercial, Land, Residential).
- Property Enquiry section with secondary form.
- Featured Investment Opportunities — bento layout, 4 cards with overlay copy.
- Talk to a Property Advisor — detailed 5-field form (Name, Phone, City, Budget, Requirement) with trust perks.
- Client Stories — 3 testimonials with avatars.
- Footer with company description, links, contact, address, disclaimer, copyright.
- All 3 forms POST to `/api/enquiries` and surface toast notifications.
- All interactive elements have `data-testid` attributes.

## Backlog
- P1: Email notifications to sales@marqrealtors.com on new enquiry (Resend / SendGrid).
- P1: Simple admin UI to browse enquiries (auth-protected).
- P2: Replace placeholder testimonials & featured properties with real content.
- P2: Properties listing page (currently anchors to Featured section).
- P2: Blog / FAQ / Events / New Launches pages (linked in footer).
- P2: Smooth-scroll polish (Lenis), Framer Motion microinteractions.

## Next Action Items
- Provide Resend or SendGrid key when ready to enable email notifications.
- Provide real testimonials & featured listings when available.
