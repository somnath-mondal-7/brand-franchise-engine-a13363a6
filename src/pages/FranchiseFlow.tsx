import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowUpRight, Search, FileCheck, Megaphone, Handshake, Rocket } from "lucide-react";
import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";
import { Button } from "@/components/ui/button";

const PHASES = [
  { icon: Search, title: "Discover", desc: "We audit your brand, model and franchise readiness — and tell you the truth." },
  { icon: FileCheck, title: "Document", desc: "Agreements, manuals and disclosure-grade paperwork built for investor scrutiny." },
  { icon: Megaphone, title: "Demand", desc: "LinkedIn, paid ads and content engineered for qualified franchise inquiries." },
  { icon: Handshake, title: "Decide", desc: "We qualify, discover and approve the franchisees worth signing." },
  { icon: Rocket, title: "Deploy", desc: "Onboarding, site selection and pre-opening — handed off cleanly." },
];

const FranchiseFlow = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>franchiseFLOW | The End-to-End Franchise Growth System</title>
        <meta name="description" content="franchiseFLOW is our five-phase system — discover, document, demand, decide and deploy — for taking brands from concept to signed franchisees." />
        <link rel="canonical" href="https://www.franchiseleadspro.com/franchise-flow" />
      </Helmet>
      <IndiaNav />

      <section className="pt-40 pb-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-accent text-xs mb-5">The System</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-8">
            franchise<em>FLOW</em>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
            One framework. Five phases. A predictable path from "we should franchise" to signed, opened and operating units.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="space-y-6">
            {PHASES.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="group grid md:grid-cols-[120px_1fr] gap-6 md:gap-10 items-start border border-border rounded-2xl p-8 hover:border-accent hover:shadow-elegant transition-all bg-card">
                  <div className="flex items-center gap-4 md:flex-col md:items-start">
                    <span className="font-display text-5xl text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl text-foreground mb-3">{p.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">Start your <em>FLOW</em>.</h2>
          <p className="text-primary-foreground/80 text-lg mb-10">Book a discovery call. We will map your phase one in under 30 minutes.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full h-12 px-7 font-semibold" onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}>
              Book a Call <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </Button>
            <Link to="/franchise-marketing">
              <Button variant="outline" className="rounded-full h-12 px-7 font-semibold bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Browse Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <IndiaFooter />
    </div>
  );
};

export default FranchiseFlow;
