import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2, Quote, Calendar, Globe, Target, Megaphone } from "lucide-react";
import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";
import jesicaThompsonVideo from "@/assets/videos/jesica-thompson-review.mp4.asset.json";

const servicesDelivered = [
  "Paid Advertising (Meta + Google)",
  "CRM Setup & Management",
  "Website Inbound Lead Routing",
  "Investor Qualification Workflow",
  "Funnel Copy & Creative",
  "Weekly Reporting & Strategy",
];

const timeline = [
  {
    phase: "Discovery",
    title: "Understanding the franchise portfolio",
    body:
      "We sat down with Jesica to map every brand she represents at Franchise Solutions Inc., the typical investor profile for each, and the friction points in her existing intake process.",
  },
  {
    phase: "Build",
    title: "Launching paid + inbound engine",
    body:
      "We rebuilt her advertising creative around investor intent, structured a CRM to route enquiries from our network of franchise sites, and gave her a single dashboard to manage everything.",
  },
  {
    phase: "Scale",
    title: "Steady, qualified inbound — every week",
    body:
      "Once the engine was live, our role shifted to optimisation — sharper targeting, better qualification, faster follow-up — so Jesica spends her time on conversations that actually close.",
  },
];

const outcomes = [
  { icon: Target, label: "Investor enquiries", body: "Consistent inbound from serious franchise buyers — not curious browsers." },
  { icon: Megaphone, label: "Paid ad efficiency", body: "Sharper creative and tighter audiences mean every dollar works harder." },
  { icon: Globe, label: "Website conversions", body: "Inbound leads from our franchise network flow straight into her CRM." },
  { icon: CheckCircle2, label: "Closed placements", body: "A steady cadence of qualified discovery calls that convert to placements." },
];

