import useReveal from "@/hooks/useReveal";

const LETTERS = [
  {
    letter: "M",
    title: "Market Intelligence",
    body:
      "We track real-time trends, pricing patterns, and growth zones so you invest based on data, not assumptions.",
  },
  {
    letter: "A",
    title: "Advisory-Driven Approach",
    body:
      "We don’t just sell properties — we guide you to make the right decision based on your goals.",
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
  return (
    <section
      id="why"
      data-testid="why-section"
      className="bg-[var(--marq-ink)] text-white"
    >
      <div
        ref={ref}
        className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-rule" />
              <span className="text-overline text-white/60">
                The MARQ Difference
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl leading-[1.02]">
              Why{" "}
              <span className="font-italic-serif text-[var(--marq-gold)]">
                MARQ
              </span>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-white/70 text-base leading-relaxed max-w-xl">
              Four principles guide every advisory engagement — building
              decisions rooted in clarity, credibility and conviction.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {LETTERS.map((p) => (
            <article
              key={p.letter}
              data-testid={`why-${p.letter.toLowerCase()}`}
              className="bg-[var(--marq-ink)] p-10 group hover:bg-[#111111] transition-colors duration-300"
            >
              <div className="font-display text-8xl text-[var(--marq-gold)] leading-none group-hover:scale-105 transition-transform duration-500 origin-left">
                {p.letter}
              </div>
              <h3 className="mt-6 font-display text-2xl text-white">
                {p.title}
              </h3>
              <div className="mt-3 h-px w-10 bg-[var(--marq-gold)]" />
              <p className="mt-5 text-sm text-white/70 leading-relaxed">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
