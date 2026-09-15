# Navavi Franchise Hub

Build a static, multi-page marketing + franchise-lead-generation website for Navavi Chai & Cafe, an Indian tea, coffee, and instant-premix brand ("Shahid Swad Har Dil Ke Pass"). The site's #1 goal is generating franchise enquiries. Secondary goal is showcasing the product range for B2B/bulk/retail buyers.

Tone: Warm, premium, "desi" (authentic Indian) — think traditional kulhad chai culture meets modern café branding. Not cold or corporate.

Primary user actions:

Submit a franchise enquiry

Click WhatsApp to chat

Request a product sample

BRAND IDENTITY

Brand name: Navavi Chai & Cafe

Tagline: "Shahid Swad Har Dil Ke Pass"

Color palette:

Primary: Deep coffee brown (#3B2314 / #4A2C17) and warm chocolate gradients

Accent: Gold/amber (#D4AF37, #C9922E) for headings, borders, CTAs

Supporting: Cream/ivory (#F5EFE0) for text panels and contrast backgrounds

Category accent colors pulled from packaging: green (Green Tea/Nimbu Pani), yellow (Lemon Tea), maroon/pink (Rose Masala Tea), blue tint (Cold Coffee)

Typography: Elegant serif or script-style display font for headings (mimicking the logo's calligraphic "Navavi"), clean sans-serif for body text. Should feel premium, not generic Bootstrap.

Visual motifs: Steam wisps, tea leaves, kulhad (clay cup), jaggery cubes, cardamom pods, coffee beans — use as decorative background elements/icons throughout, not just on product cards.

Logo: Cream oval badge with "Navavi" in brown script, a steaming cup icon on top, "Chai & Cafe" in bold brown below, tagline in small caps underneath.

GLOBAL LAYOUT

Sticky Header

Logo (left)

Nav links: Home | About Us | Amrutulya Chai Franchise | Products | Why Choose Us | Contact Us

Right side: "Get Franchise Details" button (solid gold/brown, high contrast) + floating WhatsApp icon button (green, circular)

On scroll, header shrinks slightly and gets a subtle shadow/background blur

Mobile: hamburger menu, WhatsApp button stays visible as a floating action button bottom-right on all pages

Footer (all pages)

Logo + one-line brand statement

Quick links (same as nav)

Head Office: Somaji Complex, Flat No. 6, Opposite to Vama, Indira Gandhi Chowk, Akurdi – 411035, Pune

Sales Office: Near Dak Khana, Pani Ki Tanki Ke Paas, Bijnor – 246701

Franchise contact number: 8422009086 (click-to-call on mobile)

WhatsApp button

Social icons (Instagram, Facebook — placeholder links)

Copyright line

Global Components to Build Once, Reuse Everywhere

<FranchiseCTAButton> — gold button, used in header, hero, footer, and floating on scroll for Franchise page

<WhatsAppFloatButton> — fixed position, all pages

<ProductCard> — image, name, pack size, prep info, "suitable for" tags, Request Sample button

<StepCard> — numbered circle + title + description, used in "How It Works"

<EnquiryForm> — Name, Phone, City/Location, Preferred Franchise Location (dropdown or text), Message, Submit button. Use on Franchise page and Contact page.

PAGE 1 — HOME

Hero Section

Full-width background: warm brown gradient with a large lifestyle photo (chai being poured into a kulhad, steam rising) — use uploaded product/lifestyle imagery style

Headline (large, gold serif): "Start Your Own Amrutulya Chai Business"

Subheadline (cream text): "Authentic Amrutulya Chai Premix with a complete franchise business model, product support and guidance."

Two buttons side by side: Get Franchise Details (primary, gold) / Request Product Sample (secondary, outlined)

Small trust strip below hero: icons + text — "100% Natural Ingredients" | "Pan-India Distribution" | "Franchise Support" | "Premium Quality"

About Teaser Section

Two-column layout: short paragraph (3–4 lines: company name, established year, manufacturing facility, one credibility line) on left; image of the facility/product packets on right

"Learn More About Us →" text link to About page

Franchise Highlight Section (visually prominent — this is the money section)

Background: slightly different shade (dark brown) to separate it visually

Heading: "Amrutulya Chai Franchise — Build Your Own Tea Business"

Short pitch paragraph

Icon grid (4–5 items): Franchise Branding, Product Training, Marketing Support, Supply Support, Business Guidance — each with a small icon (leaf, cup, megaphone, truck, handshake)

Button: "View Franchise Details →"

How the Franchise Works (condensed 5-step strip)

Horizontal step layout on desktop (numbered 1–5), vertical stack on mobile

Steps: Submit Enquiry → Our Team Contacts You → Select Your Location → Outlet Setup → Training & Launch

Each step: short 1-line description only (full detail lives on Franchise page)

Products Preview

Heading: "Our Products"

Grid of 6 product cards (image + name only, no long description): Jaggery Elaichi Chai, Jaggery Masala Chai, Hot Coffee, Cold Coffee, Green Tea, Lemon Tea

Button: "View All Products →"

Why Choose Us Teaser

3–4 column icon+text block: Quality Ingredients, Franchise Support, Pan-India Distribution, Trusted Brand

Link to full page

Bottom CTA Banner

Full-width gold/brown banner: "Ready to Start Your Own Chai Business?" + Get Franchise Details button + phone number displayed large

PAGE 2 — ABOUT US

Keep this page short and factual — no filler.

Heading: About Our Company

Intro paragraph including (use placeholders where I haven't given real data, clearly marked as [ADD: ...] so I can fill in):

Company name: Navavi Chai & Cafe

Established year: [ADD: year]

Manufacturing facility & location: [ADD: facility location]

Manufacturing experience: [ADD: years of experience]

Quality/certifications: [ADD: FSSAI number, ISO, etc. if available]

Distribution presence: [ADD: states/cities covered]

Export presence (if applicable): [ADD: countries, or omit section entirely if not exporting]

Sub-heading: Our Strengths

Two-column icon list: Franchise Support | Pan-India Distribution (add more if provided later)

Include one image: facility exterior, production line, or founder photo if available (use a placeholder image block if not provided)

PAGE 3 — AMRUTULYA CHAI FRANCHISE (Most important page — build this with the most visual weight and largest content depth)

Page Hero

Heading: Amrutulya Chai Franchise — Start Your Tea Business

Subtext: "Build your own tea business with our Amrutulya Chai franchise model. We provide the product, business guidance, branding support and operational assistance required to start your outlet."

CTA button scrolling down to the enquiry form: "Enquire Now"

What You Get (icon grid, 8 items — 2 rows of 4 on desktop, stacked on mobile)

Franchise Branding

Amrutulya Chai Products

Outlet Setup Guidance

Product Training

Recipe/Process Guidance

Marketing Support

Business Guidance

Supply Support

Each item: icon + bold title + 1-line description.

Investment Section

Build this section but keep it conditionally hidden/commented out until real figures are confirmed. Structure ready to populate:

Franchise Fee: [ADD]

Setup Cost: [ADD]

Equipment Cost: [ADD]

Initial Stock Cost: [ADD]

Total Estimated Investment: [ADD]

Display as a clean pricing-style table/card. Note in a code comment: "Do not display placeholder numbers live — wait for confirmed figures."

How the Franchise Works (full detailed version)

Vertical timeline or numbered card layout with fuller descriptions than the homepage:

Submit Enquiry — Fill the franchise form with your details and preferred location.

Our Team Contacts You — Our representative discusses your location and business requirements.

Select Your Location — Choose the suitable location for your outlet with our guidance.

Outlet Setup — Branding, equipment and product requirements are arranged for your outlet.

Training & Launch — Get complete product and operational guidance and officially start your business.

Franchise Enquiry Form (main conversion point of the entire site)

Fields: Full Name, Phone Number, Email (optional), City/Preferred Location, Message/Notes Submit button: "Submit Enquiry" Add a trust line below the form: "Our team will contact you within 24–48 hours." Also show the franchise contact number prominently near the form: 8422009086

PAGE 4 — PRODUCTS

Page Intro

Heading: "Our Products"

Short line: "Premium tea, coffee and instant premix products — crafted for retail, franchise outlets, cafés and vending."

Category Tabs / Filter Bar

Tabs: All | Tea Premix | Coffee Premix | Lemon Tea | Other Premix

A. Tea Premix

Product cards for: Amrutulya Chai, Jaggery Elaichi Chai, Jaggery Masala Chai, Jaggery Ginger, Jaggery Ginger Masala Chai, Jaggery Rose Masala Tea, Basaundi Chai, Black Tea, Green Tea (and any other variants)

B. Coffee Premix

Product cards for: Hot Coffee, Cold Coffee (and any Specialty Coffee variants — placeholder if not yet defined)

C. Lemon Tea

Product cards for: Lemon Tea, and if applicable Black Lemon Tea / Green Lemon Tea variants

D. Other Premix

Product cards for: Nimbu Pani (Instant Lemon Drink Mix), and placeholders for any cold beverages / milk-based beverages / other specialty premixes

Product Card Component (repeat for every product)

Product packet image

Product Name

Pack Size (e.g., 250 gm / 1 kg)

Preparation: ___ ml (fill per product where known)

Suitable For: tags — Retail / Franchise / Vending / Café (use small pill badges)

Button: "Request Sample" (opens a small modal/form or links to Contact page with product pre-filled)

PAGE 5 — WHY CHOOSE US

Heading: "Why Choose Navavi Chai & Cafe"

Expanded version of the homepage teaser, as a 2-column or icon-grid layout with slightly longer descriptions (2–3 lines each):

100% Natural Ingredients & Premium Quality

Wide Product Range (Tea, Coffee, Lemon Tea, Specialty Premix)

Complete Franchise Support (branding, training, marketing, supply)

Pan-India Distribution Network

Traditional Recipes, Modern Packaging

Dedicated Business Guidance Team

Optional: add a testimonials/franchisee quotes carousel (placeholder content, marked for later replacement)

PAGE 6 — CONTACT US

Heading: "Get in Touch"

Two-column layout:

Left: Contact form (Name, Phone, Email, Message, Subject dropdown: General Enquiry / Franchise Enquiry / Product Sample Request)

Right: Contact details card —

Head Office: Somaji Complex, Flat No. 6, Opposite to Vama, Indira Gandhi Chowk, Akurdi – 411035, Pune

Sales Office: Near Dak Khana, Pani Ki Tanki Ke Paas, Bijnor – 246701

Franchise Contact: 8422009086

WhatsApp button

Embedded Google Map (use Pune head office address, placeholder embed code)

Bottom: social media icons

TECHNICAL / UX REQUIREMENTS

Fully responsive: mobile-first, test at 375px, 768px, 1440px breakpoints

Fast image loading — use optimized/lazy-loaded images for product packets

Smooth scroll for in-page anchor links (e.g., Home → How It Works)

All CTA buttons and forms should have hover/active states in the gold/brown palette

Forms should show a success confirmation message/toast on submit (no backend required yet — use a placeholder submit handler I can wire up later)

Use consistent spacing/padding system (e.g., Tailwind's default scale) across all pages

SEO basics: unique page titles and meta descriptions per page (I'll provide copy separately if needed)

Do not use stock imagery that looks generic/Western — the product photography style should match the warm, traditional Indian kulhad-chai aesthetic already established in the brand packaging

CONTENT NOTES FOR LOVABLE

Anywhere marked [ADD: ...] above is a placeholder — build the UI element but don't fabricate real numbers or facts.

Use "Navavi Chai & Cafe" consistently as the brand name (not "Amrutulya" — Amrutulya is the franchise/product line name, not the company name).

Keep all Hindi/Hinglish tagline text (e.g., "Har Sip Mein Desi Swad") exactly as given — don't translate it into English.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f4643ea7-3187-4d53-8b0a-9da70e37d07c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
# Navavi-Cafe
