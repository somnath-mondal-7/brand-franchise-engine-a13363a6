import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  ArrowRight, CheckCircle2, Linkedin, Share2, Globe, Bot, Crown, Users,
  IndianRupee, ShieldCheck, Sparkles, TrendingUp, Award,
} from "lucide-react";
import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";
import HeroSlider from "@/components/india/HeroSlider";
import FeaturedBrands from "@/components/india/FeaturedBrands";
import TestimonialsSection from "@/components/TestimonialsSection";

const solutions = [
  { icon: Crown, title: "Franchise Strategy & Readiness", desc: "End-to-end franchise model design — unit economics, royalty structures, territory planning, and franchise-readiness audit for the U.S. market." },
  { icon: ShieldCheck, title: "Franchise Documentation & FDD", desc: "FDD, franchise agreements, operations manuals, and SOPs drafted by franchise specialists — fully U.S.-compliant." },
  { icon: Linkedin, title: "LinkedIn Investor Outreach", desc: "Hand-built outreach to qualified U.S. investors, family offices, and serious franchise buyers across all 50 states." },
  { icon: Share2, title: "Performance Marketing & Ads", desc: "Meta, Google, Instagram and YouTube campaigns tuned for the American franchise investor." },
  { icon: Globe, title: "Franchise Website & Brand Build", desc: "Investor-grade websites, brand decks, and pitch material with CRM-integrated lead capture." },
  { icon: Users, title: "Franchisee Recruitment & Onboarding", desc: "From lead qualification to discovery day, agreement signing, and launch — we manage the full onboarding pipeline." },
];

const why = [
  { icon: IndianRupee, title: "Transparent USD pricing", desc: "Built for American franchisors — clear USD plans, no surprise retainers." },
  { icon: ShieldCheck, title: "Franchise specialists only", desc: "We work with franchise brands. Not real estate, not e-com, not SaaS." },
  { icon: Sparkles, title: "Premium creative", desc: "Editorial-grade brand decks, investor pitch sites, and ad creatives that look the part." },
  { icon: TrendingUp, title: "Built for serious investors", desc: "We attract qualified franchise buyers — not curious browsers." },
];

const steps = [
  { n: "01", title: "Discovery", desc: "We study your franchise model, ticket size, ideal franchisee profile, and U.S. regional strategy." },
  { n: "02", title: "Brand & Funnel", desc: "Brand polish, investor landing page, CRM funnel, and creative system." },
  { n: "03", title: "Multi-Channel Outreach", desc: "LinkedIn outreach, performance ads, and content engine go live across the U.S." },
  { n: "04", title: "Qualified Investor Calls", desc: "Pre-screened franchise buyers booked directly on your calendar." },
];

const faqs = [
  { q: "What does $1 Franchise Lead Generation actually mean?", a: "It is our promise of brutally cost-efficient lead generation for U.S. franchisors. Through LinkedIn, performance ads, and authority content we drive your cost per qualified investor enquiry down to a level that feels almost free — so your franchise sales math finally works." },
  { q: "Which U.S. franchise categories do you work with?", a: "Food & beverage, education, wellness, retail, services, fitness, salons, healthcare, and emerging D2C brands going the franchise route. If you have working unit economics and an FDD ready, we can run growth for you." },
  { q: "Do you work with emerging franchisors who have just 1–2 units?", a: "Yes — provided the unit is profitable and you have an FDD / franchise agreement ready. We help young franchisors look as credible as legacy brands from day one." },
  { q: "Do you handle state-by-state targeting and FDD-registration states?", a: "Absolutely. We run state-wise targeting across all 50 states and respect registration-state requirements (CA, NY, IL, VA, WA, MN, MD, RI, ND, SD, HI, MI, WI, IN)." },
  { q: "Where are leads delivered?", a: "Directly into your CRM, with qualification notes from our team. You also get weekly reports and a dedicated U.S. success manager." },
];

const categories = [
  "Food & Beverage", "Education & Tutoring", "Wellness & Salon", "Fitness & Gym",
  "Retail & D2C", "Healthcare", "Cloud Kitchens", "Home Services",
];

