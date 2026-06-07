import useReveal from "@/hooks/useReveal";
import useInView from "@/hooks/useInView";
import useCountUp from "@/hooks/useCountUp";
import { Sparkles, ShieldCheck, Compass, BadgeCheck } from "lucide-react";

const ABOUT_IMG =
  "https://customer-assets.emergentagent.com/job_launch-demo-5/artifacts/s5ddrz7z_about%20us%20image.png";

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
  { value: 25, decimals: 0, suffix: "+", label: "Years of Experience" },
  { value: 1.5, decimals: 1, suffix: "K+", label: "Clients Served" },
  { value: 18, decimals: 0, suffix: "+", label: "Developer Tie-ups" },
  { value: 100, decimals: 0, suffix: "%", label: "Verified Projects" },
];

function TrustStat({ data, index, start }) {
  const display = useCountUp(data.value, {
    duration: 1800,
    decimals: data.decimals,
    start,
  });
  return (
    <div
      data-testid={`trust-${index}`}
      className="p-8 lg:p-10 flex flex-col relative group"
    >
      <div className="flex items-baseline gap-1">
        <span className="counter-number text-5xl sm:text-6xl text-white tabular-nums">
          {display}
        </span>
        <span className="font-display text-3xl text-[var(--marq-gold-2)]">
          {data.suffix}
        </span>
      </div>
      <span className="mt-4 text-xs tracking-[0.22em] uppercase text-white/55">
        {data.label}
      </span>
      <div className="loader-bar mt-5 !bg-white/10">
        <span style={{ animationDelay: `${index * 0.15 + 0.2}s` }} />
      </div>
    </div>
  );
}

export default function About() {
  const ref = useReveal();
  const [trustRef, trustInView] = useInView({ threshold: 0.25 });

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
            <div className="zoom-img relative aspect-square overflow-hidden bg-[var(--marq-ink)]">
              <img
                src={ABOUT_IMG}
                alt="About MARQ Realtors"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative frames */}
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

        {/* Trust strip — black background, count-up on scroll */}
        <div
          ref={trustRef}
          data-testid="trust-strip"
          style={{ background: "var(--marq-ink)" }}
          className="mt-20 sm:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-px relative overflow-hidden"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.08] z-0"
            style={{
              background:
                "radial-gradient(circle at 30% 50%, var(--marq-gold) 0%, transparent 60%)",
            }}
          />
          {TRUST.map((t, i) => (
            <TrustStat
              key={t.label}
              data={t}
              index={i}
              start={trustInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
