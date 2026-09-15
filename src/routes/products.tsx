import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/site/ProductCard";
import { FranchiseCTAButton } from "@/components/site/FranchiseCTAButton";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { PRODUCTS, CATEGORIES, type Category } from "@/data/products";
import { whatsappLink } from "@/data/site";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Tea, Coffee & Instant Premixes | Navavi Chai & Cafe" },
      {
        name: "description",
        content:
          "Explore Navavi Chai & Cafe premixes: masala chai, jaggery tea, black tea, green tea, hot and cold coffee, lemon tea and nimbu pani. Bulk and B2B orders welcome.",
      },
      { property: "og:title", content: "Navavi Chai & Cafe Product Range" },
      {
        property: "og:description",
        content: "Tea, coffee, lemon tea and refreshment premixes for cafes, offices and bulk buyers.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

function Products() {
  const [active, setActive] = useState<Category>("All");
  const list = active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <>
      <section className="surface-dark">
        <div className="container-page py-14 md:py-20">
          <h1 className="font-display text-4xl text-espresso-foreground md:text-5xl">
            Our Products
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-espresso-foreground/80">
            Instant tea, coffee and refreshment premixes built for cafes, franchise outlets, offices
            and bulk buyers. Consistent taste, quick service, minimal wastage.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  active === cat
                    ? "bg-primary text-primary-foreground shadow-warm"
                    : "border border-border bg-card text-espresso hover:bg-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {list.map((product, index) => (
              <ProductCard key={product.slug} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-secondary/50">
        <div className="container-page rounded-3xl border border-border bg-card p-8 text-center md:p-12">
          <h2 className="text-3xl">Bulk, B2B &amp; distribution enquiries</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-muted-foreground">
            Buying for a cafe chain, office pantry, vending network or retail shelf? Share your
            requirement and we'll send pricing, pack options and samples.
            [ADD: minimum order quantity and delivery coverage]
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappLink("Hi, I would like bulk / B2B pricing for Navavi premixes.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-whatsapp-foreground transition-all hover:brightness-105"
            >
              <WhatsAppIcon className="size-5" />
              Request Bulk Pricing
            </a>
            <FranchiseCTAButton label="Franchise Enquiry" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </>
  );
}
