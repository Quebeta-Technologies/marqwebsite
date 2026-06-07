import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";

const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_10da01c6-2660-45e2-8df9-aafabd9bb8ec/artifacts/zn4d3zw6_MARQ%20Logo.png";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About MARQ", href: "#about" },
  { label: "Properties", href: "#featured" },
  { label: "Services", href: "#services" },
  { label: "Property Experts", href: "#advisor" },
  { label: "Why MARQ", href: "#why" },
  { label: "List Your Property", href: "#enquire" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header data-testid="site-header" className="sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-[var(--marq-ink)] text-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <a
              data-testid="top-phone-link"
              href="tel:+918855055069"
              className="flex items-center gap-2 hover:text-[var(--marq-gold)] transition-colors"
            >
              <Phone size={13} strokeWidth={1.5} />
              <span>+91 88550 55069</span>
            </a>
            <a
              data-testid="top-email-link"
              href="mailto:sales@marqrealtors.com"
              className="hidden sm:flex items-center gap-2 hover:text-[var(--marq-gold)] transition-colors"
            >
              <Mail size={13} strokeWidth={1.5} />
              <span>sales@marqrealtors.com</span>
            </a>
          </div>
          <div className="text-overline text-white/60">Pune • Mumbai</div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-[var(--marq-line)] shadow-[0_1px_0_rgba(0,0,0,0.02)]"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <a href="#home" data-testid="logo-link" className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt="MARQ Realtors"
              className="h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-testid={`nav-${item.label.replace(/\s+/g, "-").toLowerCase()}`}
                className="link-gold text-sm tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#advisor"
              data-testid="header-book-consultation"
              className="hidden md:inline-flex btn-gold"
            >
              Book a Consultation
            </a>
            <button
              data-testid="mobile-menu-toggle"
              className="lg:hidden p-2"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            data-testid="mobile-menu"
            className="lg:hidden border-t border-[var(--marq-line)] bg-white"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-[var(--marq-ink)]"
                  data-testid={`mobile-nav-${item.label
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#advisor"
                onClick={() => setOpen(false)}
                className="btn-gold mt-2 self-start"
                data-testid="mobile-book-consultation"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
