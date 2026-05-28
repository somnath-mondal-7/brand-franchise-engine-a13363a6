import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowUpRight, Check } from "lucide-react";
import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";
import { Button } from "@/components/ui/button";
import { SERVICES } from "./FranchiseMarketing";

type Detail = {
  intro: string;
  deliverables: string[];
  process: { step: string; desc: string }[];
  outcome: string;
};

const DETAILS: Record<string, Detail> = {
  "franchise-strategy": {
    intro: "We design the franchise model from first principles — unit economics, territory rights, fees, and the value proposition an investor will actually pay for.",
    deliverables: ["Franchise model & fee structure", "Unit economics workbook", "Territory & rollout map", "Investor pitch deck", "Brand positioning narrative", "Go-to-market plan"],
    process: [
      { step: "Discovery", desc: "Deep dive into business, margins and ambition." },
      { step: "Modeling", desc: "Define formats, fees, royalties and territories." },
      { step: "Validation", desc: "Stress-test economics against real market data." },
      { step: "Activation", desc: "Hand over a launch-ready strategy package." },
    ],
    outcome: "A franchise model investors take seriously and a team that knows exactly how to sell it.",
  },
  "franchise-documentation": {
    intro: "Every document a franchise sale needs — drafted, reviewed and ready for investor scrutiny.",
    deliverables: ["Franchise Agreement", "Disclosure Document (FDD-grade)", "Operations Manual", "Training & SOP playbook", "Brand standards guide", "Pre-opening checklist"],
    process: [
      { step: "Audit", desc: "Map existing IP, SOPs and contracts." },
      { step: "Drafting", desc: "Build documents to international standards." },
      { step: "Legal Review", desc: "Coordinate with empaneled franchise counsel." },
      { step: "Handover", desc: "Editable masters + version control." },
    ],
    outcome: "A document set that protects you, signals professionalism and shortens the investor decision cycle.",
  },
  "linkedin-marketing": {
    intro: "We turn LinkedIn into a working investor pipeline — founder authority, targeted outreach and conversations that convert.",
    deliverables: ["Founder profile rebuild", "Sales Navigator search systems", "Outreach sequences", "Weekly thought leadership posts", "Lead qualification tracker", "Reply-to-meeting playbook"],
    process: [
      { step: "Positioning", desc: "Rewrite the founder narrative for investor signal." },
      { step: "Audience", desc: "Build searchable lists of qualified prospects." },
      { step: "Outreach", desc: "Run personalized, high-response sequences." },
      { step: "Convert", desc: "Move replies into discovery calls." },
    ],
    outcome: "A predictable flow of investor conversations, owned by you — not rented from an ad platform.",
  },
  "performance-marketing": {
    intro: "Paid acquisition for franchise inquiries — engineered, measured and tied to qualified pipeline, not vanity clicks.",
    deliverables: ["Meta & Google ad systems", "LinkedIn lead-gen campaigns", "Landing pages built to convert", "Lead scoring & routing", "CRM and pixel setup", "Weekly performance reviews"],
    process: [
      { step: "Audit", desc: "Inspect funnel, tracking and historical spend." },
      { step: "Build", desc: "Set up campaigns, creative and landing systems." },
      { step: "Test", desc: "Run controlled tests across audiences and offers." },
      { step: "Scale", desc: "Pour budget into what is working, kill what is not." },
    ],
    outcome: "An acquisition engine that produces investor-grade leads at a cost you can confidently scale.",
  },
  "franchise-website": {
    intro: "Investor-facing websites built for one job — turn visitors into qualified franchise inquiries.",
    deliverables: ["Custom franchise portal design", "Territory & investment pages", "Lead capture forms & CRM hooks", "Mobile-first responsive build", "On-page SEO foundation", "CMS for in-house updates"],
    process: [
      { step: "Strategy", desc: "Map investor journey and conversion goals." },
      { step: "Design", desc: "Brand-true, conversion-focused interface." },
      { step: "Build", desc: "Performance-first development." },
      { step: "Launch", desc: "Go live with analytics, tracking and handover." },
    ],
    outcome: "A website that earns trust, ranks on search and quietly fills your inbox with qualified inquiries.",
  },
  "franchise-recruitment": {
    intro: "We take qualified inquiries the rest of the way — from first call to signed franchisee and opened unit.",
    deliverables: ["Investor qualification calls", "Discovery day playbook", "Application & financial review", "Site selection support", "Agreement execution coordination", "Onboarding handoff"],
    process: [
      { step: "Qualify", desc: "Screen leads against financial and fit criteria." },
      { step: "Discovery", desc: "Run structured discovery days and Q&A." },
      { step: "Approve", desc: "Validate fit, financials and territory." },
      { step: "Onboard", desc: "Coordinate signing and pre-opening setup." },
    ],
    outcome: "A franchisee roster you actually wanted — selected, signed and ready to open.",
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  const detail = slug ? DETAILS[slug] : undefined;
  if (!service || !detail) return <Navigate to="/franchise-marketing" replace />;
  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{service.title} | FranchiseLeadsPro</title>
        <meta name="description" content={service.summary} />
        <link rel="canonical" href={`https://www.franchiseleadspro.com/franchise-marketing/${service.slug}`} />
      </Helmet>
      <IndiaNav />

      <section className="pt-40 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/franchise-marketing" className="text-accent text-sm font-medium uppercase tracking-[0.2em] hover:opacity-80">← Franchise Marketing</Link>
          <div className="max-w-4xl mt-6">
            <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center mb-6">
              <Icon className="w-7 h-7 text-accent" />
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] mb-6">{service.title}</h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">{detail.intro}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 max-w-6xl">
          <div>
            <p className="uppercase tracking-[0.25em] text-accent text-xs mb-4">What you get</p>
            <h2 className="font-display text-3xl md:text-4xl mb-8 text-foreground">Deliverables</h2>
            <ul className="space-y-4">
              {detail.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-foreground leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="uppercase tracking-[0.25em] text-accent text-xs mb-4">How we work</p>
            <h2 className="font-display text-3xl md:text-4xl mb-8 text-foreground">Process</h2>
            <div className="space-y-5">
              {detail.process.map((p, i) => (
                <div key={p.step} className="bg-muted/40 border border-border rounded-xl p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">Step {i + 1}</p>
                  <h3 className="font-display text-xl mb-2 text-foreground">{p.step}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="uppercase tracking-[0.25em] text-accent text-xs mb-4">Outcome</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground leading-snug mb-10">{detail.outcome}</h2>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 px-7 font-semibold" onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}>
            Talk to a Consultant <ArrowUpRight className="ml-1.5 h-4 w-4" />
          </Button>
        </div>
      </section>

      <IndiaFooter />
    </div>
  );
};

export default ServiceDetail;
