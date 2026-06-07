import useReveal from "@/hooks/useReveal";

const TYPES = [
  {
    key: "commercial",
    title: "Commercial",
    body:
      "Premium commercial spaces in strategic business locations with strong visibility, rental potential, and long-term appreciation.",
    image:
      "https://images.unsplash.com/photo-1621831337128-35676ca30868?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21tZXJjaWFsJTIwb2ZmaWNlJTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwwfHx8fDE3ODA0ODI4MDd8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    key: "retail",
    title: "Retail",
    body:
      "High-potential retail opportunities designed for footfall, visibility, and strong return potential on high streets and malls.",
    image:
      "https://images.pexels.com/photos/8122150/pexels-photo-8122150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=940",
  },
  {
    key: "land",
    title: "Land",
    body:
      "Strategic land parcels with future development potential and long-term appreciation across growth corridors.",
    image:
      "https://images.pexels.com/photos/16408959/pexels-photo-16408959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=940",
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
      className="bg-[var(--marq-paper)] border-y border-[var(--marq-line)]"
    >
      <div
        ref={ref}
        className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-rule" />
              <span className="text-overline text-[var(--marq-mute)]">
                We Deal In
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[var(--marq-ink)]">
              Four asset classes,{" "}
              <span className="font-italic-serif text-[var(--marq-gold)]">
                one expert lens.
              </span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-base text-[var(--marq-ink-2)] leading-relaxed lg:max-w-md">
            Curated real estate opportunities across high-potential asset
            categories — matched to your goals, budget, and investment vision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TYPES.map((t, i) => (
            <article
              key={t.key}
              data-testid={`type-${t.key}`}
              className="group relative bg-white border border-[var(--marq-line)] overflow-hidden"
            >
              <div className="zoom-img relative h-72 overflow-hidden">
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent" />
                <span className="absolute top-4 left-4 text-overline text-white/85 bg-black/40 backdrop-blur px-2.5 py-1">
                  0{i + 1}
                </span>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-display text-2xl leading-tight">
                    {t.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-[var(--marq-ink-2)] leading-relaxed min-h-[80px]">
                  {t.body}
                </p>
                <a
                  href="#enquire"
                  data-testid={`type-${t.key}-cta`}
                  className="mt-5 inline-flex items-center gap-2 text-sm text-[var(--marq-ink)] link-gold"
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
