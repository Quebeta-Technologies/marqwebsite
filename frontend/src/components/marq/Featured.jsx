import useReveal from "@/hooks/useReveal";

const ITEMS = [
  {
    key: "commercial",
    title: "Commercial",
    tag: "Grade A · Pune",
    body:
      "Premium commercial spaces in strategic business locations with strong visibility, rental potential, and long-term appreciation.",
    image:
      "https://images.pexels.com/photos/16370914/pexels-photo-16370914.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    span: "lg:col-span-7",
  },
  {
    key: "retail",
    title: "Retail",
    tag: "High Street · Mumbai",
    body:
      "High-potential retail opportunities designed for footfall, visibility, and strong return potential.",
    image:
      "https://images.pexels.com/photos/8122150/pexels-photo-8122150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    span: "lg:col-span-5",
  },
  {
    key: "land",
    title: "Land",
    tag: "Growth Corridor",
    body:
      "Strategic land parcels with future development potential and long-term appreciation opportunities.",
    image:
      "https://images.pexels.com/photos/16902641/pexels-photo-16902641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    span: "lg:col-span-5",
  },
  {
    key: "residential",
    title: "Residential",
    tag: "Luxury Living",
    body:
      "Curated residential properties that combine lifestyle appeal, location advantage, and investment value.",
    image:
      "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBsdXh1cnklMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzgwNDgyODA3fDA&ixlib=rb-4.1.0&q=85",
    span: "lg:col-span-7",
  },
];

export default function Featured() {
  const ref = useReveal();
  return (
    <section
      id="featured"
      data-testid="featured-section"
      className="bg-[var(--marq-ivory)]"
    >
      <div
        ref={ref}
        className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32"
      >
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-rule" />
              <span className="text-overline text-[var(--marq-mute)]">
                Curated Portfolio
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-[var(--marq-ink)]">
              Featured{" "}
              <span className="font-italic-serif text-[var(--marq-gold)]">
                investment opportunities
              </span>
            </h2>
          </div>
          <p className="lg:max-w-md text-base text-[var(--marq-ink-2)] leading-relaxed">
            Discover curated properties with strong growth potential and real
            investment value.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {ITEMS.map((it) => (
            <article
              key={it.key}
              data-testid={`featured-${it.key}`}
              className={`group relative bg-white border border-[var(--marq-line)] ${it.span}`}
            >
              <div className="zoom-img relative h-[320px] sm:h-[380px] overflow-hidden">
                <img
                  src={it.image}
                  alt={it.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
                <div className="absolute top-5 left-5 bg-[var(--marq-gold)] text-white text-overline px-3 py-1">
                  {it.tag}
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-display text-3xl">{it.title}</h3>
                  <p className="mt-2 text-sm text-white/85 max-w-md opacity-90 group-hover:opacity-100 transition-opacity">
                    {it.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#advisor"
            data-testid="featured-cta"
            className="btn-outline"
          >
            Discuss an Opportunity
          </a>
        </div>
      </div>
    </section>
  );
}
