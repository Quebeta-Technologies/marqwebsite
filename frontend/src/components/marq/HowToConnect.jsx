import useReveal from "@/hooks/useReveal";
import {
  Phone,
  CalendarCheck,
  Users,
  KeyRound,
  ArrowUpRight,
} from "lucide-react";

const STEPS = [
  {
    id: "call",
    icon: Phone,
    title: "Call Us",
    label: "+91 8855 055 069",
    body: "Speak with our team — quick clarifications, no obligations.",
    href: "tel:+918855055069",
    cta: "Dial Now",
  },
  {
    id: "appointment",
    icon: CalendarCheck,
    title: "Book an Appointment",
    label: "30-minute discovery",
    body: "Pick a time that works — in-office, virtual, or on-site visit.",
    href: "#advisor",
    cta: "Schedule",
  },
  {
    id: "expert",
    icon: Users,
    title: "Talk to a Real Estate Expert",
    label: "1:1 with a senior advisor",
    body: "Goals, budget, timelines — we map a strategy specific to you.",
    href: "#advisor",
    cta: "Start a Chat",
  },
  {
    id: "book",
    icon: KeyRound,
    title: "Book Your Dream Property",
    label: "Curated · Verified · Yours",
    body: "From shortlisting to handover — we manage every milestone.",
    href: "#enquire",
    cta: "Begin",
  },
];

export default function HowToConnect() {
  const ref = useReveal();
  return (
    <section
      id="connect"
      data-testid="connect-section"
      className="bg-[var(--marq-ivory)] relative overflow-hidden"
    >
      {/* Decorative type */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-12 right-[-6%] font-display text-[15rem] leading-none text-[var(--marq-gold)] opacity-[0.06] select-none"
      >
        connect
      </div>

      <div
        ref={ref}
        className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-rule" />
              <span className="text-overline text-[var(--marq-mute)]">
                How to Get Connected
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-[var(--marq-ink)]">
              Four ways to{" "}
              <span className="font-italic-serif text-[var(--marq-gold)]">
                start the conversation.
              </span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-base text-[var(--marq-ink-2)] leading-relaxed lg:max-w-md">
            Choose what feels right. Whether you&rsquo;re exploring, ready to invest,
            or simply curious — we meet you where you are.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--marq-line)] border border-[var(--marq-line)]">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <a
                key={s.id}
                href={s.href}
                data-testid={`connect-step-${s.id}`}
                className="step-card group bg-white p-8 lg:p-10 flex flex-col min-h-[320px]"
              >
                <div className="flex items-center justify-between">
                  <span className="step-num font-display text-5xl text-[var(--marq-mute)]/40">
                    0{i + 1}
                  </span>
                  <span className="w-12 h-12 flex items-center justify-center border border-[var(--marq-line)] group-hover:border-[var(--marq-gold)] group-hover:bg-[var(--marq-gold)] transition-all duration-500">
                    <Icon
                      size={20}
                      strokeWidth={1.4}
                      className="text-[var(--marq-ink)] group-hover:text-white transition-colors duration-500"
                    />
                  </span>
                </div>

                <div className="mt-auto pt-10">
                  <div className="text-overline text-[var(--marq-gold-deep)] mb-3">
                    {s.label}
                  </div>
                  <h3 className="font-display text-2xl text-[var(--marq-ink)] leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--marq-mute)] leading-relaxed">
                    {s.body}
                  </p>

                  <div className="mt-6 pt-5 border-t border-[var(--marq-line)] flex items-center justify-between">
                    <span className="text-overline text-[var(--marq-ink)]">
                      {s.cta}
                    </span>
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.4}
                      className="step-arrow text-[var(--marq-ink)] group-hover:text-[var(--marq-gold)]"
                    />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
