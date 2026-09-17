import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo/logo.png";
import { NAV, PHONE, PHONE_DISPLAY, BRAND } from "@/data/site";
import { FranchiseCTAButton } from "./FranchiseCTAButton";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Navavi Chai & Cafe Logo"
            className="size-11 shrink-0 rounded-full object-cover shadow-sm"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-lg font-bold leading-tight text-espresso">
              Navavi Chai &amp; Cafe
            </span>
            <span className="block truncate text-xs text-muted-foreground">{BRAND.tagline}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:+91${PHONE}`}
            className="hidden items-center gap-2 rounded-full border border-border px-3 py-2 text-sm font-semibold text-espresso transition-colors hover:bg-secondary md:inline-flex"
          >
            <Phone className="size-4" />
            {PHONE_DISPLAY}
          </a>
          <FranchiseCTAButton label="Franchise Enquiry" size="sm" className="hidden sm:inline-flex" animated />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-espresso transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col py-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="rounded-lg px-2 py-3 text-base font-medium transition-colors hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 pb-2">
              <FranchiseCTAButton label="Franchise Enquiry" size="md" className="w-full" animated />
              <a
                href={`tel:+91${PHONE}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 font-semibold text-espresso"
              >
                <Phone className="size-4" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </nav>
        </div>
      ) : null}

      {/* Infinite Animated Trust & Quality Marquee Line below Navbar */}
      <div className="border-t border-border/60 bg-secondary/85 py-1.5 backdrop-blur-sm">
        <div className="marquee-container">
          <div className="marquee-track flex items-center gap-6 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-espresso">
            <span>✨ 100% Authentic Desi Taste</span>
            <span>•</span>
            <span>☕ 50+ Amrutulya Outlets in India</span>
            <span>•</span>
            <span>⚡ Instant Premix &amp; Zero Wastage</span>
            <span>•</span>
            <span>🏆 Premium Spices &amp; Tea Leaves</span>
            <span>•</span>
            <span>💼 High Margin Franchise Model</span>
            <span>•</span>
            <span>🚀 Full Training &amp; Marketing Support</span>
            <span>•</span>
            {/* Repeated for seamless infinite scroll */}
            <span>✨ 100% Authentic Desi Taste</span>
            <span>•</span>
            <span>☕ 50+ Amrutulya Outlets in India</span>
            <span>•</span>
            <span>⚡ Instant Premix &amp; Zero Wastage</span>
            <span>•</span>
            <span>🏆 Premium Spices &amp; Tea Leaves</span>
            <span>•</span>
            <span>💼 High Margin Franchise Model</span>
            <span>•</span>
            <span>🚀 Full Training &amp; Marketing Support</span>
            <span>•</span>
          </div>
        </div>
      </div>
    </header>
  );
}
