import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_10da01c6-2660-45e2-8df9-aafabd9bb8ec/artifacts/zn4d3zw6_MARQ%20Logo.png";

const COMPANY = ["Contact Us", "FAQ's", "Blogs", "Events", "New Launches"];
const CATEGORIES = [
  "Commercial",
  "Land",
  "Residential",
  "Buy",
  "Sell",
  "JV",
];

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-[var(--marq-ink)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <img
              src={LOGO_URL}
              alt="MARQ Realtors"
              className="h-14 w-auto object-contain"
            />
            <p className="mt-6 text-sm text-white/65 leading-relaxed max-w-md">
              MARQ Realtors is your trusted real estate advisory partner for
              smart, goal-based property decisions. We help clients explore
              curated opportunities across commercial, residential, land, and
              investment categories with a focus on clarity, credibility, and
              long-term value in Pune and Mumbai.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://instagram.com/marq_realtors"
                target="_blank"
                rel="noreferrer"
                data-testid="footer-instagram"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[var(--marq-gold)] hover:text-[var(--marq-gold)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <span className="text-xs text-white/55">@marq_realtors</span>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-overline text-[var(--marq-gold)] mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {COMPANY.map((c) => (
                <li key={c}>
                  <a
                    href="#advisor"
                    data-testid={`footer-link-${c.replace(/\W/g, "").toLowerCase()}`}
                    className="text-white/70 hover:text-[var(--marq-gold)] transition-colors"
                  >
                    {c}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-overline text-[var(--marq-gold)] mt-8 mb-5">
              Property Categories
            </h4>
            <ul className="grid grid-cols-2 gap-y-3 text-sm">
              {CATEGORIES.map((c) => (
                <li key={c}>
                  <a
                    href="#types"
                    data-testid={`footer-cat-${c.toLowerCase()}`}
                    className="text-white/70 hover:text-[var(--marq-gold)] transition-colors"
                  >
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-overline text-[var(--marq-gold)] mb-5">
              Get In Touch
            </h4>
            <ul className="space-y-4 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <Phone size={15} strokeWidth={1.5} className="mt-1 text-[var(--marq-gold)]" />
                <a
                  href="tel:+918855055069"
                  data-testid="footer-phone"
                  className="hover:text-[var(--marq-gold)]"
                >
                  +91 88550 55069
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} strokeWidth={1.5} className="mt-1 text-[var(--marq-gold)]" />
                <a
                  href="mailto:sales@marqrealtors.com"
                  data-testid="footer-email"
                  className="hover:text-[var(--marq-gold)]"
                >
                  sales@marqrealtors.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={15}
                  strokeWidth={1.5}
                  className="mt-1 text-[var(--marq-gold)] flex-shrink-0"
                />
                <span>
                  Care Of Cultiv8 Coworking Space, Office No. 701 & 702, 7th
                  Floor, Wing B, Sterling Towers, Pancard Club Road, Baner
                  Gaon, Baner, Pune, Maharashtra 411069
                </span>
              </li>
            </ul>
            <div className="mt-6 text-overline text-white/55">
              Service Cities · Pune | Mumbai
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-xs text-white/45 leading-relaxed">
          <p className="max-w-4xl">
            <strong className="text-white/65 font-medium">Disclaimer:</strong>{" "}
            The information provided on this website is for general
            informational purposes only. Property details, pricing,
            availability, and approvals are subject to change without notice.
            Please verify all information independently before making any
            property decision.
          </p>
          <p className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span>© 2026 MARQ Realtors. All Rights Reserved.</span>
            <span className="text-white/40">
              Designed for the discerning investor.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
