import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowUpRight, FileText, Linkedin, Megaphone, Globe, Users, Compass } from "lucide-react";
import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";
import { Button } from "@/components/ui/button";

export const SERVICES = [
  { slug: "franchise-strategy", title: "Franchise Strategy", icon: Compass, tagline: "Blueprint for scalable franchise expansion.", summary: "Positioning, unit economics, territory mapping and the franchise model that fits your brand." },
  { slug: "franchise-documentation", title: "Franchise Documentation", icon: FileText, tagline: "Agreements, FDD-grade manuals and operations playbooks.", summary: "Legally sound franchise agreements, disclosure documents and operations manuals built for India and international markets." },
  { slug: "linkedin-marketing", title: "LinkedIn Marketing", icon: Linkedin, tagline: "Reach decision-grade investors directly.", summary: "Founder-led LinkedIn campaigns, Sales Navigator outreach and thought leadership that gets investor replies." },
  { slug: "performance-marketing", title: "Performance Marketing", icon: Megaphone, tagline: "Paid acquisition tuned for franchise inquiries.", summary: "Meta, Google and LinkedIn ad systems engineered for qualified franchise lead capture, not just clicks." },
  { slug: "franchise-website", title: "Franchise Website", icon: Globe, tagline: "Investor-ready websites that convert.", summary: "Conversion-first franchise portals with territory pages, lead capture and full CMS control." },
  { slug: "franchise-recruitment", title: "Franchise Recruitment", icon: Users, tagline: "Investor screening to signed franchisee.", summary: "End-to-end recruitment — qualification calls, discovery days, paperwork and onboarding handoff." },
];

const FranchiseMarketing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Franchise Marketing Services | FranchiseLeadsPro</title>
        <meta name="description" content="End-to-end franchise marketing — strategy, documentation, LinkedIn, performance ads, websites and recruitment." />
        <link rel="canonical" href="https://www.franchiseleadspro.com/franchise-marketing" />
      </Helmet>
      <IndiaNav />

      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_30%_30%,white,transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl">
            <p className="uppercase tracking-[0.25em] text-accent text-xs mb-5">Franchise Marketing Hub</p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-8">
              The full franchise growth <em>engine</em>, in one place.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
              Six disciplines, one mandate — turn your brand into a franchise that investors trust, find and sign.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full h-12 px-7 font-semibold" onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}>
                Book a Strategy Call <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </Button>
              <Link to="/franchise-flow">
                <Button variant="outline" className="rounded-full h-12 px-7 font-semibold bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  See franchiseFLOW
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="uppercase tracking-[0.25em] text-accent text-xs mb-4">Capabilities</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
              A connected stack — not <em>scattered</em> agencies.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <Link key={s.slug} to={`/franchise-marketing/${s.slug}`} className="group bg-card border border-border rounded-2xl p-8 hover:border-accent hover:shadow-elegant transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-accent/15 transition-colors">
                    <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-accent font-medium mb-4">{s.tagline}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">{s.summary}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                    Explore service <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="font-display text-4xl md:text-5xl mb-6">Ready to build your franchise <em>engine</em>?</h2>
          <p className="text-primary-foreground/80 text-lg mb-10">One conversation. A clear roadmap. No commitments.</p>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full h-12 px-8 font-semibold" onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}>
            Schedule a Consultation <ArrowUpRight className="ml-1.5 h-4 w-4" />
          </Button>
        </div>
      </section>

      <IndiaFooter />
    </div>
  );
};

export default FranchiseMarketing;
