import EnquiryForm from "./EnquiryForm";

const HERO_IMG =
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTZ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwwfHx8fDE3ODA0ODI4MDd8MA&ixlib=rb-4.1.0&q=85";

export default function Hero() {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative bg-[var(--marq-ivory)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20 pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          {/* Headline + image */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-rule" />
              <span className="text-overline text-[var(--marq-mute)]">
                Pune • Mumbai
              </span>
            </div>
            <h1
              data-testid="hero-headline"
              className="font-serif tracking-tight text-[var(--marq-ink)] leading-[0.95] text-5xl sm:text-6xl lg:text-7xl"
            >
              Smart Investments.
              <br />
              <span className="italic text-[var(--marq-gold)]">
                Iconic Addresses.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[var(--marq-ink-2)] font-light">
              Where ROI meets lifestyle. A curated real estate advisory for
              discerning investors across Maharashtra’s most coveted skylines.
            </p>

            <div className="mt-10 zoom-img relative overflow-hidden">
              <img
                src={HERO_IMG}
                alt="Luxury architecture"
                className="w-full h-[360px] sm:h-[440px] lg:h-[520px] object-cover"
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                <div className="text-overline drop-shadow-sm">
                  Est. 25 Years · 18+ Verified Projects
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry card */}
          <div className="lg:col-span-5">
            <div
              data-testid="hero-enquiry-card"
              className="bg-white border border-[var(--marq-line)] p-8 lg:p-10 shadow-[0_30px_60px_-30px_rgba(26,26,26,0.25)]"
            >
              <div className="mb-6">
                <div className="text-overline text-[var(--marq-gold)] mb-3">
                  Begin the Journey
                </div>
                <h3 className="font-serif text-3xl text-[var(--marq-ink)] leading-tight">
                  Tell us what you’re looking for
                </h3>
                <p className="mt-2 text-sm text-[var(--marq-mute)]">
                  A property advisor will reach out within 24 hours.
                </p>
              </div>
              <EnquiryForm source="hero" testIdPrefix="hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
