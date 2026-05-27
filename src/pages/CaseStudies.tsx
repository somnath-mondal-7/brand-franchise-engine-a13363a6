import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Quote } from "lucide-react";
import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";

const partnerLogos = [
  { name: "McDonald's", domain: "mcdonalds.com" },
  { name: "Lenskart", domain: "lenskart.com" },
  { name: "Amul", domain: "amul.com" },
  { name: "Domino's", domain: "dominos.com" },
  { name: "Tim Hortons", domain: "timhortons.com" },
  { name: "Subway", domain: "subway.com" },
  { name: "Haldiram's", domain: "haldirams.com" },
  { name: "KFC", domain: "kfc.com" },
];

const featuredClients = [
  {
    name: "Shawn Gurn",
    role: "HOF Franchise Consulting — IFPG Member",
    videoSrc: "/videos/shawn-gurn-review.mp4",
    quote:
      "FranchiseLeadsPro built our investor inbound funnel from the ground up. The quality of qualified franchise enquiries we receive every week speaks for itself.",
  },
  {
    name: "Jonathan Morgan",
    role: "CEO, NextFranch Corp",
    videoSrc: "/videos/jonathan-morgan-review.mp4",
    quote:
      "They actually understand franchise sales. Our LinkedIn outreach now puts cheque-ready investors on our calendar — not curious browsers.",
  },
  {
    name: "Jesica Thompson",
    role: "Franchise Solutions Inc.",
    videoSrc: "/videos/jesica-thompson-review.mp4",
    quote:
      "From paid ads to CRM automation to a high-converting website, our growth engine finally runs on autopilot.",
  },
];

const textTestimonials = [
  {
    name: "Robert Williams",
    role: "Sr. Franchise Consultant, GrowthPath Advisory",
    quote:
      "FranchiseLeadsPro completely transformed our lead pipeline. The franchise enquiries we now book in a week used to take us a full quarter.",
  },
  {
    name: "Priya Sharma",
    role: "Founder, Cloud Kitchen Brand (India)",
    quote:
      "They speak franchise. Unit economics, FDD, royalty conversations — they got it on day one and our investor calls have never looked sharper.",
  },
];

const CaseStudies = () => {
  return (
    <div className="india-theme min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Our Clients | FranchiseLeadsPro</title>
        <meta name="description" content="Franchise brands and consultants who trust FranchiseLeadsPro to run their investor lead generation, brand and franchise marketing engine." />
        <link rel="canonical" href="https://www.franchiseleadspro.com/case-studies" />
      </Helmet>

      <IndiaNav />

      {/* HERO */}
      <section className="relative bg-primary text-primary-foreground pt-36 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(60% 60% at 70% 40%, hsl(48 100% 50% / 0.18) 0%, transparent 70%)" }}
        />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/5 border border-primary-foreground/15 text-[11px] uppercase tracking-[0.25em] text-accent mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Our Clients
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.02] mb-6">
              The Franchise Brands <em>That Trust Us.</em>
            </h1>
            <p className="text-lg text-primary-foreground/75 max-w-2xl leading-relaxed">
              From legacy franchise systems to ambitious young franchisors — meet the founders,
              consultants and franchise leaders who run their growth with FranchiseLeadsPro.
            </p>
          </div>
        </div>
      </section>

      {/* LOGO WALL */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-accent mb-10">
            ✦ A Legacy of Excellence in Franchise Marketing ✦
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {partnerLogos.map((b) => (
              <div key={b.name} className="flex items-center justify-center h-16 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all">
                <img
                  src={`https://icons.duckduckgo.com/ip3/${b.domain}.ico`}
                  alt={`${b.name} logo`}
                  loading="lazy"
                  className="max-h-12 max-w-[100%] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CLIENT VIDEOS */}
      <section className="py-24 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">In their own words</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-foreground">
              Real franchise leaders. <em>Real conversations.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {featuredClients.map((c) => (
              <div
                key={c.name}
                className="group rounded-2xl border border-border bg-card overflow-hidden shadow-card hover:shadow-elegant transition-all"
              >
                <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src={c.videoSrc} type="video/mp4" />
                  </video>
                </div>
                <div className="p-6">
                  <Quote className="w-5 h-5 text-accent mb-3" />
                  <p className="text-sm text-muted-foreground italic leading-relaxed mb-4">
                    "{c.quote}"
                  </p>
                  <p className="font-display text-base text-foreground">{c.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{c.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEXT TESTIMONIALS */}
      <section className="py-24 sm:py-28 bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-7 max-w-5xl mx-auto">
            {textTestimonials.map((t) => (
              <div key={t.name} className="bg-card border border-border rounded-2xl p-8">
                <Quote className="w-6 h-6 text-accent mb-4" />
                <p className="font-display text-xl text-foreground leading-snug mb-6">
                  "{t.quote}"
                </p>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6">
            Ready to be our <em>next success story?</em>
          </h2>
          <p className="text-primary-foreground/75 text-lg max-w-2xl mx-auto mb-9">
            30 minutes. Zero obligation. A direct conversation with a franchise strategist.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8 rounded-full font-semibold"
              onClick={() => window.open("https://calendly.com/lets-build-your-brand", "_blank")}
            >
              Book Free Consultation <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="h-14 px-8 rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Send Enquiry
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <IndiaFooter />
    </div>
  );
};

export default CaseStudies;
