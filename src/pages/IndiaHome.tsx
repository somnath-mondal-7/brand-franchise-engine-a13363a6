import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  ArrowRight, CheckCircle2, Linkedin, Share2, Globe, Bot, Crown, Users,
  Building2, IndianRupee, ShieldCheck, Sparkles, TrendingUp, Award,
} from "lucide-react";
import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";
import FranchiseSearchHero from "@/components/india/FranchiseSearchHero";

const solutions = [
  { icon: Linkedin, title: "LinkedIn Investor Outreach", desc: "Hand-built outreach to HNI investors, family offices, and serious franchise buyers across India." },
  { icon: Share2, title: "Performance Social Ads", desc: "Meta, Instagram & YouTube campaigns tuned for the Indian investor — Hindi + English creatives." },
  { icon: Globe, title: "Franchise Website Build", desc: "Mobile-first websites with WhatsApp lead capture, regional language support and investor portals." },
  { icon: Bot, title: "AI + WhatsApp Automation", desc: "AI follow-ups and WhatsApp drip sequences so no investor enquiry goes cold." },
  { icon: Crown, title: "Founder Authority Building", desc: "Position the founder as the face of the brand on LinkedIn, podcasts and franchise media." },
  { icon: Users, title: "Dedicated India Account Pod", desc: "A named manager, strategist and creative team — working in IST, on Indian franchise context." },
];

const why = [
  { icon: IndianRupee, title: "India-first pricing", desc: "Built for Indian franchisors — INR-friendly plans, no inflated USD packages." },
  { icon: ShieldCheck, title: "Franchise specialists only", desc: "We work with franchise brands. Not real estate, not e-com, not SaaS." },
  { icon: Sparkles, title: "Premium creative", desc: "Editorial-grade brand decks, investor pitch sites, and ad creatives that look the part." },
  { icon: TrendingUp, title: "Built for serious investors", desc: "We attract qualified franchise buyers — not curious browsers." },
];

const steps = [
  { n: "01", title: "Discovery", desc: "We study your franchise model, ticket size, ideal franchisee, and Indian regional strategy." },
  { n: "02", title: "Brand & Funnel", desc: "Brand polish, investor landing page, WhatsApp + CRM funnel, and creative system." },
  { n: "03", title: "Multi-Channel Outreach", desc: "LinkedIn outreach, performance ads, and content engine go live across India." },
  { n: "04", title: "Qualified Investor Calls", desc: "Pre-screened franchise buyers booked directly on your calendar." },
];

const faqs = [
  { q: "What does ₹1 Franchise Lead Generation actually mean?", a: "It is our promise of brutally cost-efficient lead generation for Indian franchisors. Through LinkedIn, performance ads and authority content we drive your cost per qualified investor enquiry down to a level that feels almost free — so your franchise sales math finally works." },
  { q: "Which Indian franchise categories do you work with?", a: "Food & beverage, education, wellness, retail, services, fitness, salons, healthcare and emerging D2C brands going the franchise route. If you have a working unit economics and a franchise document, we can run growth for you." },
  { q: "Do you work with new franchisors who have just 1–2 units?", a: "Yes — provided the unit is profitable and you have FDD / franchise agreement ready. We help young franchisors look as credible as legacy brands from day one." },
  { q: "Do you handle Hindi creatives and regional targeting?", a: "Absolutely. We build creatives in Hindi, English and major regional languages, and run state-wise targeting (Maharashtra, Karnataka, Tamil Nadu, Telangana, UP, Delhi NCR, Gujarat and more)." },
  { q: "Where are leads delivered?", a: "Directly into your CRM and on WhatsApp, with the qualification notes from our team. You also get weekly reports and a dedicated India success manager." },
];

const categories = [
  "Food & Beverage", "Education & EdTech", "Wellness & Salon", "Fitness & Gym",
  "Retail & D2C", "Healthcare", "Cloud Kitchens", "Coaching & Tuition",
];

