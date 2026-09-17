export const PHONE = "8422009086";
export const PHONE_DISPLAY = "+91 84220 09086";
export const WHATSAPP_URL = `https://wa.me/91${PHONE}`;

export function whatsappLink(message: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export const EMAIL = "navavicafe@gmail.com";

export const BRAND = {
  name: "Navavi Chai & Cafe",
  tagline: "Shahi Swad Har Dil Ke Pass",
  franchise: "Amrutulya",
  email: "navavicafe@gmail.com",
  puneAddress: "Somaji Complex, Flat No. 6, Opposite to Vama, Indira Gandhi Chowk, Akurdi – 411035, Pune",
  bijnorAddress: "Near Dak Khana, Pani Ki Tanki Ke Paas, Bijnor – 246701",
  hours: "[ADD: business hours]",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/franchise", label: "Franchise" },
  { to: "/products", label: "Products" },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/contact", label: "Contact" },
] as const;
