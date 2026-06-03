import useReveal from "@/hooks/useReveal";

const STATS = [
  { value: "25+", label: "Years of Experience Across Major Cities" },
  { value: "1.5K+", label: "Clients Served Across India" },
  { value: "18+", label: "Verified Projects & Developer Tie-ups" },
];

export default function About() {
  const ref = useReveal();
  return (
    <section
      id="about"
      data-testid="about-section"
      className="bg-[var(--marq-paper)] border-y border-[var(--marq-line)]"
    >
      <div
        ref={ref}
        className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-rule" />
              <span className="text-overline text-[var(--marq-mute)]">
                About MARQ
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] text-[var(--marq-ink)]">
              Your Trusted Partner in Building Wealth Through Real Estate
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pl-8 lg:border-l lg:border-[var(--marq-line)]">
            <p className="font-serif text-2xl sm:text-3xl italic text-[var(--marq-ink)] leading-snug">
              We don’t just show properties — we help you invest right.
            </p>
            <p className="mt-6 text-base text-[var(--marq-ink-2)] leading-relaxed">
              At MARQ Realtors, we combine market intelligence with access to
              high-growth projects, ensuring every decision you make is backed
              by insight — not guesswork. We help you identify the right
              opportunities, manage your real estate portfolio, and make
              informed decisions at the right time.
            </p>
            <p className="mt-4 text-base text-[var(--marq-ink-2)] leading-relaxed">
              Our focus is simple — to help you invest smarter, grow
              confidently, and build long-term value through real estate.
            </p>
          </div>
        </div>

        <div
          data-testid="about-stats"
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-[var(--marq-line)] border border-[var(--marq-line)]"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-[var(--marq-paper)] p-10 flex flex-col"
              data-testid={`stat-${s.value.replace(/\W/g, "")}`}
            >
              <span className="font-serif text-5xl sm:text-6xl text-[var(--marq-gold)] leading-none">
                {s.value}
              </span>
              <span className="mt-4 text-sm text-[var(--marq-ink-2)] max-w-[18ch]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
