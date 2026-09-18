import { createFileRoute } from "@tanstack/react-router";
import { Coffee, Handshake, Layers, ShieldCheck, Timer, TrendingUp } from "lucide-react";
import { FranchiseCTAButton } from "@/components/site/FranchiseCTAButton";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Navavi Chai & Cafe — Franchise Advantages" },
      {
        name: "description",
        content:
          "Consistent taste, low wastage, quick service and full franchise support — the reasons partners choose Navavi Chai & Cafe for their Amrutulya outlet.",
      },
      { property: "og:title", content: "Why Choose Navavi Chai & Cafe" },
      {
        property: "og:description",
        content: "Consistent taste, healthy margins and end-to-end franchise support.",
      },
      { property: "og:url", content: "/why-choose-us" },
    ],
    links: [{ rel: "canonical", href: "/why-choose-us" }],
  }),
  component: WhyChooseUs,
});

const reasons = [
  { icon: Coffee, title: "Same taste, every cup", text: "Premix-based preparation removes guesswork — the 500th cup tastes like the first." },
  { icon: Timer, title: "Serve in seconds", text: "Faster service means shorter queues and more cups sold at peak hours." },
  { icon: TrendingUp, title: "Healthy margins", text: "Controlled portions and low wastage protect your daily profitability." },
  { icon: Layers, title: "Wide product range", text: "Chai, coffee, lemon tea and refreshments — one supplier for the full menu." },
  { icon: ShieldCheck, title: "Quality you can trust", text: "FSSAI-compliant manufacturing, 100% vegetarian ingredients, and strict batch testing for purity, authentic aroma, and shelf stability." },
  { icon: Handshake, title: "Partner-first support", text: "Training, supply and business guidance that continue long after launch." },
];

function WhyChooseUs() {
  return (
    <>
      <section className="surface-dark">
        <div className="container-page py-14 md:py-20">
          <h1 className="font-display text-4xl text-espresso-foreground md:text-5xl">
            Why choose Navavi Chai &amp; Cafe
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-espresso-foreground/80">
            A chai business succeeds on two things — taste people trust and operations that stay
            simple. We are built for both.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-warm"
            >
              <Icon className="size-7 text-primary" />
              <h2 className="mt-4 text-xl">{title}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y bg-secondary/50">
        <div className="container-page">
          <h2 className="text-3xl md:text-4xl">What our partners say</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                quote:
                  "Maine pehle socha tha ki chai ka business itna simple nahi hoga — lekin Navavi ke premix ne sab aasan kar diya. Har cup ek jaisa aata hai, customers khush hain aur margin bhi achha hai.",
                name: "Ravi Sharma",
                city: "Pune, Maharashtra",
              },
              {
                quote:
                  "Navavi ki team ne setup se lekar daily supply tak poora support diya. Training bhi bahut helpful thi. Aaj hamare outlet pe 200+ cups roz bik rahe hain sirf 3 mahine mein.",
                name: "Ajay Patel",
                city: "Nagpur, Maharashtra",
              },
              {
                quote:
                  "Amrutulya-style chai jo consistently achi ho — yahi toh chahiye tha mujhe. Navavi ke saath partnership best decision raha. Supply kabhi nahi rukti aur quality same rehti hai.",
                name: "Sunil Verma",
                city: "Bijnor, Uttar Pradesh",
              },
            ].map(({ quote, name, city }) => (
              <blockquote key={name} className="rounded-2xl border border-border bg-card p-6">
                <p className="leading-relaxed text-muted-foreground">"{quote}"</p>
                <footer className="mt-4 text-sm font-semibold text-espresso">
                  {name}, <span className="font-normal text-muted-foreground">{city}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page surface-dark rounded-3xl p-8 text-center md:p-14">
          <h2 className="font-display text-3xl text-espresso-foreground md:text-4xl">
            Let's build your chai business together
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-espresso-foreground/80">
            Speak to our franchise team and see if your city is available.
          </p>
          <FranchiseCTAButton className="mt-7" label="Apply for Franchise" size="lg" />
        </div>
      </section>
    </>
  );
}
