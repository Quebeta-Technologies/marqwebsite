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
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // When over hero (not scrolled): transparent, light text
  // When scrolled: solid glass, dark text
  const onHero = !scrolled;

  return (
    <header
      data-testid="site-header"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    >
      {/* Top contact bar (only visible after scroll OR always thin) */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          onHero ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        } bg-[var(--marq-ink)] text-white/80`}
      >
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
        className={`transition-all duration-500 ${
          onHero
            ? "bg-transparent"
            : "bg-white/92 backdrop-blur-xl border-b border-[var(--marq-line)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <a href="#home" data-testid="logo-link" className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt="MARQ Realtors"
              className={`h-12 w-auto object-contain transition-all duration-500 ${
                onHero ? "brightness-0 invert-0" : ""
              }`}
              style={onHero ? { filter: "brightness(0) invert(1)" } : undefined}
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-testid={`nav-${item.label.replace(/\s+/g, "-").toLowerCase()}`}
                className={`text-sm tracking-wide transition-colors duration-300 relative ${
                  onHero
                    ? "text-white/85 hover:text-[var(--marq-gold-2)]"
                    : "text-[var(--marq-ink)] hover:text-[var(--marq-gold)]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#advisor"
              data-testid="header-book-consultation"
              className={`hidden md:inline-flex transition-all duration-300 ${
                onHero
                  ? "border border-[var(--marq-gold-2)] text-[var(--marq-gold-2)] hover:bg-[var(--marq-gold-2)] hover:text-[var(--marq-ink)] px-6 py-3 text-[11px] tracking-[0.22em] uppercase font-semibold"
                  : "btn-gold"
              }`}
            >
              Book a Consultation
            </a>
            <button
              data-testid="mobile-menu-toggle"
              className={`lg:hidden p-2 ${
                onHero ? "text-white" : "text-[var(--marq-ink)]"
              }`}
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
