import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Props = {
  variant?: "franchise" | "general";
  title?: string;
  subtitle?: string;
  redirectToWhatsApp?: boolean;
};

const inputClass =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/40";

export function EnquiryForm({
  variant = "franchise",
  title = "Franchise Enquiry",
  subtitle = "Share your details and our franchise team will call you back.",
  redirectToWhatsApp = false,
}: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [summary, setSummary] = useState("");

  function buildMessage(data: FormData): string {
    const header = variant === "franchise"
      ? "Franchise enquiry — Navavi Chai & Cafe"
      : "General enquiry — Navavi Chai & Cafe";
    const lines = [
      header,
      "",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `City: ${data.get("city")}`,
      variant === "franchise"
        ? `Investment range: ${data.get("investment") || "Not specified"}`
        : `Enquiry type: ${data.get("enquiryType")}`,
      `Message: ${data.get("message") || "-"}`,
    ];
    return lines.join("\n");
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const message = buildMessage(data);

    if (redirectToWhatsApp) {
      // Immediately open WhatsApp with all details pre-filled
      window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
      form.reset();
      return;
    }

    // Default: show thank-you screen
    setSummary(message);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-primary/40 bg-card p-8 text-center shadow-warm">
        <CheckCircle2 className="mx-auto size-12 text-tea" />
        <h3 className="mt-4 text-2xl">Thank you! We've received your details.</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          Our team will get in touch with you shortly. For a faster response, send us the same
          details on WhatsApp.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappLink(summary)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-whatsapp-foreground transition-all hover:brightness-105"
          >
            <WhatsAppIcon className="size-4" />
            Send on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-espresso transition-colors hover:bg-secondary"
          >
            Submit another enquiry
          </button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          [ADD: connect this form to your email/CRM so submissions are stored]
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-border bg-card p-6 shadow-warm md:p-8"
    >
      <h3 className="text-2xl">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Full name *</span>
          <input required name="name" placeholder="Your name" className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Phone number *</span>
          <input
            required
            name="phone"
            type="tel"
            inputMode="tel"
            pattern="[0-9+ ]{10,15}"
            placeholder="10-digit mobile number"
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">City *</span>
          <input required name="city" placeholder="City / town" className={inputClass} />
        </label>

        {variant === "franchise" ? (
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium">Investment capacity</span>
            <select name="investment" defaultValue="" className={inputClass}>
              <option value="">Select a range</option>
              <option>₹3 Lakh – ₹5 Lakh (Kiosk Model)</option>
              <option>₹5 Lakh – ₹8 Lakh (Standard Cafe)</option>
              <option>₹8 Lakh – ₹12 Lakh (Flagship Cafe)</option>
              <option>Above ₹12 Lakh (Multi-Unit)</option>
              <option>Not sure yet</option>
            </select>
          </label>
        ) : (
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium">Enquiry type</span>
            <select name="enquiryType" defaultValue="Franchise" className={inputClass}>
              <option>Franchise</option>
              <option>Bulk / B2B order</option>
              <option>Retail purchase</option>
              <option>Distribution partnership</option>
              <option>Other</option>
            </select>
          </label>
        )}

        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-medium">Message</span>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your location, space or requirement"
            className={inputClass}
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-warm transition-all hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0"
      >
        <Send className="size-4" />
        Submit Enquiry
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Prefer to talk now? Call us on +91 84220 09086.
      </p>
    </form>
  );
}
