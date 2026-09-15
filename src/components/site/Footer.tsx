import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo/logo.png";
import { NAV, PHONE, PHONE_DISPLAY, BRAND } from "@/data/site";

export function Footer() {
  return (
    <footer className="surface-dark mt-8">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Navavi Chai & Cafe Logo"
              className="size-10 shrink-0 rounded-full object-cover"
            />
            <h3 className="font-display text-2xl text-primary">Navavi Chai &amp; Cafe</h3>
          </div>
          <p className="mt-2 text-sm text-espresso-foreground/70">{BRAND.tagline}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-espresso-foreground/80">
            Authentic Indian tea, coffee and instant premixes — powering Amrutulya chai outlets and
            bulk buyers across India.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">Explore</h4>
          <ul className="mt-4 space-y-2">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-espresso-foreground/80 transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-espresso-foreground/80">
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-primary" />
              <a href={`tel:+91${PHONE}`} className="hover:text-primary">
                {PHONE_DISPLAY}
              </a>
            </li>
            {/* <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-primary" />
              <span>{BRAND.email}</span>
            </li> */}
            <li className="flex gap-2">
              <MapPin className="size-4 shrink-0 text-primary" />
              <span>Head Office: {BRAND.puneAddress}</span>
            </li>
            <li className="flex gap-2">
              <MapPin className="size-4 shrink-0 text-primary" />
              <span>Sales Office: {BRAND.bijnorAddress}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-espresso-foreground/15">
        <div className="container-page py-5 text-center text-xs text-espresso-foreground/60">
          © {new Date().getFullYear()} Navavi Chai &amp; Cafe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
