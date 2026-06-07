import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import EnquiryForm from "./EnquiryForm";

const SLIDES = [
  {
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTZ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwwfHx8fDE3ODA0ODI4MDd8MA&ixlib=rb-4.1.0&q=85",
    eyebrow: "Pune • Mumbai",
    titleA: "Smart Investments.",
    titleB: "Iconic Addresses.",
    sub: "Where ROI meets lifestyle — a curated advisory for Maharashtra's most coveted skylines.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBsdXh1cnklMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzgwNDgyODA3fDA&ixlib=rb-4.1.0&q=85",
    eyebrow: "Residential Collection",
    titleA: "Live in Spaces",
    titleB: "Worth Coming Home To.",
    sub: "Hand-picked residences that balance lifestyle, location, and long-term value.",
  },
  {
    image:
      "https://images.pexels.com/photos/16370914/pexels-photo-16370914.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600",
    eyebrow: "Commercial · Retail",
    titleA: "Work Addresses",
    titleB: "That Compound in Value.",
    sub: "Grade-A commercial and retail opportunities in India's high-growth corridors.",
  },
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    const id = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => {
      clearInterval(id);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative w-full bg-[var(--marq-ink)]"
    >
      <div
        ref={emblaRef}
        className="embla relative w-full h-[680px] sm:h-[760px] lg:h-[860px]"
      >
        <div className="embla__container h-full">
          {SLIDES.map((s, i) => (
            <div
              key={i}
              data-testid={`hero-slide-${i}`}
              className="embla__slide h-full relative"
            >
              <img
                src={s.image}
                alt={s.titleA}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="relative z-10 h-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-28 lg:pt-20 pb-16">
                  {/* Copy */}
                  <div className="lg:col-span-7 text-white">
                    <div className="tag-pill dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--marq-gold)]" />
                      {s.eyebrow}
                    </div>
                    <h1
                      data-testid="hero-headline"
                      className="font-display mt-7 text-white leading-[0.92] text-5xl sm:text-6xl lg:text-[5.5rem]"
                    >
                      {s.titleA}
                      <br />
                      <span className="font-italic-serif text-[var(--marq-gold-2)]">
                        {s.titleB}
                      </span>
                    </h1>
                    <p className="mt-7 max-w-xl text-base sm:text-lg text-white/80 font-light leading-relaxed">
                      {s.sub}
                    </p>

                    <div className="mt-10 flex items-center gap-6">
                      <a
                        href="#advisor"
                        data-testid={`hero-cta-${i}`}
                        className="btn-gold"
                      >
                        Explore Opportunities
                      </a>
                      <a
                        href="#about"
                        className="text-sm tracking-[0.22em] uppercase text-white/80 hover:text-[var(--marq-gold-2)] transition-colors"
                      >
                        About MARQ →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating enquiry card overlaying carousel */}
        <div className="absolute z-20 right-4 sm:right-8 lg:right-12 top-1/2 -translate-y-1/2 w-[92%] sm:w-[420px] hidden md:block">
          <div
            data-testid="hero-enquiry-card"
            className="glass-card p-7 lg:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="gold-rule" />
              <span className="text-overline text-[var(--marq-gold-deep)]">
                Begin the Journey
              </span>
            </div>
            <h3 className="font-display text-3xl text-[var(--marq-ink)] leading-tight">
              Tell us what you&rsquo;re <span className="font-italic-serif text-[var(--marq-gold-deep)]">looking for</span>
            </h3>
            <p className="mt-2 text-sm text-[var(--marq-mute)]">
              An advisor reaches out within 24 hours.
            </p>
            <div className="mt-5">
              <EnquiryForm source="hero" testIdPrefix="hero" />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute z-20 bottom-6 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0 lg:left-8 flex items-center gap-3">
          <button
            data-testid="hero-prev"
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            className="w-11 h-11 flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-[var(--marq-ink)] transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} strokeWidth={1.5} />
          </button>
          <button
            data-testid="hero-next"
            onClick={() => emblaApi && emblaApi.scrollNext()}
            className="w-11 h-11 flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-[var(--marq-ink)] transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight size={18} strokeWidth={1.5} />
          </button>

          <div className="ml-4 flex items-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                data-testid={`hero-dot-${i}`}
                onClick={() => emblaApi && emblaApi.scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-[2px] transition-all duration-500 ${
                  index === i
                    ? "w-10 bg-[var(--marq-gold-2)]"
                    : "w-6 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Slide counter */}
        <div className="absolute z-20 bottom-7 right-6 lg:right-12 text-white/80 font-display text-sm tracking-widest hidden md:block">
          <span className="text-[var(--marq-gold-2)] text-xl">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="mx-2 opacity-40">/</span>
          <span>{String(SLIDES.length).padStart(2, "0")}</span>
        </div>
      </div>

      {/* Mobile enquiry card (below carousel) */}
      <div className="md:hidden -mt-8 mx-4 mb-6 relative z-20">
        <div
          data-testid="hero-enquiry-card-mobile"
          className="glass-card p-6"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="gold-rule" />
            <span className="text-overline text-[var(--marq-gold-deep)]">
              Begin the Journey
            </span>
          </div>
          <h3 className="font-display text-2xl text-[var(--marq-ink)] leading-tight">
            Tell us what you&rsquo;re looking for
          </h3>
          <div className="mt-5">
            <EnquiryForm source="hero" testIdPrefix="hero-mobile" />
          </div>
        </div>
      </div>
    </section>
  );
}
