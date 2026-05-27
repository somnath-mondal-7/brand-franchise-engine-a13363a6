import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Compass, Handshake, Sparkles, Globe2 } from "lucide-react";
import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";

const pillars = [
  { icon: Compass, title: "Franchise-only focus", desc: "We work exclusively with franchise brands. Not real estate. Not e-commerce. Not generic SaaS." },
  { icon: Handshake, title: "Founder-led service", desc: "Senior franchise strategists run your account — not junior media buyers learning on your budget." },
  { icon: Sparkles, title: "Premium creative bar", desc: "Editorial-grade pitch decks, investor sites, and ad creatives that look as serious as your franchise model." },
  { icon: Globe2, title: "India + USA fluency", desc: "Native pods in both markets — Hindi, English, regional targeting, and US franchise-buyer psychology." },
];

const About = () => {
  return (
    <div className="india-theme min-h-screen bg-background text-foreground">
      <Helmet>
        <title>About FranchiseLeadsPro | Franchise Growth Partner</title>
        <meta name="description" content="We are FranchiseLeadsPro — a franchise-only growth partner helping Indian and American franchisors attract qualified investors, build investor-grade brand assets and scale faster." />
        <link rel="canonical" href="https://www.franchiseleadspro.com/about" />
      </Helmet>

      <IndiaNav />

      {/* HERO */}
      <section className="relative bg-primary text-primary-foreground pt-36 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(60% 60% at 30% 40%, hsl(40 65% 52% / 0.18) 0%, transparent 70%)" }}
        />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/5 border border-primary-foreground/15 text-[11px] uppercase tracking-[0.25em] text-accent mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" /> About FranchiseLeadsPro
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.02] mb-6">
              We Help Franchise Brands <em>Scale.</em>
            </h1>
            <p className="text-lg text-primary-foreground/75 max-w-2xl leading-relaxed">
              FranchiseLeadsPro is a franchise-only growth partner. We design franchise models,
              build investor-grade brand assets, run multi-channel investor outreach, and put
              qualified franchise buyers directly on your calendar — across India and the USA.
            </p>
            <Button
              className="mt-9 bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8 rounded-full font-semibold"
              onClick={() => window.open("https://calendly.com/lets-build-your-brand", "_blank")}
            >
              Talk With A Franchise Consultant <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Our story</p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-foreground">
                Built from inside the <em>franchise industry.</em>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                FranchiseLeadsPro began because most marketing agencies treat franchise brands like
                any other client — running generic ads, sending cold lists and hoping something
                sticks. Franchise sales does not work that way. It is a long, trust-led process with
                six and seven-figure decisions on the other side.
              </p>
              <p>
                So we built a different kind of agency. Every team member is trained on franchise
                unit economics, FDD, royalty structures, regional buyer behaviour and the realities
                of recruiting franchisees in both India and the USA.
              </p>
              <p>
                Today, founders across food &amp; beverage, education, wellness, retail and services
                trust us to run their franchise growth — quietly, professionally and without the
                inflated retainer fees of legacy consultancies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS — dark band */}
      <section className="py-24 sm:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">What we stand for</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
              Four principles that shape <em>every engagement.</em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10 rounded-md overflow-hidden">
            {pillars.map((p) => (
              <div key={p.title} className="bg-primary p-8">
                <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-5">
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl mb-2">{p.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-5">Our mission</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-foreground mb-7">
            To make franchise growth <em>boring, predictable and professional.</em>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            No more chasing tyre-kickers on Instagram. No more bloated retainers. Just franchise
            brands, qualified investors, and the systems that bring them together.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-7 rounded-full font-semibold"
              onClick={() => window.open("https://calendly.com/lets-build-your-brand", "_blank")}
            >
              Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link to="/case-studies">
              <Button variant="outline" className="h-12 px-7 rounded-full border-primary/20 text-primary hover:bg-primary/5">
                See Our Clients
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <IndiaFooter />
    </div>
  );
};

export default About;
