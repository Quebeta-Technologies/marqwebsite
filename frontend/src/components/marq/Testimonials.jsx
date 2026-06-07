import useReveal from "@/hooks/useReveal";
import { Quote } from "lucide-react";

const STORIES = [
  {
    name: "Aarav Mehta",
    role: "Commercial Investor, Mumbai",
    avatar:
      "https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0JTIwaW5kaWFufGVufDB8fHx8MTc4MDQ4MjgwN3ww&ixlib=rb-4.1.0&q=85",
    quote:
      "MARQ moved us beyond brochures. Their market read on Pune’s eastern corridor reshaped my portfolio — the rental yield speaks for itself.",
  },
  {
    name: "Priya Kulkarni",
    role: "First-time Homebuyer, Pune",
    avatar:
      "https://images.pexels.com/photos/7580837/pexels-photo-7580837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    quote:
      "What I appreciated most was the honesty. They showed me three properties — not thirty — and each one matched exactly what we needed.",
  },
  {
    name: "Rohan Desai",
    role: "JV Partner, Land Development",
    avatar:
      "https://images.unsplash.com/photo-1778692258270-bc0e80e975c0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0JTIwaW5kaWFufGVufDB8fHx8MTc4MDQ4MjgwN3ww&ixlib=rb-4.1.0&q=85",
    quote:
      "The structuring on our JV deal was meticulous. MARQ guided every clause — we closed faster than any prior partnership.",
  },
];

export default function Testimonials() {
  const ref = useReveal();
  return (
    <section
      id="stories"
      data-testid="stories-section"
      className="bg-[var(--marq-sand)]"
    >
      <div
        ref={ref}
        className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32"
      >
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="gold-rule" />
            <span className="text-overline text-[var(--marq-mute)]">
              Client Stories
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-[var(--marq-ink)]">
            Real experiences.{" "}
            <span className="font-italic-serif text-[var(--marq-gold)]">
              Real outcomes.
            </span>
          </h2>
          <p className="mt-6 text-base text-[var(--marq-ink-2)] leading-relaxed">
            Hear directly from the people who trusted MARQ Realtors for
            important property decisions.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {STORIES.map((s, i) => (
            <article
              key={s.name}
              data-testid={`testimonial-${i}`}
              className="bg-white border border-[var(--marq-line)] p-8 flex flex-col"
            >
              <Quote
                size={28}
                strokeWidth={1.2}
                className="text-[var(--marq-gold)]"
              />
              <p className="mt-6 font-italic-serif text-2xl text-[var(--marq-ink)] leading-snug flex-1">
                “{s.quote}”
              </p>
              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-[var(--marq-line)]">
                <img
                  src={s.avatar}
                  alt={s.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm text-[var(--marq-ink)] font-medium">
                    {s.name}
                  </div>
                  <div className="text-xs text-[var(--marq-mute)]">
                    {s.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#advisor"
            data-testid="stories-cta"
            className="btn-outline"
          >
            Read More Success Stories
          </a>
        </div>
      </div>
    </section>
  );
}