const IndiaHome = () => {
  return (
    <div className="india-theme min-h-screen bg-background text-foreground">
      <Helmet>
        <title>₹1 Franchise Lead Generation in India | FranchiseIndiaPro</title>
        <meta name="description" content="India's franchise growth partner. LinkedIn, social media and website-driven franchise lead generation for Indian franchisors. Book a free consultation." />
        <link rel="canonical" href="https://www.franchiseleadspro.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "FranchiseIndiaPro by FranchiseLeadsPro",
            "areaServed": "IN",
            "url": "https://www.franchiseleadspro.com/",
            "slogan": "₹1 Franchise Lead Generation",
            "serviceType": [
              "Franchise Lead Generation in India",
              "LinkedIn Marketing for Indian Franchisors",
              "Franchise Website Development India",
              "Franchise Consulting India",
            ],
          })}
        </script>
      </Helmet>

      <IndiaNav />

      {/* HERO — Franchise India inspired */}
      <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 overflow-hidden bg-gradient-to-br from-primary/95 via-primary to-primary-dark text-primary-foreground">
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(hsl(var(--accent)) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-[11px] uppercase tracking-[0.2em] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              India's Franchise Growth Partner
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-4">
              Find your next <span className="text-accent">franchise opportunity</span> across India.
            </h1>
            <p className="text-base sm:text-lg text-primary-foreground/85 max-w-2xl mb-2">
              Search verified Indian franchise brands by category, location, investment range or brand name — and connect with our consulting team.
            </p>
            <p className="text-sm text-accent font-semibold tracking-wide mb-7">
              ₹1 Franchise Lead Generation — built for Indian franchisors.
            </p>
          </div>

          {/* Search filter card */}
          <div className="max-w-5xl">
            <FranchiseSearchHero />
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.18em] text-primary-foreground/70">
            <span>Trusted by emerging & legacy franchise brands</span>
            <span className="hidden sm:inline">•</span>
            <span>Pan India coverage</span>
            <span className="hidden sm:inline">•</span>
            <span>F&B · Education · Wellness · Retail · Healthcare</span>
          </div>
        </div>
      </section>


      {/* CATEGORY BAR */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <span className="font-display text-base text-primary">We grow franchises in:</span>
          {categories.map((c) => (
            <span key={c} className="whitespace-nowrap">{c}</span>
          ))}
        </div>
      </section>

      {/* SOLUTIONS — full-width section */}
      <section id="solutions" className="py-24 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Solutions</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-foreground mb-5">
              Everything an Indian franchisor needs to attract <em>serious investors.</em>
            </h2>
            <p className="text-lg text-muted-foreground">
              One India-focused team, six growth engines — engineered to put your franchise in front of buyers who can actually write the cheque.
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

      {/* PRICING */}
      <section id="pricing" className="py-24 sm:py-28 bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Pricing</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-foreground mb-5">
              Simple plans. <em>Premium delivery.</em>
            </h2>
            <p className="text-lg text-muted-foreground">
              Pick a plan and our India pod takes over — strategy, creative, outreach and reporting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Growth */}
            <Card className="border border-border bg-card rounded-md shadow-card">
              <CardContent className="p-9">
                <div className="flex items-center gap-2 mb-2 text-accent">
                  <Building2 className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-[0.2em]">India Growth</span>
                </div>
                <h3 className="font-display text-3xl text-foreground mb-4">Franchise Growth Plan</h3>
                <p className="text-muted-foreground mb-6">For emerging franchisors ready to scale enquiries across India.</p>
                <div className="mb-7">
                  <span className="font-display text-2xl text-foreground">Custom INR Plan</span>
                  <p className="text-sm text-muted-foreground mt-1">Tailored on your category, ticket size and city focus.</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "LinkedIn investor outreach",
                    "Meta & Google performance ads",
                    "WhatsApp + CRM lead funnel",
                    "Founder authority content",
                    "Weekly reports & strategy call",
                    "Dedicated India account pod",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 rounded-md">
                    Request a Proposal <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Premium */}
            <Card className="border-2 border-primary bg-card rounded-md shadow-elegant relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-accent text-primary text-[10px] uppercase tracking-[0.2em] font-semibold">
                Most chosen
              </div>
              <CardContent className="p-9">
                <div className="flex items-center gap-2 mb-2 text-accent">
                  <Award className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-[0.2em]">Founder Pod</span>
                </div>
                <h3 className="font-display text-3xl text-foreground mb-4">Founder-Led Growth Pod</h3>
                <p className="text-muted-foreground mb-6">For franchisors who want their brand and founder to lead the category in India.</p>
                <div className="mb-7">
                  <span className="font-display text-2xl text-foreground">Bespoke Engagement</span>
                  <p className="text-sm text-muted-foreground mt-1">Includes website rebuild, brand polish and PR.</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Everything in Growth Plan",
                    "Franchise website rebuild",
                    "Brand & investor deck refresh",
                    "Podcast + media positioning",
                    "Senior strategist on weekly calls",
                    "Quarterly on-site / virtual review",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 rounded-md">
                    Talk to Founder Team <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            All plans honour our <span className="text-primary font-medium">₹1 Franchise Lead Generation</span> promise — relentless cost-efficiency on every qualified investor enquiry.
          </p>
        </div>
      </section>

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
