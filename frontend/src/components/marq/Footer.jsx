import { Phone, Mail, MapPin, Instagram, Heart } from "lucide-react";

const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_10da01c6-2660-45e2-8df9-aafabd9bb8ec/artifacts/zn4d3zw6_MARQ%20Logo.png";

const COMPANY = ["Contact Us", "FAQ's", "Blogs", "Events", "New Launches"];
const LOOKING_TO = [
  { label: "Buy", href: "#services" },
  { label: "Sell", href: "#services" },
  { label: "Lease", href: "#services" },
  { label: "JV", href: "#services" },
];
const LOOKING_FOR = [
  { label: "Commercial", href: "#types" },
  { label: "Retail", href: "#types" },
  { label: "Land", href: "#types" },
  { label: "Residential", href: "#types" },
];

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-[var(--marq-ink)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
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

          <div className="lg:col-span-2">
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
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-overline text-[var(--marq-gold)] mb-5">
              Looking To
            </h4>
            <ul className="space-y-3 text-sm">
              {LOOKING_TO.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    data-testid={`footer-to-${c.label.toLowerCase()}`}
                    className="text-white/70 hover:text-[var(--marq-gold)] transition-colors"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-overline text-[var(--marq-gold)] mb-5">
              Looking For
            </h4>
            <ul className="space-y-3 text-sm">
              {LOOKING_FOR.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    data-testid={`footer-for-${c.label.toLowerCase()}`}
                    className="text-white/70 hover:text-[var(--marq-gold)] transition-colors"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-overline text-[var(--marq-gold)] mb-5">
              Get In Touch
            </h4>
            <ul className="space-y-4 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <Phone size={15} strokeWidth={1.5} className="mt-1 text-[var(--marq-gold)] flex-shrink-0" />
                <a
                  href="tel:+918855055069"
                  data-testid="footer-phone"
                  className="hover:text-[var(--marq-gold)]"
                >
                  +91 88550 55069
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} strokeWidth={1.5} className="mt-1 text-[var(--marq-gold)] flex-shrink-0" />
                <a
                  href="mailto:sales@marqrealtors.com"
                  data-testid="footer-email"
                  className="hover:text-[var(--marq-gold)] break-all"
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
                <span className="text-xs leading-relaxed">
                  Cultiv8 Coworking, Office 701-702, 7th Floor, Wing B,
                  Sterling Towers, Pancard Club Road, Baner, Pune 411069
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-white/55">
          <span>© 2026 MARQ Realtors. All Rights Reserved.</span>
          <span
            data-testid="footer-credit"
            className="flex items-center gap-1.5"
          >
            Designed With{" "}
            <Heart
              size={13}
              strokeWidth={0}
              fill="#E63946"
              className="text-[#E63946]"
            />{" "}
            From{" "}
            <span className="text-white/80 font-medium tracking-wide">
              Quebeta
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
