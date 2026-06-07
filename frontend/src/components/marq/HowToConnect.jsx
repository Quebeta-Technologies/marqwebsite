import useReveal from "@/hooks/useReveal";
import { Phone, CalendarCheck, Users, KeyRound } from "lucide-react";

const STEPS = [
  {
    id: "call",
    icon: Phone,
    step: "01",
    title: "Call Us",
    label: "+91 8855 055 069",
    body: "Speak with our team — quick clarifications, no obligations.",
    href: "tel:+918855055069",
  },
  {
    id: "appointment",
    icon: CalendarCheck,
    step: "02",
    title: "Book an Appointment",
    label: "30-minute discovery",
    body: "Pick a time that suits you — in-office, virtual, or on-site.",
    href: "#advisor",
  },
  {
    id: "expert",
    icon: Users,
    step: "03",
    title: "Talk to a Real Estate Expert",
    label: "1:1 with a senior advisor",
    body: "Goals, budget, timelines — we map a strategy specific to you.",
    href: "#advisor",
  },
  {
    id: "book",
    icon: KeyRound,
    step: "04",
    title: "Book Your Dream Property",
    label: "Curated · Verified · Yours",
    body: "From shortlisting to handover — we manage every milestone.",
    href: "#enquire",
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
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 right-[-4%] font-display text-[10rem] sm:text-[13rem] leading-none text-[var(--marq-gold)] opacity-[0.06] select-none italic"
      >
        connect
      </div>

      <div
        ref={ref}
        className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-rule" />
              <span className="text-overline text-[var(--marq-mute)]">
                How to Get Connected
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[var(--marq-ink)]">
              Four steps to{" "}
              <span className="font-italic-serif text-[var(--marq-gold)]">
                start the conversation.
              </span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-base text-[var(--marq-ink-2)] leading-relaxed lg:max-w-md">
            A simple, considered path from first hello to keys in hand.
          </p>
        </div>

        {/* Desktop stepper with wave */}
        <div className="hidden lg:block relative">
          {/* Wave SVG connecting circles */}
          <svg
            viewBox="0 0 1200 80"
            preserveAspectRatio="none"
            aria-hidden
            className="absolute left-0 right-0 top-[34px] w-full h-20 z-0 pointer-events-none"
          >
            <path
              d="M 60 40 C 200 -10, 320 90, 460 40 S 720 -10, 860 40 S 1120 90, 1260 40"
              fill="none"
              stroke="var(--marq-gold)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              className="wave-path"
            />
          </svg>

          <ol className="relative grid grid-cols-4 gap-6 z-10">
            {STEPS.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.id} className="group">
                  <a
                    href={s.href}
                    data-testid={`connect-step-${s.id}`}
                    className="block"
                  >
                    {/* Circle node */}
                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-[var(--marq-gold)] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                        <div className="relative w-[72px] h-[72px] rounded-full bg-[var(--marq-ivory)] border border-[var(--marq-gold)] flex items-center justify-center transition-all duration-500 group-hover:bg-[var(--marq-ink)] group-hover:border-[var(--marq-ink)] group-hover:scale-110">
                          <Icon
                            size={24}
                            strokeWidth={1.4}
                            className="text-[var(--marq-ink)] group-hover:text-[var(--marq-gold-2)] transition-colors duration-500"
                          />
                        </div>
                        <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[var(--marq-ink)] text-[var(--marq-gold-2)] text-[11px] tracking-widest flex items-center justify-center font-display">
                          {s.step}
                        </span>
                      </div>
                    </div>

                    {/* Card */}
                    <div className="mt-10 text-center px-2">
                      <div className="text-overline text-[var(--marq-gold-deep)] mb-3">
                        {s.label}
                      </div>
                      <h3 className="font-display text-xl text-[var(--marq-ink)] leading-snug">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm text-[var(--marq-mute)] leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </a>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Mobile vertical stepper */}
        <ol className="lg:hidden relative space-y-10 pl-12">
          <div className="absolute left-[35px] top-3 bottom-3 w-px bg-gradient-to-b from-[var(--marq-gold)] via-[var(--marq-gold)]/40 to-transparent" />
          {STEPS.map((s) => {
            const Icon = s.icon;
            return (
              <li key={s.id} className="relative">
                <div className="absolute -left-12 top-0">
                  <div className="relative">
                    <div className="w-[64px] h-[64px] rounded-full bg-[var(--marq-ivory)] border border-[var(--marq-gold)] flex items-center justify-center">
                      <Icon
                        size={20}
                        strokeWidth={1.4}
                        className="text-[var(--marq-ink)]"
                      />
                    </div>
                    <span className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full bg-[var(--marq-ink)] text-[var(--marq-gold-2)] text-[10px] tracking-widest flex items-center justify-center font-display">
                      {s.step}
                    </span>
                  </div>
                </div>
                <a
                  href={s.href}
                  data-testid={`connect-step-mobile-${s.id}`}
                  className="block pt-1.5"
                >
                  <div className="text-overline text-[var(--marq-gold-deep)] mb-2">
                    {s.label}
                  </div>
                  <h3 className="font-display text-xl text-[var(--marq-ink)] leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--marq-mute)] leading-relaxed">
                    {s.body}
                  </p>
                </a>
              </li>
            );
          })}
        </ol>
      </div>

      <style>{`
        .wave-path {
          stroke-dasharray: 1400;
          stroke-dashoffset: 1400;
        }
        .reveal.is-visible .wave-path {
          animation: drawWave 2.4s cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
        }
        @keyframes drawWave {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
}
