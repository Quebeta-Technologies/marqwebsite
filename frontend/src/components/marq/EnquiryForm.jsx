import { useState } from "react";
import { toast } from "sonner";
import { submitEnquiry } from "@/lib/api";
import { ArrowRight } from "lucide-react";

/**
 * Compact 4-field enquiry form used in Hero & Property Enquiry sections.
 * Props:
 *  - source: "hero" | "property"
 *  - testIdPrefix: string for unique data-testids
 *  - typeOptions: array of property type strings
 *  - purposeOptions: array of purpose strings (e.g. ["Buy", "Sale", "JV"])
 */
export default function EnquiryForm({
  source,
  testIdPrefix,
  typeOptions = ["Commercial", "Retail", "Residential", "Land"],
  purposeOptions = ["Buy", "Sell", "Lease", "JV"],
}) {
  const [form, setForm] = useState({
    purpose: "",
    property_type: "",
    name: "",
    mobile: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.mobile.trim()) {
      toast.error("Please enter your name and mobile number");
      return;
    }
    setSubmitting(true);
    try {
      await submitEnquiry({ source, ...form });
      toast.success("Request Received. Let’s Find Your Perfect Investment.");
      setForm({ purpose: "", property_type: "", name: "", mobile: "" });
    } catch (err) {
      toast.error("Could not send enquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      data-testid={`${testIdPrefix}-form`}
      onSubmit={onSubmit}
      className="space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="text-overline text-[var(--marq-mute)] block mb-1">
            For
          </label>
          <select
            data-testid={`${testIdPrefix}-purpose`}
            className="marq-input"
            value={form.purpose}
            onChange={(e) => update("purpose", e.target.value)}
          >
            <option value="">Buy / Sell / Lease / JV</option>
            {purposeOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-overline text-[var(--marq-mute)] block mb-1">
            Type
          </label>
          <select
            data-testid={`${testIdPrefix}-type`}
            className="marq-input"
            value={form.property_type}
            onChange={(e) => update("property_type", e.target.value)}
          >
            <option value="">Commercial / Retail / Residential / Land</option>
            {typeOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-overline text-[var(--marq-mute)] block mb-1">
            Name
          </label>
          <input
            data-testid={`${testIdPrefix}-name`}
            className="marq-input"
            type="text"
            placeholder="Your full name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </div>
        <div>
          <label className="text-overline text-[var(--marq-mute)] block mb-1">
            Mobile No.
          </label>
          <input
            data-testid={`${testIdPrefix}-mobile`}
            className="marq-input"
            type="tel"
            placeholder="+91"
            value={form.mobile}
            onChange={(e) => update("mobile", e.target.value)}
          />
        </div>
      </div>

      <button
        data-testid={`${testIdPrefix}-submit`}
        type="submit"
        disabled={submitting}
        className="btn-gold w-full sm:w-auto"
      >
        {submitting ? "Sending…" : "Send Enquiry"}
        <ArrowRight size={16} strokeWidth={1.5} />
      </button>
    </form>
  );
}
