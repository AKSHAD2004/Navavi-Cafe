import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Store, Truck, IndianRupee, Phone, Star } from "lucide-react";
import hero1 from "@/assets/hero/hero1.jpeg";
import { FranchiseCTAButton } from "@/components/site/FranchiseCTAButton";
import { HomeProductsSection } from "@/components/site/HomeProductsSection";
import { StepCard } from "@/components/site/StepCard";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { PRODUCTS } from "@/data/products";
import { PHONE, PHONE_DISPLAY } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Navavi Chai & Cafe — Amrutulya Chai Franchise in India" },
      {
        name: "description",
        content:
          "Start your own Amrutulya chai outlet with Navavi Chai & Cafe. Authentic tea, coffee and instant premixes. Low-effort setup, full support. Enquire today.",
      },
      { property: "og:title", content: "Navavi Chai & Cafe — Amrutulya Chai Franchise" },
      {
        property: "og:description",
        content:
          "Authentic Indian chai, coffee and premixes. Franchise your own Amrutulya outlet with full brand support.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const highlights = [
  { icon: Leaf, title: "Authentic Desi Taste", text: "Traditional Amrutulya-style chai, brewed the way India loves it." },
  { icon: Store, title: "Compact Outlet Model", text: "Designed to run in a small footprint with a lean team." },
  { icon: IndianRupee, title: "Attractive Margins", text: "Premix-based serving keeps wastage low and cups consistent." },
  { icon: Truck, title: "Reliable Supply", text: "Steady premix supply from our Pune and Bijnor operations." },
];

function Home() {


  return (
    <>
      {/* Hero */}
      <section className="surface-dark relative overflow-hidden">
        <div className="container-page grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-14">
          <div>
            {/* Mobile-only Franchise Enquiry button placed above the pill */}
            <div className="mb-4 sm:hidden">
              <FranchiseCTAButton label="Franchise Enquiry" size="sm" animated />
            </div>

            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Star className="size-3.5" /> Amrutulya Chai Franchise
            </span>
            <h1 className="mt-5 font-display text-4xl leading-tight text-espresso-foreground md:text-5xl lg:text-6xl">
              Apni <span className="text-gradient-gold">Amrutulya Chai</span> franchise shuru kijiye
            </h1>
            <p className="mt-3 font-display text-lg text-primary">Shahi Swad Har Dil Ke Pass</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-espresso-foreground/80">
              Navavi Chai &amp; Cafe brings authentic Indian tea, coffee and instant premixes to
              outlets across the country. Partner with us and serve a consistent, loved cup from day
              one.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <FranchiseCTAButton label="Apply for Franchise" size="lg" />
              <a
                href={`tel:+91${PHONE}`}
                className="inline-flex items-center gap-2 rounded-full border border-espresso-foreground/30 px-6 py-3.5 font-semibold text-espresso-foreground transition-colors hover:bg-espresso-foreground/10"
              >
                <Phone className="size-4" />
                {PHONE_DISPLAY}
              </a>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-espresso-foreground/15 pt-6">
              {[
                ["Outlets", "50+"],
                ["Cities", "15+"],
                ["Products", `${PRODUCTS.length}+`],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs uppercase tracking-wider text-espresso-foreground/60">
                    {label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl text-primary">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <img
              src={hero1}
              alt="Navavi Chai & Cafe Hero"
              width={1600}
              height={1104}
              className="w-full rounded-3xl object-cover shadow-lift"
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-y">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, text }) => (
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
      </section>

      {/* Products grid — same layout as /products page */}
      <HomeProductsSection />

      {/* How it works */}
      <section className="section-y">
        <div className="container-page">
          <h2 className="text-3xl md:text-4xl">How the franchise works</h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Four simple steps from your first enquiry to your outlet opening.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard step={1} title="Enquire" description="Fill the franchise form or call us. We understand your city, budget and space." />
            <StepCard step={2} title="Discussion" description="Our team shares the model, [ADD: investment details] and expected returns." />
            <StepCard step={3} title="Setup" description="Location finalisation, outlet setup and staff training with our support team." />
            <StepCard step={4} title="Launch" description="Your Amrutulya outlet opens with supply, branding and ongoing guidance." />
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquiry" className="section-y bg-secondary/50">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl">Ready to start your outlet?</h2>
            <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">
              Tell us a little about yourself and our franchise team will call you back with the
              complete Amrutulya franchise plan.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li>• Support with outlet setup and training</li>
              <li>• Consistent premix supply and menu</li>
              <li>• Branding and marketing material</li>
            </ul>
          </div>
          <EnquiryForm redirectToWhatsApp={true} />
        </div>
      </section>
    </>
  );
}
