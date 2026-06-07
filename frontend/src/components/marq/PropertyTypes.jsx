import { useState } from "react";
import useReveal from "@/hooks/useReveal";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const TYPES = [
  {
    key: "commercial",
    title: "Commercial",
    tag: "Grade A · Office",
    line: "Premium commercial spaces engineered for visibility, productivity and long-term yield.",
    bullets: [
      "Grade-A offices in CBDs & IT corridors",
      "Strong rental potential and tenant demand",
      "Built for long-term capital appreciation",
    ],
    image:
      "https://images.unsplash.com/photo-1621831337128-35676ca30868?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21tZXJjaWFsJTIwb2ZmaWNlJTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwwfHx8fDE3ODA0ODI4MDd8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    key: "retail",
    title: "Retail",
    tag: "High Street · Mall",
    line: "Footfall-led retail addresses on prime high streets and inside marquee malls.",
    bullets: [
      "High-visibility, high-traffic frontage",
      "Anchor tenant ecosystems and brand mix",
      "Optimised lease structures and ROI",
    ],
    image:
      "https://images.pexels.com/photos/8122150/pexels-photo-8122150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=940",
  },
  {
    key: "land",
    title: "Land",
    tag: "Growth Corridor",
    line: "Strategic land parcels positioned along Maharashtra's most active growth corridors.",
    bullets: [
      "Clear-title parcels with verified diligence",
      "Located along upcoming infra corridors",
      "Strong appreciation & development potential",
    ],
    image:
      "https://images.pexels.com/photos/16408959/pexels-photo-16408959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=940",
  },
  {
    key: "residential",
    title: "Residential",
    tag: "Luxury Living",
    line: "Curated residences that pair iconic addresses with strong investment fundamentals.",
    bullets: [
      "Prime addresses across Pune & Mumbai",
      "Branded, design-led, RERA-approved homes",
      "Healthy rental yields & resale demand",
    ],
    image:
      "https://images.unsplash.com/photo-1705326701287-346fc37a2c86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBsdXh1cnklMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzgwNDgyODA3fDA&ixlib=rb-4.1.0&q=85",
  },
];

export default function PropertyTypes() {
  const ref = useReveal();
  const [active, setActive] = useState(0);
  const current = TYPES[active];

  return (
    <section
      id="types"
      data-testid="property-types-section"
      className="bg-[var(--marq-paper)] border-y border-[var(--marq-line)] relative overflow-hidden"
    >
      <div
        ref={ref}
        className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end mb-12">
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

        {/* Browse tabs on top */}
        <div className="mb-8">
          <div className="text-overline text-[var(--marq-mute)] mb-4">
            Browse
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {TYPES.map((t, i) => {
              const selected = i === active;
              return (
                <button
                  key={t.key}
                  type="button"
                  data-testid={`type-tab-${t.key}`}
                  aria-selected={selected}
                  onClick={() => setActive(i)}
                  className={`group relative text-left border transition-all duration-500 overflow-hidden ${
                    selected
                      ? "bg-[var(--marq-ink)] text-white border-[var(--marq-ink)] shadow-[0_20px_40px_-20px_rgba(13,13,13,0.35)]"
                      : "bg-white text-[var(--marq-ink)] border-[var(--marq-line)] hover:border-[var(--marq-gold)] hover:-translate-y-1"
                  }`}
                >
                  {selected && (
                    <span className="absolute top-0 left-0 h-[2px] w-full bg-[var(--marq-gold-2)]" />
                  )}
                  <div className="flex items-center gap-4 p-3 pr-4">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 overflow-hidden bg-[var(--marq-sand)]">
                      <img
                        src={t.image}
                        alt={t.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className={`text-[10px] tracking-[0.2em] uppercase ${
                          selected ? "text-[var(--marq-gold-2)]" : "text-[var(--marq-mute)]"
                        }`}
                      >
                        0{i + 1}
                        {selected && " · Selected"}
                      </div>
                      <div className="font-display text-lg leading-tight mt-0.5">
                        {t.title}
                      </div>
                      <div
                        className={`mt-0.5 text-[11px] truncate ${
                          selected ? "text-white/60" : "text-[var(--marq-mute)]"
                        }`}
                      >
                        {t.tag}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active full card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.article
              key={current.key}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
              data-testid={`type-active-${current.key}`}
              className="grid grid-cols-1 md:grid-cols-2 bg-white border border-[var(--marq-line)] overflow-hidden min-h-[460px] shadow-[0_30px_60px_-30px_rgba(13,13,13,0.18)]"
            >
              <div className="relative overflow-hidden bg-[var(--marq-sand)] order-1 md:order-1 min-h-[300px]">
                <img
                  src={current.image}
                  alt={current.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <span className="absolute top-5 left-5 text-overline bg-[var(--marq-ink)] text-[var(--marq-gold-2)] px-3 py-1.5">
                  0{active + 1} · {current.tag}
                </span>
              </div>
              <div className="p-8 lg:p-12 flex flex-col order-2 md:order-2">
                <div className="text-overline text-[var(--marq-gold-deep)]">
                  {current.tag}
                </div>
                <h3 className="mt-4 font-display text-4xl lg:text-5xl text-[var(--marq-ink)] leading-[1.05]">
                  {current.title}
                </h3>
                <p className="mt-5 text-base text-[var(--marq-ink-2)] leading-relaxed">
                  {current.line}
                </p>
                <ul className="mt-7 space-y-3.5">
                  {current.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <span className="w-5 h-5 mt-0.5 flex-shrink-0 flex items-center justify-center bg-[var(--marq-ink)] text-[var(--marq-gold-2)]">
                        <Check size={11} strokeWidth={2.2} />
                      </span>
                      <span className="text-[var(--marq-ink-2)] leading-snug">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-10">
                  <a
                    href="#enquire"
                    data-testid={`type-${current.key}-cta`}
                    className="btn-gold"
                  >
                    Explore Now
                    <ArrowRight size={15} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
