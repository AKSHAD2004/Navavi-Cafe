import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { whatsappLink } from "@/data/site";
import type { Product } from "@/data/products";
import { WhatsAppIcon } from "./WhatsAppIcon";

const categoryStyles: Record<Product["category"], string> = {
  Tea: "bg-tea/15 text-tea",
  Coffee: "bg-coffee/15 text-coffee",
  "Lemon Tea": "bg-lemon/25 text-espresso",
  Premix: "bg-premix/15 text-premix",
};

export function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  const [inView, setInView] = useState(true);
  const [isCenterActive, setIsCenterActive] = useState(false);
  const cardRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardEl = cardRef.current;
    const imgEl = imageContainerRef.current;
    if (!cardEl) return;

    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    // 1. Entrance reveal observer
    const revealObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          revealObserver.unobserve(cardEl);
        }
      },
      {
        threshold: 0.05,
      },
    );
    revealObserver.observe(cardEl);

    // 2. Mobile center-focus observer (only triggers when in middle band of viewport)
    let centerObserver: IntersectionObserver | null = null;
    if (imgEl) {
      centerObserver = new IntersectionObserver(
        ([entry]) => {
          setIsCenterActive(entry.isIntersecting);
        },
        {
          rootMargin: "-32% 0px -32% 0px",
          threshold: 0.15,
        },
      );
      centerObserver.observe(imgEl);
    }

    return () => {
      revealObserver.disconnect();
      centerObserver?.disconnect();
    };
  }, []);

  const staggerDelay = `${(index % 8) * 75}ms`;

  return (
    <article
      ref={cardRef}
      style={{ transitionDelay: staggerDelay }}
      className={`product-card-reveal product-card-interactive group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-lift ${
        inView ? "in-view" : ""
      }`}
    >
      <div
        ref={imageContainerRef}
        className={`product-image-container relative flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-secondary/40 p-3 sm:p-4 transition-all duration-300 ${
          isCenterActive ? "mobile-focus-pop" : ""
        }`}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="relative z-10 size-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-4">
            <span className="grid size-16 place-items-center rounded-full bg-espresso font-display text-2xl font-bold text-primary shadow-inner">
              N
            </span>
            <span className="mt-2 text-xs font-medium text-muted-foreground">Navavi Chai &amp; Cafe</span>
          </div>
        )}
        <span
          className={`absolute left-3 top-3 z-20 rounded-full px-3 py-1 text-xs font-semibold ${categoryStyles[product.category]}`}
        >
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <dl className="mt-4 space-y-1.5 text-sm">
          <div className="flex gap-2">
            <dt className="font-semibold text-espresso">Pack sizes:</dt>
            <dd className="text-muted-foreground">{product.packSizes.join(" · ")}</dd>
          </div>
        </dl>

        <ul className="mt-4 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-5 grid grid-cols-2 gap-1.5 sm:gap-2">
          <a
            href={whatsappLink(
              `Hi Navavi Chai & Cafe, I would like a sample / bulk pricing for ${product.name}.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 sm:h-10 items-center justify-center gap-1 rounded-full bg-whatsapp px-1.5 sm:px-2.5 text-[11px] sm:text-xs font-semibold text-whatsapp-foreground whitespace-nowrap transition-all hover:brightness-105 active:brightness-95 text-center leading-none"
          >
            <WhatsAppIcon className="size-3.5 shrink-0" />
            <span>Request Sample</span>
          </a>
          <Link
            to="/contact"
            className="inline-flex h-9 sm:h-10 items-center justify-center rounded-full border border-primary/70 px-1.5 sm:px-2.5 text-[11px] sm:text-xs font-semibold text-primary whitespace-nowrap transition-colors hover:bg-primary/10 text-center leading-none"
          >
            <span>Bulk Enquiry</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
