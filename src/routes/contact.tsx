import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin } from "lucide-react";
import banner from "@/assets/hero/hero.png.jpeg";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { BRAND, PHONE, PHONE_DISPLAY, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Navavi Chai & Cafe — Franchise & Bulk Enquiries" },
      {
        name: "description",
        content:
          "Call +91 84220 09086 or message us on WhatsApp for Amrutulya franchise, bulk premix orders and distribution enquiries. Offices in Pune and Bijnor.",
      },
      { property: "og:title", content: "Contact Navavi Chai & Cafe" },
      {
        property: "og:description",
        content: "Franchise, bulk and distribution enquiries — call, WhatsApp or send us your details.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="surface-dark">
        <div className="container-page py-14 md:py-20">
          <h1 className="font-display text-4xl text-espresso-foreground md:text-5xl">Contact us</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-espresso-foreground/80">
            Franchise, bulk orders, distribution or general questions — we're happy to help.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`tel:+91${PHONE}`}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-warm"
              >
                <Phone className="size-6 text-primary" />
                <h2 className="mt-3 text-lg">Call us</h2>
                <p className="mt-1 text-sm text-muted-foreground">{PHONE_DISPLAY}</p>
              </a>
              <a
                href={whatsappLink("Hi Navavi Chai & Cafe, I have an enquiry.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-warm"
              >
                <WhatsAppIcon className="size-6 text-whatsapp" />
                <h2 className="mt-3 text-lg">WhatsApp</h2>
                <p className="mt-1 text-sm text-muted-foreground">Chat with our team</p>
              </a>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <MapPin className="size-6 text-primary" />
                <h2 className="mt-3 text-lg">Head Office (Pune)</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {BRAND.puneAddress}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <MapPin className="size-6 text-primary" />
                <h2 className="mt-3 text-lg">Sales Office (Bijnor)</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {BRAND.bijnorAddress}
                </p>
              </div>
            </div>

            <img
              src={banner}
              alt="Navavi Chai & Cafe contact banner"
              loading="lazy"
              className="mt-6 w-full rounded-3xl object-cover shadow-warm"
            />
          </div>

          <EnquiryForm
            variant="general"
            title="Send us an enquiry"
            subtitle="Fill in your details and WhatsApp will open instantly with everything pre-filled."
            redirectToWhatsApp={true}
          />
        </div>
      </section>
    </>
  );
}
