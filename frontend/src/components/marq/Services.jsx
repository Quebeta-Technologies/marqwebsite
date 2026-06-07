import useReveal from "@/hooks/useReveal";
import { Building2, TrendingUp, Handshake, Store, ArrowRight } from "lucide-react";

const ITEMS = [
  {
    key: "buy",
    num: "01",
    title: "Buy",
    icon: Building2,
    tagline: "Acquire the right asset with confidence.",
    body:
      "We help identify high-potential opportunities, evaluate market dynamics, conduct due diligence, and negotiate effectively — ensuring every acquisition aligns with your objectives and long-term vision.",
    cta: "Buy Now",
    requirement: "Buy",
  },
  {
    key: "sell",
    num: "02",
    title: "Sell",
    icon: TrendingUp,
    tagline: "Maximize value through strategic positioning.",
    body:
      "From pricing and market presentation to buyer engagement and negotiations, we help unlock the full value of your property while ensuring a seamless transaction process.",
    cta: "Sell Now",
    requirement: "Sell",
  },
  {
    key: "lease",
    num: "03",
    title: "Lease Mandates",
    icon: Store,
    tagline: "Connect the right property with the right occupier.",
    body:
      "We assist property owners, developers, and businesses with tailored leasing solutions, helping secure quality tenants, optimize occupancy, and create sustainable value.",
    cta: "Lease Now",
    requirement: "Lease",
  },
  {
    key: "jv",
    num: "04",
    title: "Joint Ventures",
    icon: Handshake,
    tagline: "Unlock the potential of land and development opportunities.",
    body:
      "We facilitate strategic partnerships between landowners and developers, helping assess feasibility, structure agreements, and create projects that generate long-term value for all stakeholders.",
    cta: "JV Now",
    requirement: "Joint Venture",
  },
];

function handleServiceClick(e, requirement) {
  e.preventDefault();
  window.dispatchEvent(
    new CustomEvent("marq:setRequirement", { detail: requirement })
  );
  const target = document.getElementById("advisor");
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Services() {
  const ref = useReveal();
  return (
    <section
      id="services"
      data-testid="services-section"
      className="bg-[var(--marq-ivory)] relative overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-12 -left-10 font-display italic text-[12rem] leading-none text-[var(--marq-ink)] opacity-[0.04] select-none"
      >
        advisory
      </div>

      <div
        ref={ref}
        className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-rule" />
              <span className="text-overline text-[var(--marq-mute)]">
                What We Do
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[var(--marq-ink)]">
              Strategic
              <br />
              <span className="font-italic-serif text-[var(--marq-gold)]">
                real estate advisory.
              </span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-base text-[var(--marq-ink-2)] leading-relaxed">
            Real estate decisions shape long-term wealth, business growth, and
            future opportunities. MARQ helps investors, landowners, developers,
            and businesses navigate these decisions with clarity and
            confidence. From acquisitions and disposals to leasing and joint
            ventures, we combine market insight, strategic guidance, and
            hands-on execution to deliver meaningful outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ITEMS.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.key}
                data-testid={`service-${s.key}`}
                className="group relative bg-white border border-[var(--marq-line)] p-8 lg:p-10 hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_30px_60px_-30px_rgba(13,13,13,0.25)] overflow-hidden"
              >
                <span className="absolute top-0 left-0 h-[2px] w-0 bg-[var(--marq-gold)] group-hover:w-full transition-all duration-700" />

                {/* Header row: number + title + inline button */}
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-baseline gap-4 min-w-0">
                    <span className="text-overline text-[var(--marq-gold-deep)] flex-shrink-0">
                      {s.num}
                    </span>
                    <h3 className="font-display text-3xl sm:text-4xl text-[var(--marq-ink)] leading-tight">
                      {s.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    data-testid={`service-${s.key}-cta`}
                    onClick={(e) => handleServiceClick(e, s.requirement)}
                    className="btn-gold !px-5 !py-2.5 !text-[10px] flex-shrink-0"
                  >
                    {s.cta}
                    <ArrowRight size={13} strokeWidth={1.5} />
                  </button>
                </div>

                <p className="mt-6 font-italic-serif text-xl text-[var(--marq-gold-deep)] leading-snug flex items-start gap-3">
                  <Icon
                    size={18}
                    strokeWidth={1.4}
                    className="text-[var(--marq-gold)] mt-1.5 flex-shrink-0"
                  />
                  <span>{s.tagline}</span>
                </p>
                <p className="mt-4 text-sm text-[var(--marq-ink-2)] leading-relaxed">
                  {s.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
