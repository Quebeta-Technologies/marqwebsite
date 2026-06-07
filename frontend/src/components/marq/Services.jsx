import useReveal from "@/hooks/useReveal";
import { Building2, Handshake, TrendingUp } from "lucide-react";

const ITEMS = [
  {
    key: "buy",
    title: "Buy",
    icon: Building2,
    body:
      "Find the right property with the right strategy. We help you evaluate location, pricing, growth potential, and long-term value so your purchase is backed by insight, not impulse.",
  },
  {
    key: "sell",
    title: "Sell",
    icon: TrendingUp,
    body:
      "Sell with better positioning and better outcomes. From pricing strategy and market presentation to buyer alignment and negotiation support, we help you move your property with confidence.",
  },
  {
    key: "jv",
    title: "JV",
    icon: Handshake,
    body:
      "Explore joint venture opportunities with the right guidance. We help identify suitable partners, assess project potential, and structure opportunities that create long-term value for all stakeholders.",
  },
];

export default function Services() {
  const ref = useReveal();
  return (
    <section
      id="services"
      data-testid="services-section"
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
              What we do
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-[var(--marq-ink)]">
            Buy <span className="text-[var(--marq-gold)]">•</span> Sell{" "}
            <span className="text-[var(--marq-gold)]">•</span>{" "}
            <span className="font-italic-serif text-[var(--marq-gold)]">JV</span>
          </h2>
          <p className="mt-6 text-base text-[var(--marq-ink-2)] leading-relaxed">
            We help you buy, sell, and explore joint venture opportunities with
            clarity and confidence. From identifying the right property or
            partner to evaluating the opportunity and closing the deal, we
            guide you at every step.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ITEMS.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.key}
                data-testid={`service-${s.key}`}
                className="group bg-white border border-[var(--marq-line)] p-10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-overline text-[var(--marq-gold)]">
                    0{i + 1}
                  </span>
                  <Icon
                    size={26}
                    strokeWidth={1.2}
                    className="text-[var(--marq-ink)] group-hover:text-[var(--marq-gold)] transition-colors"
                  />
                </div>
                <h3 className="mt-8 font-display text-3xl text-[var(--marq-ink)]">
                  {s.title}
                </h3>
                <div className="mt-3 h-px w-10 bg-[var(--marq-gold)]" />
                <p className="mt-5 text-sm text-[var(--marq-ink-2)] leading-relaxed">
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
