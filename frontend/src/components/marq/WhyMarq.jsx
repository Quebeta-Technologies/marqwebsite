import { useState } from "react";
import useReveal from "@/hooks/useReveal";

const LETTERS = [
  {
    letter: "M",
    title: "Market Intelligence",
    body:
      "We track real-time trends, pricing patterns, and growth zones — so you invest based on data, not assumptions.",
  },
  {
    letter: "A",
    title: "Advisory-Driven Approach",
    body:
      "We don't just sell properties. We guide you to make the right decision based on your goals.",
  },
  {
    letter: "R",
    title: "Reliable Opportunities",
    body:
      "Every project and partnership is carefully vetted to ensure credibility, quality, and long-term value.",
  },
  {
    letter: "Q",
    title: "Quality Over Quantity",
    body:
      "We focus on curated, high-potential properties instead of overwhelming you with endless options.",
  },
];

export default function WhyMarq() {
  const ref = useReveal();
  const [active, setActive] = useState(0);

  return (
    <section
      id="why"
      data-testid="why-section"
      className="bg-[var(--marq-ink)] text-white relative overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 -right-20 font-display italic text-[18rem] leading-none text-white opacity-[0.025] select-none"
      >
        MARQ
      </div>

      <div
        ref={ref}
        className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LHS Image */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="zoom-img aspect-[4/5] overflow-hidden bg-white/5 relative">
                <img
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80"
                  alt="MARQ Realtors — Premium advisory"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                <div className="absolute top-6 left-6 tag-pill dark">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--marq-gold)]" />
                  The MARQ Difference
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-overline text-[var(--marq-gold-2)] mb-2">
                    Currently exploring
                  </div>
                  <div className="font-display text-3xl leading-tight">
                    {LETTERS[active].title}
                  </div>
                </div>
              </div>
              {/* Decorative frames */}
              <div className="absolute -bottom-5 -right-5 w-32 h-32 border border-[var(--marq-gold)]/60 hidden lg:block" />
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-[var(--marq-gold)]/15 hidden lg:block" />
            </div>
          </div>

          {/* RHS Content */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-rule" />
              <span className="text-overline text-white/60">Why MARQ</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.02]">
              Built on{" "}
              <span className="font-italic-serif text-[var(--marq-gold-2)]">
                principles
              </span>
              , not pitches.
            </h2>
            <p className="mt-6 text-base text-white/65 leading-relaxed max-w-xl">
              Four convictions that shape every advisory engagement — building
              decisions rooted in clarity, credibility and conviction.
            </p>

            {/* Interactive accordion-style letters */}
            <div className="mt-10 divide-y divide-white/10 border-t border-white/10">
              {LETTERS.map((p, i) => (
                <button
                  key={p.letter}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  data-testid={`why-${p.letter.toLowerCase()}`}
                  className={`w-full text-left py-6 grid grid-cols-[80px_1fr_auto] items-center gap-6 transition-all duration-500 ${
                    active === i ? "bg-white/[0.04]" : ""
                  }`}
                >
                  <span
                    className={`font-display text-6xl sm:text-7xl leading-none transition-all duration-500 ${
                      active === i
                        ? "text-[var(--marq-gold-2)] translate-x-2"
                        : "text-white/30"
                    }`}
                  >
                    {p.letter}
                  </span>
                  <span>
                    <span
                      className={`block font-display text-xl sm:text-2xl leading-tight transition-colors duration-500 ${
                        active === i ? "text-white" : "text-white/70"
                      }`}
                    >
                      {p.title}
                    </span>
                    <span
                      className={`mt-1 block text-sm text-white/55 leading-relaxed transition-all duration-500 overflow-hidden ${
                        active === i ? "max-h-20 opacity-100" : "max-h-0 opacity-0 sm:max-h-20 sm:opacity-100"
                      }`}
                    >
                      {p.body}
                    </span>
                  </span>
                  <span
                    className={`text-xs tracking-widest transition-all duration-500 ${
                      active === i
                        ? "text-[var(--marq-gold-2)] opacity-100"
                        : "text-white/30 opacity-60"
                    }`}
                  >
                    0{i + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
