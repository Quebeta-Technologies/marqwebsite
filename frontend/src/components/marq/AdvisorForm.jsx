import { useState, useEffect } from "react";
import { toast } from "sonner";
import useReveal from "@/hooks/useReveal";
import { submitEnquiry } from "@/lib/api";
import { ArrowRight, ShieldCheck, Sparkles, Headphones } from "lucide-react";

const CITIES = ["Pune", "Mumbai"];
const BUDGETS = ["50L – 1Cr", "1Cr – 2Cr", "2Cr – 5Cr", "5Cr +"];
const REQUIREMENTS = ["Buy", "Sell", "Lease", "Joint Venture"];

const PERKS = [
  { icon: ShieldCheck, label: "Verified projects only" },
  { icon: Sparkles, label: "Curated opportunities" },
  { icon: Headphones, label: "1:1 advisory call" },
];

export default function AdvisorForm() {
  const ref = useReveal();
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    city: "",
    budget: "",
    requirement: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [highlight, setHighlight] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  // Listen for service-card clicks to preset the requirement
  useEffect(() => {
    const onSetRequirement = (e) => {
      const value = e?.detail;
      if (typeof value !== "string") return;
      if (!REQUIREMENTS.includes(value)) return;
      setForm((f) => ({ ...f, requirement: value }));
      setHighlight(true);
      const t = setTimeout(() => setHighlight(false), 1800);
      return () => clearTimeout(t);
    };
    window.addEventListener("marq:setRequirement", onSetRequirement);
    return () =>
      window.removeEventListener("marq:setRequirement", onSetRequirement);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.mobile.trim()) {
      toast.error("Please enter your phone number");
      return;
    }
    setSubmitting(true);
    try {
      await submitEnquiry({
        source: "advisor",
        name: form.name,
        mobile: form.mobile,
        city: form.city,
        budget: form.budget,
        requirement: form.requirement,
      });
      toast.success(
        "You’re All Set! Our team will contact you shortly with the best property options."
      );
      setForm({
        name: "",
        mobile: "",
        city: "",
        budget: "",
        requirement: "",
      });
    } catch (err) {
      toast.error("Could not send enquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="advisor"
      data-testid="advisor-section"
      className="bg-[var(--marq-paper)] border-y border-[var(--marq-line)]"
    >
      <div
        ref={ref}
        className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-rule" />
              <span className="text-overline text-[var(--marq-mute)]">
                Property Experts
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-[var(--marq-ink)]">
              Talk to a{" "}
              <span className="font-italic-serif text-[var(--marq-gold)]">
                property advisor
              </span>
            </h2>
            <p className="mt-5 text-lg font-light text-[var(--marq-ink-2)]">
              Not sure which property is right for you?
            </p>
            <p className="mt-4 text-base text-[var(--marq-ink-2)] leading-relaxed max-w-md">
              Share your requirement and we’ll help you find the best options
              based on your needs and budget.
            </p>

            <ul className="mt-10 space-y-4">
              {PERKS.map((p) => {
                const Icon = p.icon;
                return (
                  <li key={p.label} className="flex items-center gap-3 text-sm">
                    <span className="w-9 h-9 flex items-center justify-center bg-[var(--marq-gold-soft)] text-[var(--marq-gold)]">
                      <Icon size={16} strokeWidth={1.5} />
                    </span>
                    <span className="text-[var(--marq-ink-2)]">{p.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <form
              data-testid="advisor-form"
              onSubmit={onSubmit}
              className="bg-[var(--marq-ivory)] border border-[var(--marq-line)] p-8 lg:p-12"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-overline text-[var(--marq-mute)] block mb-1">
                    Full Name
                  </label>
                  <input
                    data-testid="advisor-name"
                    className="marq-input"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-overline text-[var(--marq-mute)] block mb-1">
                    Phone Number*
                  </label>
                  <input
                    data-testid="advisor-mobile"
                    className="marq-input"
                    type="tel"
                    placeholder="+91"
                    required
                    value={form.mobile}
                    onChange={(e) => update("mobile", e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-overline text-[var(--marq-mute)] block mb-1">
                    City of Interest
                  </label>
                  <select
                    data-testid="advisor-city"
                    className="marq-input"
                    value={form.city}
                    onChange={(e) => update("city", e.target.value)}
                  >
                    <option value="">Select a city</option>
                    {CITIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-overline text-[var(--marq-mute)] block mb-1">
                    Budget Range
                  </label>
                  <select
                    data-testid="advisor-budget"
                    className="marq-input"
                    value={form.budget}
                    onChange={(e) => update("budget", e.target.value)}
                  >
                    <option value="">Select a budget</option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-overline text-[var(--marq-mute)] block mb-1">
                    Requirement
                  </label>
                  <select
                    data-testid="advisor-requirement"
                    className={`marq-input transition-all duration-500 ${
                      highlight
                        ? "!border-b-[var(--marq-gold)] bg-[var(--marq-gold-soft)]"
                        : ""
                    }`}
                    value={form.requirement}
                    onChange={(e) => update("requirement", e.target.value)}
                  >
                    <option value="">What are you looking for?</option>
                    {REQUIREMENTS.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                data-testid="advisor-submit"
                type="submit"
                disabled={submitting}
                className="btn-gold w-full sm:w-auto mt-10"
              >
                {submitting ? "Sending…" : "Send Enquiry"}
                <ArrowRight size={16} strokeWidth={1.5} />
              </button>
              <p className="mt-4 text-xs text-[var(--marq-mute)]">
                By submitting, you agree to be contacted by a MARQ Realtors
                advisor regarding your enquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
