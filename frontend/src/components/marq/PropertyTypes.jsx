import useReveal from "@/hooks/useReveal";

const TYPES = [
  {
    key: "commercial",
    title: "Commercial",
    body:
      "Find premium commercial spaces with strong business potential, strategic locations, and long-term value creation.",
    image:
      "https://images.unsplash.com/photo-1621831337128-35676ca30868?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21tZXJjaWFsJTIwb2ZmaWNlJTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwwfHx8fDE3ODA0ODI4MDd8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    key: "land",
    title: "Land",
    body:
      "Explore land opportunities suited for future development, strategic holding, and long-term appreciation.",
    image:
      "https://images.pexels.com/photos/16408959/pexels-photo-16408959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    key: "residential",
    title: "Residential",
    body:
      "Discover residential properties that balance lifestyle, location, and investment value for end use or portfolio growth.",
    image:
      "https://images.unsplash.com/photo-1705326701287-346fc37a2c86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBsdXh1cnklMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzgwNDgyODA3fDA&ixlib=rb-4.1.0&q=85",
  },
];

export default function PropertyTypes() {
  const ref = useReveal();
  return (
    <section
      id="types"
      data-testid="property-types-section"
      className="bg-[var(--marq-ivory)]"
    >
      <div
        ref={ref}
        className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32"
      >
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="gold-rule" />
            <span className="text-overline text-[var(--marq-mute)]">
              Explore
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-[var(--marq-ink)]">
            Explore{" "}
            <span className="font-italic-serif text-[var(--marq-gold)]">
              property types
            </span>
          </h2>
          <p className="mt-6 text-base text-[var(--marq-ink-2)] leading-relaxed">
            Discover curated real estate opportunities across high-potential
            asset categories designed to match your goals, budget, and
            investment vision.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TYPES.map((t) => (
            <article
              key={t.key}
              data-testid={`type-${t.key}`}
              className="group bg-white border border-[var(--marq-line)]"
            >
              <div className="zoom-img relative h-72 overflow-hidden">
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-overline text-[var(--marq-ink)]">
                  {t.title}
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl text-[var(--marq-ink)]">
                  {t.title}
                </h3>
                <div className="mt-2 h-px w-10 bg-[var(--marq-gold)]" />
                <p className="mt-4 text-sm text-[var(--marq-ink-2)] leading-relaxed">
                  {t.body}
                </p>
                <a
                  href="#enquire"
                  data-testid={`type-${t.key}-cta`}
                  className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--marq-ink)] link-gold"
                >
                  Explore {t.title} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