const IndiaHome = () => {
  return (
    <div className="india-theme min-h-screen bg-background text-foreground">
      <Helmet>
        <title>$1 Franchise Lead Generation in USA | FranchiseLeadsPro</title>
        <meta name="description" content="America's franchise growth partner. LinkedIn, social media and website-driven franchise lead generation for U.S. franchisors. Book a free consultation." />
        <link rel="canonical" href="https://www.franchiseleadspro.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "FranchiseLeadsPro",
            "areaServed": "US",
            "url": "https://www.franchiseleadspro.com/",
            "slogan": "$1 Franchise Lead Generation",
            "serviceType": [
              "Franchise Lead Generation in USA",
              "LinkedIn Marketing for U.S. Franchisors",
              "Franchise Website Development USA",
              "Franchise Consulting USA",
            ],
          })}
        </script>
      </Helmet>

      <IndiaNav />

      {/* HERO SLIDER — 4 trust-building slides */}
      <HeroSlider />


      {/* CATEGORY BAR */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <span className="font-display text-base text-primary">We grow franchises in:</span>
          {categories.map((c) => (
            <span key={c} className="whitespace-nowrap">{c}</span>
          ))}
        </div>
      </section>

      {/* FEATURED FRANCHISE BRANDS — Franchise India inspired */}
      <FeaturedBrands />

      {/* SOLUTIONS — full-width section */}
      <section id="solutions" className="py-24 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Solutions</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-foreground mb-5">
              Everything a U.S. franchisor needs to attract <em>serious investors.</em>
            </h2>
            <p className="text-lg text-muted-foreground">
              One USA-focused team, six growth engines — engineered to put your franchise in front of buyers who can actually write the check.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-md overflow-hidden border border-border">
            {solutions.map((s) => (
              <div key={s.title} className="bg-background p-8 sm:p-10 group hover:bg-secondary/50 transition-colors">
                <div className="w-12 h-12 rounded-md bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US — dark band */}
      <section className="py-24 sm:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Why FranchiseIndiaPro</p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6">
                A franchise consulting partner that <em className="text-accent">actually understands India.</em>
              </h2>
              <p className="text-primary-foreground/75 text-lg leading-relaxed">
                We are not a generic digital agency moonlighting in franchise. Every team member is trained in Indian franchise dynamics — unit economics, FDD, royalty structures, regional buyer behaviour, and the realities of selling franchise opportunities across Bharat.
              </p>
              <Button
                className="mt-8 bg-accent text-primary hover:bg-accent/90 px-7 h-12 rounded-md"
                onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
              >
                Talk to an India Strategist <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-primary-foreground/10 rounded-md overflow-hidden">
              {why.map((w) => (
                <div key={w.title} className="bg-primary p-7">
                  <w.icon className="w-6 h-6 text-accent mb-4" />
                  <h3 className="font-display text-xl mb-2">{w.title}</h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS — full-width */}
      <section className="py-24 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">How we work</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-foreground">
              From discovery call to <em>qualified investor</em> — in four moves.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="relative bg-card border border-border rounded-md p-7 shadow-card">
                <div className="font-display text-5xl text-accent mb-4">{s.n}</div>
                <h3 className="font-display text-xl text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ₹1 / $1 QUALIFIED FRANCHISE LEADS */}
      <section id="leads" className="relative py-24 sm:py-28 bg-secondary/40 border-y border-border overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Pay-per-Lead Offer</p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-foreground mb-5">
                Qualified franchise leads for <em className="text-primary">just ₹1 / $1.</em>
              </h2>
              <p className="text-lg text-muted-foreground mb-7">
                No retainers. No bloated agency fees. Pay only for pre-screened, intent-verified franchise investor leads — delivered straight to your CRM and WhatsApp.
              </p>

              <ul className="space-y-3 mb-9">
                {[
                  "Pre-qualified investor — budget & timeline verified",
                  "Right category fit for your franchise model",
                  "Delivered live on WhatsApp + CRM",
                  "No setup cost. No long-term lock-in.",
                  "Replacement guarantee on unqualified leads",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-7 rounded-md"
                  onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
                >
                  Claim ₹1 / $1 Leads <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link to="/contact">
                  <Button variant="outline" className="h-12 px-7 rounded-md border-primary/30 text-primary hover:bg-primary/5">
                    Talk to a Strategist
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <Card className="border-2 border-primary bg-card rounded-md shadow-elegant relative overflow-hidden">
                <div className="absolute top-0 right-0 px-3 py-1 bg-accent text-primary text-[10px] uppercase tracking-[0.2em] font-semibold">
                  Founder Favourite
                </div>
                <CardContent className="p-9">
                  <div className="flex items-center gap-2 mb-2 text-accent">
                    <Award className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-[0.2em]">Pay-Per-Lead</span>
                  </div>
                  <h3 className="font-display text-3xl text-foreground mb-3">₹1 / $1 Qualified Franchise Leads</h3>
                  <p className="text-muted-foreground mb-7">
                    Brutally cost-efficient franchise lead generation for India & USA franchisors. You pay only when a verified investor lands in your inbox.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-5 rounded-md bg-primary/5 border border-primary/10">
                      <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">India</p>
                      <p className="font-display text-3xl text-foreground">₹1<span className="text-sm text-muted-foreground"> / lead</span></p>
                    </div>
                    <div className="p-5 rounded-md bg-primary/5 border border-primary/10">
                      <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">USA</p>
                      <p className="font-display text-3xl text-foreground">$1<span className="text-sm text-muted-foreground"> / lead</span></p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {[
                      "LinkedIn + Meta + Google sourcing",
                      "Manually qualified by our India pod",
                      "Delivered on WhatsApp + CRM in real time",
                      "Weekly performance reporting",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-3 text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 rounded-md">
                      Get My First Batch of Leads <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — restored video reviews (Shawn Gurn, Jonathan Morgan, etc.) */}
      <TestimonialsSection />




      {/* FAQ */}
      <section className="py-24 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">FAQ</p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-foreground mb-5">
                Questions Indian franchisors <em>actually ask us.</em>
              </h2>
              <p className="text-muted-foreground text-lg">
                Still unsure if we are the right partner? Book a free 30-minute consultation and we will give you a candid view of your franchise growth funnel.
              </p>
              <Button
                className="mt-7 bg-primary hover:bg-primary/90 text-primary-foreground h-12 rounded-md"
                onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
              >
                Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="lg:col-span-7">
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-md bg-card px-5">
                    <AccordionTrigger className="text-left font-display text-lg text-foreground hover:no-underline py-5">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Ready when you are</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-5">
              Let's put your franchise in front of <em className="text-accent">India's serious investors.</em>
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-9">
              30 minutes. Zero obligation. A direct conversation with an India franchise strategist — not a sales bot.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-accent text-primary hover:bg-accent/90 px-8 h-14 text-base rounded-md"
                onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
              >
                Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 h-14 text-base rounded-md">
                  Send Enquiry
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <IndiaFooter />
    </div>
  );
};

export default IndiaHome;
