import { useState } from "react";
import useReveal from "@/hooks/useReveal";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD A NEW PROJECT
// Find the relevant tab array below (COMMERCIAL_PROJECTS, RETAIL_PROJECTS, etc.)
// and push a new object. The UI handles the rest automatically.
// ─────────────────────────────────────────────────────────────────────────────

const COMMERCIAL_PROJECTS = [
  {
    id: "imperial-plaza",
    name: "Imperial Plaza",
    tag: "Grade A · Kothrud, Pune",
    line: "Award-winning Grade A commercial project near Chandani Chowk — office spaces for sale and retail spaces for lease, with 80%+ construction complete.",
    bullets: [
      "Office: 950–2,700 sq ft for sale | Retail: 11,000–39,000 sq ft for lease",
      "Prime location on Bangalore Highway, Kothrud — excellent connectivity & visibility",
      "Possession within 3–7 months · RERA: P52100028889 · CREDAI & NAREDCO member",
    ],
    image:
      "/imperial.jpg",
  },
  // ── ADD NEXT COMMERCIAL PROJECT HERE ──
  // {
  //   id: "project-id",
  //   name: "Project Name",
  //   tag: "Grade A · Location",
  //   line: "Short description.",
  //   bullets: ["Bullet 1", "Bullet 2", "Bullet 3"],
  //   image: "https://your-image-url.jpg",
  // },
];

const RETAIL_PROJECTS = [
  // ── ADD RETAIL PROJECTS HERE ──
  // {
  //   id: "project-id",
  //   name: "Project Name",
  //   tag: "High Street · Location",
  //   line: "Short description.",
  //   bullets: ["Bullet 1", "Bullet 2", "Bullet 3"],
  //   image: "https://your-image-url.jpg",
  // },
];

const LAND_PROJECTS = [
  // ── ADD LAND PROJECTS HERE ──
  // {
  //   id: "project-id",
  //   name: "Project Name",
  //   tag: "Growth Corridor · Location",
  //   line: "Short description.",
  //   bullets: ["Bullet 1", "Bullet 2", "Bullet 3"],
  //   image: "https://your-image-url.jpg",
  // },
];

const RESIDENTIAL_PROJECTS = [
  {
    id: "crown-8",
    name: "Crown 8",
    tag: "Luxury Residential · Balewadi, Pune",
    line: "100+ metre ultra-premium high-rise by Pyramid Lifestyle on Balewadi High Street — exclusive 3 BHK homes designed for sophistication, space, and an elevated lifestyle.",
    bullets: [
      "Exclusive 3 BHK premium flats · Balewadi High Street, near Baner",
      "Rooftop infinity pool, sky walk, banquet hall, gym & 25+ world-class amenities",
      "MahaRERA: P52100055233 · Jupiter Hospital 2 km · Phoenix Mall 7 km",
    ],
    image:
      "/balewadi.jpg",
  },
  // ── ADD RESIDENTIAL PROJECTS HERE ──
  // {
  //   id: "project-id",
  //   name: "Project Name",
  //   tag: "Luxury Living · Location",
  //   line: "Short description.",
  //   bullets: ["Bullet 1", "Bullet 2", "Bullet 3"],
  //   image: "https://your-image-url.jpg",
  // },
];

// ─── PLACEHOLDER CONTENT (shown when no projects exist for a tab) ─────────────
const PLACEHOLDERS = {
  retail: {
    tag: "High Street · Mall",
    line: "Footfall-led retail addresses on prime high streets and inside marquee malls.",
    bullets: [
      "High-visibility, high-traffic frontage",
      "Anchor tenant ecosystems and brand mix",
      "Optimised lease structures and ROI",
    ],
    image:
      "https://customer-assets.emergentagent.com/job_launch-demo-5/artifacts/q95t4mfq_retail.png",
  },
  land: {
    tag: "Growth Corridor",
    line: "Strategic land parcels positioned along Maharashtra's most active growth corridors.",
    bullets: [
      "Clear-title parcels with verified diligence",
      "Located along upcoming infra corridors",
      "Strong appreciation & development potential",
    ],
    image:
      "https://customer-assets.emergentagent.com/job_launch-demo-5/artifacts/levlxt0t_land%20png.png",
  },
  residential: {
    tag: "Luxury Living",
    line: "Curated residences that pair iconic addresses with strong investment fundamentals.",
    bullets: [
      "Prime addresses across Pune & Mumbai",
      "Branded, design-led, RERA-approved homes",
      "Healthy rental yields & resale demand",
    ],
    image:
      "https://customer-assets.emergentagent.com/job_launch-demo-5/artifacts/yjj88b0l_residential.png",
  },
};

