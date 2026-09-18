import basaundiChai from "@/assets/New Products/1.jpeg";
import jaggeryMasala from "@/assets/New Products/2.jpeg";
import jaggeryGingerMasala from "@/assets/New Products/3.jpeg";
import nimbuPani from "@/assets/New Products/4.jpeg";
import jaggeryElaichi from "@/assets/New Products/5.jpeg";
import jaggeryRoseMasala from "@/assets/New Products/8.jpeg";
import greenTea from "@/assets/New Products/9.jpeg";
import blackTea from "@/assets/New Products/10.jpeg";
import lemonTea from "@/assets/New Products/11.jpeg";
import hotCoffee from "@/assets/New Products/13.jpg";
import coldCoffee from "@/assets/New Products/14.jpg";
import panMasalaTea from "@/assets/New Products/pan-masala-tea.jpg";

export type Product = {
  slug: string;
  name: string;
  category: "Tea" | "Coffee" | "Lemon Tea" | "Premix";
  description: string;
  packSizes: string[];
  preparation: string;
  tags: string[];
  image: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "pan-masala-tea",
    name: "Pan Masala Tea",
    category: "Tea",
    description:
      "Aromatic and refreshing tea infused with the royal flavours of traditional meetha pan, rich spices, fennel and fragrant rose petals.",
    packSizes: ["100g", "250g", "500g", "1kg", "2kg"],
    preparation: "Just add hot water — instant serve with authentic taste",
    tags: ["Aromatic", "Refreshing", "Royal flavour", "Signature blend"],
    image: panMasalaTea,
  },
  {
    slug: "basaundi-chai",
    name: "Basaundi Chai Premix",
    category: "Tea",
    description:
      "Rich, milky basundi-style chai premix with a thick mouthfeel and slow-cooked sweetness — a signature Navavi favourite.",
    packSizes: ["100g", "500g", "1kg", "2kg"],
    preparation: "Just add hot water — [ADD: exact ratio, e.g. 25g per 150ml]",
    tags: ["Instant premix", "Milk based", "Cafe favourite"],
    image: basaundiChai,
  },
  {
    slug: "jaggery-rose-masala-tea",
    name: "Jaggery Rose Masala Tea",
    category: "Tea",
    description:
      "Gud-sweetened masala chai layered with rose — a refined, no-refined-sugar tea that stands out on any menu.",
    packSizes: ["100g", "500g", "1kg", "2kg"],
    preparation: "Just add hot water — [ADD: exact ratio]",
    tags: ["Jaggery sweetened", "No refined sugar", "Signature blend"],
    image: jaggeryRoseMasala,
  },
  {
    slug: "jaggery-elaichi-chai",
    name: "Jaggery Elaichi Chai",
    category: "Tea",
    description:
      "Cardamom-forward chai balanced with natural jaggery for a clean, aromatic cup served kulhad-style.",
    packSizes: ["100g", "500g", "1kg", "2kg"],
    preparation: "Just add hot water — [ADD: exact ratio]",
    tags: ["Jaggery sweetened", "Elaichi", "Best seller"],
    image: jaggeryElaichi,
  },
  {
    slug: "jaggery-masala-chai",
    name: "Jaggery Masala Chai",
    category: "Tea",
    description:
      "Classic Amrutulya-style masala chai with a full spice bouquet — ginger, cinnamon, clove and black pepper.",
    packSizes: ["100g", "500g", "1kg", "2kg"],
    preparation: "Just add hot water — [ADD: exact ratio]",
    tags: ["Amrutulya style", "Spiced", "Jaggery sweetened"],
    image: jaggeryMasala,
  },
  {
    slug: "jaggery-ginger-masala-chai",
    name: "Jaggery Ginger Masala Chai Premix",
    category: "Tea",
    description:
      "Zesty ginger-forward masala chai with the natural sweetness of jaggery — a warming, spiced cup that energises with every sip.",
    packSizes: ["100g", "500g", "1kg", "2kg"],
    preparation: "Just add hot water",
    tags: ["Jaggery sweetened", "Ginger forward", "Warming"],
    image: jaggeryGingerMasala,
  },
  {
    slug: "jaggery-ginger-premix",
    name: "Jaggery Ginger Premix",
    category: "Tea",
    description:
      "A clean, simple ginger premix sweetened with jaggery — great as a standalone ginger tea or a base for custom chai blends.",
    packSizes: ["100g", "500g", "1kg"],
    preparation: "Just add hot water",
    tags: ["Jaggery sweetened", "Ginger", "Digestive"],
    image: jaggeryGingerMasala,
  },
  {
    slug: "black-tea",
    name: "Black Tea Premix",
    category: "Tea",
    description:
      "Strong, clear black tea premix for offices, vending and cafes where a lighter, milk-free cup is preferred.",
    packSizes: ["100g", "500g", "1kg"],
    preparation: "Just add hot water — [ADD: exact ratio]",
    tags: ["Milk free", "Vending ready", "Office pantry"],
    image: blackTea,
  },
  {
    slug: "green-tea",
    name: "Green Tea Premix",
    category: "Tea",
    description:
      "A light, refreshing green tea option for health-conscious customers, ready in seconds with no brewing time.",
    packSizes: ["100g", "500g", "1kg"],
    preparation: "Just add hot water — [ADD: exact ratio]",
    tags: ["Light", "Health conscious", "Quick serve"],
    image: greenTea,
  },
  {
    slug: "hot-coffee",
    name: "Hot Coffee Premix",
    category: "Coffee",
    description:
      "Creamy, frothy hot coffee premix that pours a consistent cafe-quality cup without a machine or barista.",
    packSizes: ["100g", "500g", "1kg", "2kg"],
    preparation: "Just add hot water — [ADD: exact ratio]",
    tags: ["Frothy", "No machine needed", "Cafe grade"],
    image: hotCoffee,
  },
  {
    slug: "cold-coffee",
    name: "Cold Coffee Premix",
    category: "Coffee",
    description:
      "Thick, chilled cold coffee premix — a high-margin summer seller for cafes, kiosks and QSR counters.",
    packSizes: ["100g", "500g", "1kg", "2kg"],
    preparation: "Blend with chilled milk / water — [ADD: exact ratio]",
    tags: ["Summer seller", "High margin", "Chilled"],
    image: coldCoffee,
  },
  {
    slug: "lemon-tea",
    name: "Lemon Tea Premix",
    category: "Lemon Tea",
    description:
      "Tangy, aromatic lemon tea premix served hot or iced — a refreshing counterpoint to milk-based drinks.",
    packSizes: ["100g", "500g", "1kg"],
    preparation: "Add hot or cold water — [ADD: exact ratio]",
    tags: ["Hot or iced", "Refreshing", "Milk free"],
    image: lemonTea,
  },
  {
    slug: "nimbu-pani",
    name: "Nimbu Pani Premix",
    category: "Premix",
    description:
      "Instant nimbu pani with a classic sweet-salty balance — a fast-moving addition to the summer menu.",
    packSizes: ["100g", "500g", "1kg"],
    preparation: "Mix with chilled water — [ADD: exact ratio]",
    tags: ["Instant", "Summer menu", "Sweet & salty"],
    image: nimbuPani,
  },
];

export const CATEGORIES = ["All", "Tea", "Coffee", "Lemon Tea", "Premix"] as const;
export type Category = (typeof CATEGORIES)[number];
