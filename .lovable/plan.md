## Add Case Studies Section to Home Page

Add a new "Case Studies" section to the home page (`src/pages/Index.tsx`), placed between `TestimonialsSection` and `PricingSection`.

### What it will contain

A clean, on-brand section that mirrors the style of the existing `/case-studies` page:

- Section heading: "Real Clients. *Real Results.*"
- Short intro line: "A closer look at how franchise consultants run their investor lead pipeline with FranchiseLeadsPro."
- **2 case study cards** in a responsive grid:
  1. **Jesica Thompson — Franchise Solutions Inc.** (Paid Ads + CRM + Website Inbound) → links to `/case-studies`
  2. **HOF Franchise Consulting — Shawn Gurn** (Website Redesign + Brand) → links to `/case-studies/hof-franchise-consulting`
- Each card: small label, title, 2-line description, "Read case study →" link
- Bottom CTA button: "View All Case Studies" → links to `/case-studies`

### What I'll build

- New component: `src/components/CaseStudiesSection.tsx` (uses existing design tokens: `bg-card`, `border-border`, `text-accent`, `font-display`, etc.)
- Edit `src/pages/Index.tsx` to import it and render between `<TestimonialsSection />` and `<PricingSection />`

### What I will NOT touch

- The existing `/case-studies` page itself
- Any other home page sections, copy, or styling
- No new images, no videos in this section (keeps it lightweight)
- No backend / data changes

Reply **"Go"** and I'll implement it.