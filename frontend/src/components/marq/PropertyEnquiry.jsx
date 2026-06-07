import useReveal from "@/hooks/useReveal";
import EnquiryForm from "./EnquiryForm";

export default function PropertyEnquiry() {
  const ref = useReveal();
  return (
    <section
      id="enquire"
      data-testid="property-enquiry-section"
      className="bg-[var(--marq-sand)]"
    >
      <div
        ref={ref}
        className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-rule" />
              <span className="text-overline text-[var(--marq-mute)]">
                Property Enquiry
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-[var(--marq-ink)]">
              Looking to Buy, Sell, or Explore a{" "}
              <span className="font-italic-serif text-[var(--marq-gold)]">
                JV Opportunity?
              </span>{" "}
              Get expert guidance today.
            </h2>
            <p className="mt-6 max-w-xl text-base text-[var(--marq-ink-2)] leading-relaxed">
              Contact us now to explore the right property and investment
              opportunities, and let our team of experts guide you through the
              process with clarity and confidence.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white border border-[var(--marq-line)] p-8 lg:p-10">
              <div className="mb-6">
                <div className="text-overline text-[var(--marq-gold)] mb-3">
                  Quick Enquiry
                </div>
                <h3 className="font-display text-3xl text-[var(--marq-ink)] leading-tight">
                  Tell us what you&rsquo;re{" "}
                  <span className="font-italic-serif text-[var(--marq-gold-deep)]">
                    looking for
                  </span>
                </h3>
              </div>
              <EnquiryForm
                source="property"
                testIdPrefix="property-enquiry"
                purposeOptions={["Buy", "Sell", "JV"]}
                typeOptions={["Commercial", "Land", "Residential"]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
