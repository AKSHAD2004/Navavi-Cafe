import { Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/site/ProductCard";
import { PRODUCTS } from "@/data/products";

export function HomeProductsSection() {
  return (
    <section className="section-y bg-secondary/50">
      <div className="container-page">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl">Our Premix Range</h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Tea, coffee, lemon tea and refreshment premixes — made for cafes, offices and bulk
              buyers.
            </p>
          </div>
          <Link
            to="/products"
            className="rounded-full border border-primary/70 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
          >
            View all products →
          </Link>
        </div>

        {/* Grid — identical to products page */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
