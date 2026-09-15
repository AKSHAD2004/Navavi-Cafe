import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, GraduationCap, Megaphone, PackageCheck, Phone, Wallet } from "lucide-react";
import heroChai from "@/assets/hero/hero1.jpeg";
import { StepCard } from "@/components/site/StepCard";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { FranchiseCTAButton } from "@/components/site/FranchiseCTAButton";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { PHONE, PHONE_DISPLAY, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/franchise")({
  head: () => ({
    meta: [
      { title: "Amrutulya Chai Franchise — Navavi Chai & Cafe" },
      {
        name: "description",
        content:
          "Own an Amrutulya chai franchise with Navavi Chai & Cafe. Compact outlet model, premix supply, training and marketing support. Enquire now.",
      },
      { property: "og:title", content: "Amrutulya Chai Franchise Opportunity" },
      {
        property: "og:description",
        content:
          "Compact outlet model, premix supply, training and marketing support from Navavi Chai & Cafe.",
      },
      { property: "og:url", content: "/franchise" },
    ],
    links: [{ rel: "canonical", href: "/franchise" }],
  }),
  component: Franchise,
});

const support = [
  { icon: PackageCheck, title: "Product Supply", text: "Consistent premix supply so every cup tastes the same." },
  { icon: GraduationCap, title: "Staff Training", text: "Hands-on training for preparation, serving and hygiene." },
  { icon: Megaphone, title: "Marketing Support", text: "Branding, signage and launch promotion material." },
  { icon: BadgeCheck, title: "Menu & Branding", text: "Ready Amrutulya menu boards, cups and outlet identity." },
  { icon: Wallet, title: "Business Guidance", text: "Costing, pricing and daily operations guidance from our team." },
  { icon: Phone, title: "Ongoing Support", text: "A dedicated point of contact after your outlet opens." },
];

function Franchise() {
  return (
    <>
      <section className="surface-dark">
        <div className="container-page grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl text-espresso-foreground md:text-5xl">
              Amrutulya Chai Franchise
            </h1>
            <p className="mt-4 max-w-xl leading-relaxed text-espresso-foreground/80">
              Bring the Navavi Amrutulya chai experience to your city. A compact, premix-driven
              outlet model designed for fast service, low wastage and a taste customers return for.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <FranchiseCTAButton label="Enquire Now" size="lg" />
              <a
                href={whatsappLink("Hi, I am interested in the Amrutulya franchise. Please share details.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 font-semibold text-whatsapp-foreground transition-all hover:brightness-105"
              >
                <WhatsAppIcon className="size-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="hero-warm-glow -inset-6 opacity-70" aria-hidden="true" />
            <img
              src={heroChai}
              alt="Amrutulya style chai served in kulhad cups"
              loading="lazy"
              width={1600}
              height={1104}
              className="animate-hero-float relative z-10 w-full rounded-3xl object-cover shadow-lift transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <h2 className="text-3xl md:text-4xl">Franchise model at a glance</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Investment", "[ADD: total investment range]"],
              ["Space required", "[ADD: sq. ft. requirement]"],
              ["Franchise fee", "[ADD: franchise fee]"],
              ["Expected ROI", "[ADD: ROI / payback period]"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-border bg-card p-6">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                <p className="mt-2 font-display text-xl text-espresso">{value}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Exact figures are shared by our franchise team on your enquiry call.
          </p>
        </div>
      </section>

      <section className="section-y bg-secondary/50">
        <div className="container-page">
          <h2 className="text-3xl md:text-4xl">What you get</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {support.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-warm"
              >
                <Icon className="size-7 text-primary" />
                <h3 className="mt-4 text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <h2 className="text-3xl md:text-4xl">Your journey to opening day</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            <StepCard step={1} title="Submit enquiry" description="Share your name, city and budget through the form below." />
            <StepCard step={2} title="Discovery call" description="We discuss the model, [ADD: investment details] and your location." />
            <StepCard step={3} title="Agreement" description="Franchise terms are finalised. [ADD: agreement tenure]" />
            <StepCard step={4} title="Setup & training" description="Outlet fit-out, equipment, menu and staff training." />
            <StepCard step={5} title="Grand opening" description="Launch support, supply and ongoing business guidance." />
          </div>
        </div>
      </section>

      <section className="section-y bg-secondary/50">
        <div className="container-page">
          <h2 className="text-3xl md:text-4xl">Frequently asked questions</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {[
              ["How much investment is needed?", "Investment details vary based on your location and outlet size. Please fill in the enquiry form or call us directly — our franchise team will share the complete investment breakdown with you on your discovery call."],
              ["How much space do I need?", "A minimum carpet area of 50–150 sq. ft. is ideal for a compact Amrutulya outlet. We can guide you on the best layout based on the space available at your location."],
              ["Do I need prior food business experience?", "No prior experience is required — we train you and your staff on the complete process."],
              ["How long does setup take?", "Typically 1–2 weeks from agreement to opening day, covering outlet fit-out, equipment, menu setup and staff training."],
              ["Which cities are open for franchise?", "We are open to franchise enquiries Pan India — across all cities and towns. Reach out to us and we will check availability in your area."],
              ["Is supply of premixes guaranteed?", "Yes — premixes are supplied directly by Navavi Chai & Cafe from our Pune and Bijnor operations."],
            ].map(([q, a]) => (
              <details key={q} className="group rounded-2xl border border-border bg-card p-5">
                <summary className="cursor-pointer list-none font-semibold text-espresso">{q}</summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="enquiry" className="section-y scroll-mt-24">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl">Franchise enquiry</h2>
            <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">
              Fill in your details and our team will call you back with the complete plan. You can
              also reach us directly on{" "}
              <a href={`tel:+91${PHONE}`} className="font-semibold text-primary hover:underline">
                {PHONE_DISPLAY}
              </a>
              .
            </p>
          </div>
          <EnquiryForm redirectToWhatsApp={true} />
        </div>
      </section>
    </>
  );
}
