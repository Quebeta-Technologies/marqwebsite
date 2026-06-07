import useReveal from "@/hooks/useReveal";
import { Sparkles, ShieldCheck, Compass, BadgeCheck } from "lucide-react";

const POINTS = [
  {
    icon: Sparkles,
    text: "Data-led investment thesis for every recommendation.",
  },
  {
    icon: ShieldCheck,
    text: "RERA-aligned, developer-vetted projects only.",
  },
  {
    icon: Compass,
    text: "Portfolio strategy across residential, commercial & land.",
  },
  {
    icon: BadgeCheck,
    text: "End-to-end advisory — from shortlisting to handover.",
  },
];

const TRUST = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 1.5, suffix: "K+", label: "Clients Served" },
  { value: 18, suffix: "+", label: "Developer Tie-ups" },
  { value: 100, suffix: "%", label: "Verified Projects" },
];

export default function About() {
  const ref = useReveal();
  return (
    <section
      id="about"
      data-testid="about-section"
      className="bg-[var(--marq-paper)] border-y border-[var(--marq-line)] relative overflow-hidden"
    >
      <div
        ref={ref}
        className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-6 relative">
            <div className="zoom-img relative aspect-[4/5] overflow-hidden bg-[var(--marq-sand)]">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
                alt="MARQ Realtors — Premium real estate advisory"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-overline text-[var(--marq-gold-2)]">
                  Est. 2000
                </div>
                <div className="font-display text-2xl mt-1">
                  Trusted across Pune & Mumbai
                </div>
              </div>
            </div>
            {/* Floating gold accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[var(--marq-gold)]/50 -z-0 hidden lg:block" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[var(--marq-gold)]/10 -z-0 hidden lg:block" />
          </div>

          {/* Copy */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-rule" />
              <span className="text-overline text-[var(--marq-mute)]">
                About MARQ
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.02] text-[var(--marq-ink)]">
              Your trusted partner in building{" "}
              <span className="font-italic-serif text-[var(--marq-gold)]">
                wealth through real estate.
              </span>
            </h2>
            <p className="mt-6 text-base text-[var(--marq-ink-2)] leading-relaxed">
              At MARQ Realtors, we combine market intelligence with access to
              high-growth projects — ensuring every decision you make is backed
              by insight, not guesswork. Our focus is simple: help you invest
              smarter, grow confidently, and build long-term value.
            </p>

            <ul className="mt-8 space-y-4">
              {POINTS.map((p) => {
                const Icon = p.icon;
                return (
                  <li key={p.text} className="flex items-start gap-4">
                    <span className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-[var(--marq-gold-soft)] text-[var(--marq-gold-deep)]">
                      <Icon size={16} strokeWidth={1.5} />
                    </span>
                    <span className="text-sm text-[var(--marq-ink-2)] leading-relaxed pt-1.5">
                      {p.text}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10">
              <a
                href="#advisor"
                data-testid="about-cta"
                className="btn-outline"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Trust strip with loader bars */}
        <div
          data-testid="trust-strip"
          className="mt-20 sm:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--marq-line)] border border-[var(--marq-line)]"
        >
          {TRUST.map((t, i) => (
            <div
              key={t.label}
              data-testid={`trust-${i}`}
              className="bg-[var(--marq-paper)] p-8 lg:p-10 flex flex-col"
            >
              <div className="flex items-baseline gap-1">
                <span className="counter-number text-5xl sm:text-6xl text-[var(--marq-ink)]">
                  {t.value}
                </span>
                <span className="font-display text-3xl text-[var(--marq-gold)]">
                  {t.suffix}
                </span>
              </div>
              <span className="mt-4 text-xs tracking-[0.2em] uppercase text-[var(--marq-mute)]">
                {t.label}
              </span>
              <div className="loader-bar mt-5">
                <span style={{ animationDelay: `${i * 0.15 + 0.2}s` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