// ─── TAB DEFINITIONS ─────────────────────────────────────────────────────────
const TYPES = [
  {
    key: "commercial",
    title: "Commercial",
    tag: "Grade A · Office",
    image: COMMERCIAL_PROJECTS[0]?.image ||
      "https://customer-assets.emergentagent.com/job_launch-demo-5/artifacts/iuf9x9wu_commercial.png",
    projects: COMMERCIAL_PROJECTS,
  },
  {
    key: "retail",
    title: "Retail",
    tag: "High Street · Mall",
    image: RETAIL_PROJECTS[0]?.image || PLACEHOLDERS.retail.image,
    projects: RETAIL_PROJECTS,
    placeholder: PLACEHOLDERS.retail,
  },
  {
    key: "land",
    title: "Land",
    tag: "Growth Corridor",
    image: LAND_PROJECTS[0]?.image || PLACEHOLDERS.land.image,
    projects: LAND_PROJECTS,
    placeholder: PLACEHOLDERS.land,
  },
  {
    key: "residential",
    title: "Residential",
    tag: "Luxury Living",
    image: RESIDENTIAL_PROJECTS[0]?.image || PLACEHOLDERS.residential.image,
    projects: RESIDENTIAL_PROJECTS,
    placeholder: PLACEHOLDERS.residential,
  },
];

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────
function ProjectCard({ project, index, tabKey }) {
  return (
    <article
      data-testid={`${tabKey}-project-${project.id}`}
      className="grid grid-cols-1 md:grid-cols-2 bg-white border border-[var(--marq-line)] overflow-hidden min-h-[460px] shadow-[0_30px_60px_-30px_rgba(13,13,13,0.18)]"
    >
      <div className="relative overflow-hidden bg-[var(--marq-sand)] order-1 min-h-[300px]">
        <img
          src={project.image}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        <span className="absolute top-5 left-5 text-overline bg-[var(--marq-ink)] text-[var(--marq-gold-2)] px-3 py-1.5">
          {String(index + 1).padStart(2, "0")} · {project.tag}
        </span>
      </div>
      <div className="p-8 lg:p-12 flex flex-col order-2">
        <div className="text-overline text-[var(--marq-gold-deep)]">
          {project.tag}
        </div>
        <h3 className="mt-4 font-display text-4xl lg:text-5xl text-[var(--marq-ink)] leading-[1.05]">
          {project.name}
        </h3>
        <p className="mt-5 text-base text-[var(--marq-ink-2)] leading-relaxed">
          {project.line}
        </p>
        <ul className="mt-7 space-y-3.5">
          {project.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm">
              <span className="w-5 h-5 mt-0.5 flex-shrink-0 flex items-center justify-center bg-[var(--marq-ink)] text-[var(--marq-gold-2)]">
                <Check size={11} strokeWidth={2.2} />
              </span>
              <span className="text-[var(--marq-ink-2)] leading-snug">{b}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-10">
          <a
            href="#enquire"
            data-testid={`${tabKey}-project-${project.id}-cta`}
            className="btn-gold"
          >
            Explore Now
            <ArrowRight size={15} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </article>
  );
}

// ─── PLACEHOLDER CARD (no projects yet) ──────────────────────────────────────
function PlaceholderCard({ tab, active }) {
  const p = tab.placeholder;
  return (
    <article
      data-testid={`type-active-${tab.key}`}
      className="grid grid-cols-1 md:grid-cols-2 bg-white border border-[var(--marq-line)] overflow-hidden min-h-[460px] shadow-[0_30px_60px_-30px_rgba(13,13,13,0.18)]"
    >
      <div className="relative overflow-hidden bg-[var(--marq-sand)] order-1 min-h-[300px]">
        <img
          src={p.image}
          alt={tab.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        <span className="absolute top-5 left-5 text-overline bg-[var(--marq-ink)] text-[var(--marq-gold-2)] px-3 py-1.5">
          {String(active + 1).padStart(2, "0")} · {p.tag}
        </span>
      </div>
      <div className="p-8 lg:p-12 flex flex-col order-2">
        <div className="text-overline text-[var(--marq-gold-deep)]">{p.tag}</div>
        <h3 className="mt-4 font-display text-4xl lg:text-5xl text-[var(--marq-ink)] leading-[1.05]">
          {tab.title}
        </h3>
        <p className="mt-5 text-base text-[var(--marq-ink-2)] leading-relaxed">
          {p.line}
        </p>
        <ul className="mt-7 space-y-3.5">
          {p.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm">
              <span className="w-5 h-5 mt-0.5 flex-shrink-0 flex items-center justify-center bg-[var(--marq-ink)] text-[var(--marq-gold-2)]">
                <Check size={11} strokeWidth={2.2} />
              </span>
              <span className="text-[var(--marq-ink-2)] leading-snug">{b}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-10">
          <a
            href="#enquire"
            data-testid={`type-${tab.key}-cta`}
            className="btn-gold"
          >
            Explore Now
            <ArrowRight size={15} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </article>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function PropertyTypes() {
  const ref = useReveal();
  const [active, setActive] = useState(0);
  const current = TYPES[active];
  const hasProjects = current.projects.length > 0;

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

        {/* Browse tabs */}
        <div className="mb-8">
          <div className="text-overline text-[var(--marq-mute)] mb-4">Browse</div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {TYPES.map((t, i) => {
              const selected = i === active;
              const count = t.projects.length;
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
                        {selected && count > 0 && ` · ${count} project${count > 1 ? "s" : ""}`}
                        {selected && count === 0 && " · Selected"}
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

        {/* Active panel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
            >
              {hasProjects ? (
                <div className="flex flex-col gap-6">
                  {current.projects.map((project, i) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={i}
                      tabKey={current.key}
                    />
                  ))}
                </div>
              ) : (
                <PlaceholderCard tab={current} active={active} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}