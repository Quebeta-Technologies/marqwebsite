import useReveal from "@/hooks/useReveal";
import { Linkedin, Instagram, Facebook, Award } from "lucide-react";

const EXPERTS = [
  {
    name: "Aditya Sharma",
    designation: "Founder & Principal Advisor",
    experience: "20+ years · Commercial & Investment",
    bio: "Two decades of structuring large-format commercial transactions across Pune and Mumbai.",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com/marq_realtors",
    facebook: "https://facebook.com",
  },
  {
    name: "Priya Deshpande",
    designation: "Director · Residential",
    experience: "14+ years · Luxury Residential",
    bio: "Curates marquee residential portfolios for HNI families across Western India.",
    photo:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com/marq_realtors",
    facebook: "https://facebook.com",
  },
  {
    name: "Rohan Mehta",
    designation: "Head · Joint Ventures & Land",
    experience: "16+ years · Land · JV Structuring",
    bio: "Negotiates complex landowner-developer JVs and growth-corridor land mandates.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com/marq_realtors",
    facebook: "https://facebook.com",
  },
];

const SOCIAL_ICONS = [
  { key: "linkedin", icon: Linkedin, label: "LinkedIn" },
  { key: "instagram", icon: Instagram, label: "Instagram" },
  { key: "facebook", icon: Facebook, label: "Facebook" },
];

export default function ExpertsPanel() {
  const ref = useReveal();
  return (
    <section
      id="experts"
      data-testid="experts-section"
      className="bg-[var(--marq-ivory)] relative overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 left-[-4%] font-display text-[10rem] sm:text-[13rem] leading-none text-[var(--marq-gold)] opacity-[0.06] select-none italic"
      >
        experts
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
                Experts Panel
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[var(--marq-ink)]">
              Meet the people who{" "}
              <span className="font-italic-serif text-[var(--marq-gold)]">
                close your deals.
              </span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-base text-[var(--marq-ink-2)] leading-relaxed lg:max-w-md">
            A bench of senior advisors with decades of combined experience
            across commercial, residential, land and joint ventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {EXPERTS.map((p, i) => (
            <article
              key={p.name}
              data-testid={`expert-${i}`}
              className="group relative"
            >
              {/* Photo */}
              <div className="relative zoom-img aspect-[4/5] overflow-hidden bg-[var(--marq-sand)]">
                <img
                  src={p.photo}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Floating designation chip */}
                <div
                  className={`absolute top-5 ${
                    i % 2 === 0 ? "left-5" : "right-5"
                  }`}
                >
                  <div className="bg-[var(--marq-ink)]/85 backdrop-blur-md px-4 py-2.5 text-overline text-[var(--marq-gold-2)] inline-flex items-center gap-2">
                    <Award size={12} strokeWidth={1.6} />
                    {p.designation}
                  </div>
                </div>

                {/* Bottom social rail */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    {SOCIAL_ICONS.map((s) => {
                      const Icon = s.icon;
                      return (
                        <a
                          key={s.key}
                          href={p[s.key]}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${p.name} on ${s.label}`}
                          data-testid={`expert-${i}-${s.key}`}
                          className="w-9 h-9 flex items-center justify-center bg-white/95 text-[var(--marq-ink)] hover:bg-[var(--marq-gold)] hover:text-white transition-all duration-300"
                        >
                          <Icon size={14} strokeWidth={1.6} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Name + experience */}
              <div className="mt-6">
                <div className="text-overline text-[var(--marq-gold-deep)]">
                  {p.experience}
                </div>
                <h3 className="mt-2 font-display text-2xl text-[var(--marq-ink)] leading-tight">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm text-[var(--marq-ink-2)] leading-relaxed">
                  {p.bio}
                </p>

                {/* Always-visible social rail (under name) */}
                <div className="mt-5 flex items-center gap-3">
                  {SOCIAL_ICONS.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.key}
                        href={p[s.key]}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.name} on ${s.label}`}
                        data-testid={`expert-${i}-${s.key}-bottom`}
                        className="w-9 h-9 flex items-center justify-center border border-[var(--marq-line)] text-[var(--marq-ink-2)] hover:border-[var(--marq-gold)] hover:text-[var(--marq-gold)] hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <Icon size={14} strokeWidth={1.6} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