const CaseStudies = () => {
  return (
    <div className="india-theme min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Case Studies | FranchiseLeadsPro</title>
        <meta
          name="description"
          content="Real franchise consulting and franchisor case studies — how FranchiseLeadsPro builds investor lead engines that actually convert."
        />
        <link rel="canonical" href="https://www.franchiseleadspro.com/case-studies" />
        <meta property="og:title" content="Case Studies | Franchise Lead Generation Success Stories" />
        <meta
          property="og:description"
          content="See how franchise consultants run their investor lead pipeline with FranchiseLeadsPro — paid ads, CRM, website inbound, and qualification done right."
        />
        <meta property="og:image" content="https://www.franchiseleadspro.com/og-image.png" />
        <meta property="og:url" content="https://www.franchiseleadspro.com/case-studies" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <IndiaNav />

      {/* HERO */}
      <section className="relative bg-primary text-primary-foreground pt-36 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(60% 60% at 70% 40%, hsl(40 65% 52% / 0.18) 0%, transparent 70%)" }}
        />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/5 border border-primary-foreground/15 text-[11px] uppercase tracking-[0.25em] text-accent mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Case Studies
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.02] mb-6">
              Real Clients. <em>Real Results.</em>
            </h1>
            <p className="text-lg text-primary-foreground/75 max-w-2xl leading-relaxed">
              A closer look at how franchise consultants and franchisors run their investor lead pipeline
              with FranchiseLeadsPro — the engine, the process, and the outcome.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDY — Jesica Thompson */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <article className="lg:col-span-2 space-y-12">
              <header>
                <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">Featured Case Study</p>
                <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] text-foreground mb-4">
                  Jesica Thompson — <em>Franchise Solutions Inc.</em>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Independent franchise consultant. Multiple brands in her portfolio. No active LinkedIn channel.
                  She needed an investor lead engine that ran in the background while she focused on placements.
                </p>
              </header>

              {/* Video */}
              <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-card">
                <div className="aspect-video bg-muted">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                    poster="/videos/jesica-thompson-poster.jpg"
                  >
                    <source src={jesicaThompsonVideo.url} type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* Overview */}
              <div>
                <h3 className="font-display text-2xl text-foreground mb-3">Overview</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Jesica came to us running her consultancy almost entirely on referrals and word of mouth.
                  Strong brand, great close rate — but no predictable top-of-funnel. We built her a paid
                  advertising + CRM + website inbound system that puts qualified franchise buyer enquiries
                  in front of her every single week.
                </p>
              </div>

              {/* Timeline */}
              <div>
                <h3 className="font-display text-2xl text-foreground mb-6">The Engagement</h3>
                <div className="space-y-6">
                  {timeline.map((t, i) => (
                    <div key={t.phase} className="flex gap-5">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-accent text-accent-foreground font-display font-bold flex items-center justify-center">
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-accent mb-1">{t.phase}</p>
                        <h4 className="font-display text-xl text-foreground mb-1.5">{t.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{t.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes — qualitative */}
              <div>
                <h3 className="font-display text-2xl text-foreground mb-6">The Outcome</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {outcomes.map((o) => (
                    <div key={o.label} className="rounded-2xl border border-border bg-card p-6">
                      <o.icon className="w-6 h-6 text-accent mb-3" />
                      <p className="font-display text-lg text-foreground mb-1.5">{o.label}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{o.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client quote */}
              <div className="rounded-2xl bg-primary text-primary-foreground p-8 sm:p-10">
                <Quote className="w-7 h-7 text-accent mb-4" />
                <p className="font-display text-2xl leading-snug mb-6">
                  "From paid ads to CRM automation to a high-converting website, our growth engine finally
                  runs on autopilot. The team genuinely understands franchise sales — it shows in the
                  quality of conversations they put on my calendar."
                </p>
                <div>
                  <p className="font-semibold">Jesica Thompson</p>
                  <p className="text-sm text-primary-foreground/70">Franchise Consultant, Franchise Solutions Inc.</p>
                </div>
              </div>
            </article>

            {/* Sticky sidebar */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-32 space-y-6">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Client</p>
                  <p className="font-display text-xl text-foreground mb-1">Jesica Thompson</p>
                  <p className="text-sm text-muted-foreground mb-6">Franchise Solutions Inc.</p>

                  <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">Services Delivered</p>
                  <ul className="space-y-2 mb-6">
                    {servicesDelivered.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-semibold h-12"
                    onClick={() => window.open("https://calendly.com/lets-build-your-brand", "_blank")}
                  >
                    <Calendar className="w-4 h-4 mr-2" /> Schedule a Call
                  </Button>
                </div>

                <div className="rounded-2xl border border-border bg-secondary/40 p-6">
                  <p className="font-display text-lg text-foreground mb-2">More client stories</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Browse video testimonials and quotes from franchise leaders we work with.
                  </p>
                  <Link to="/testimonials" className="text-sm font-semibold text-accent inline-flex items-center gap-1.5 hover:gap-2 transition-all">
                    View Testimonials <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* MORE CASE STUDIES */}
      <section className="py-20 bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">More Case Studies</p>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground leading-tight">
              Other franchise brands <em>we've helped build.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/case-studies/hof-franchise-consulting"
              className="group rounded-2xl border border-border bg-card p-8 hover:shadow-elegant transition-all"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">Website Redesign</p>
              <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-accent transition-colors">
                HOF Franchise Consulting
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Complete website rebuild for Shawn Gurn's franchise consultancy — modern brand,
                searchable franchise directory, video storytelling, and a real lead capture system.
              </p>
              <span className="text-sm font-semibold text-accent inline-flex items-center gap-1.5 group-hover:gap-2 transition-all">
                Read the case study <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>

            <div className="rounded-2xl border border-dashed border-border bg-card/50 p-8 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">Coming Soon</p>
              <h3 className="font-display text-2xl text-foreground mb-3">More client stories</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We're documenting more engagements — LinkedIn outreach, paid media, and full franchise
                growth systems. New case studies drop every month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6">
            Ready to be our <em>next case study?</em>
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
