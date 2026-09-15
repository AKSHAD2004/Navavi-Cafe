import { createFileRoute } from "@tanstack/react-router";
import { Heart, Sparkles, Target } from "lucide-react";
import banner from "@/assets/hero/hero.png.jpeg";
import { FranchiseCTAButton } from "@/components/site/FranchiseCTAButton";
import { BRAND } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Navavi Chai & Cafe — Our Story & Values" },
      {
        name: "description",
        content:
          "Learn about Navavi Chai & Cafe: our story, values and mission to bring authentic Indian chai, coffee and premixes to every heart.",
      },
      { property: "og:title", content: "About Navavi Chai & Cafe" },
      {
        property: "og:description",
        content: "Our story, values and mission behind Navavi Chai & Cafe and the Amrutulya chai experience.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="surface-dark">
        <div className="container-page py-14 md:py-20">
          <h1 className="font-display text-4xl text-espresso-foreground md:text-5xl">
            About Navavi Chai &amp; Cafe
          </h1>
          <p className="mt-3 font-display text-lg text-primary">{BRAND.tagline}</p>
          <p className="mt-5 max-w-2xl leading-relaxed text-espresso-foreground/80">
            Navavi Chai &amp; Cafe is an Indian tea, coffee and instant-premix brand built around one
            simple idea — a great cup of chai should taste the same, everywhere, every single time.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <img
            src={banner}
            alt="Navavi Chai & Cafe branding with a cup of chai"
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-warm"
          />
          <div>
            <h2 className="text-3xl">Our story</h2>
            {/* <p className="mt-4 leading-relaxed text-muted-foreground">
              [ADD: founding year and founder story for Navavi Chai &amp; Cafe]
            </p> */}
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Today we operate from our offices in Pune and Bijnor, supplying tea, coffee, lemon tea
              and refreshment premixes to Amrutulya outlets, cafes, offices and bulk buyers.
              [ADD: production capacity and certifications, e.g. FSSAI licence number]
            </p>
            <FranchiseCTAButton className="mt-7" label="Partner with us" />
          </div>
        </div>
      </section>

      <section className="section-y bg-secondary/50">
        <div className="container-page grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To make authentic, consistent Indian chai and coffee accessible in every neighbourhood through easy-to-run outlets.",
            },
            {
              icon: Heart,
              title: "Our Values",
              text: "Honest ingredients, fair partnerships and a taste that people come back for — every day.",
            },
            {
              icon: Sparkles,
              title: "Our Promise",
              text: "Reliable supply, dependable quality and hands-on support for every franchise partner.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-7">
              <Icon className="size-7 text-primary" />
              <h3 className="mt-4 text-xl">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
