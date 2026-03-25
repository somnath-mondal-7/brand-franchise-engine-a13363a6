import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Users, Target, BarChart3, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const caseStudies = [
  {
    slug: "jessica-thompson-franchise-solutions",
    client: "Jesica Thompson",
    company: "Franchise Solutions Inc.",
    role: "Franchise Consultant",
    videoSrc: "/videos/jesica-thompson-review.mp4",
    sectors: ["Franchise Consulting", "Multi-Unit Development", "Investor Recruitment"],
    overview:
      "Franchise Solutions Inc., led by veteran franchise consultant Jesica Thompson, specializes in connecting aspiring entrepreneurs with high-performing franchise opportunities across the United States. With a reputation for personalized guidance and deep industry expertise, Jesica needed a partner to amplify her digital presence, generate a consistent flow of qualified inbound leads, and streamline her client management process.",
    narrative:
      "Jesica had built an impressive roster of franchise brands but was relying heavily on word-of-mouth referrals and networking events. She knew the digital landscape held untapped potential — but lacked the bandwidth to execute paid campaigns, manage a CRM pipeline, and optimize her website for lead capture simultaneously.\n\nPartnering with FranchiseLeadsPro, we deployed a full-stack growth engine: high-converting paid advertising campaigns across Google and Meta, a custom CRM integration to automate lead nurturing, and a website inbound strategy that turned her site into a 24/7 lead generation machine. Franchise inquiries started pouring in — qualified investors actively searching for opportunities landed on her site and converted at rates she hadn't seen before.",
    timeline: {
      launched: "November 12, 2024",
      duration: "5 months with FranchiseLeadsPro",
    },
    stats: [
      { label: "Inbound Leads Generated", value: "847" },
      { label: "Qualified Investor Meetings", value: "213" },
      { label: "Franchise Deals Closed", value: "27" },
      { label: "Ad Spend ROI", value: "6.2x" },
    ],
    services: [
      "Paid Advertising (Google Ads + Meta Ads)",
      "CRM Setup & Automation",
      "Website Inbound Lead Optimization",
      "Franchise Inquiry Management",
      "Weekly Performance Reporting",
    ],
    quote:
      "FranchiseLeadsPro didn't just bring us leads — they brought us the right leads. Our pipeline went from sporadic referrals to a predictable stream of serious franchise investors. The CRM automation alone saved my team 15+ hours a week. This partnership has been a game-changer for Franchise Solutions Inc.",
  },
];

const CaseStudies = () => {
  const study = caseStudies[0]; // Currently featuring Jessica

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Case Studies | Franchise Lead Generation Success Stories | FranchiseLeadsPro</title>
        <meta
          name="description"
          content="See how franchise consultants like Jesica Thompson generated 847+ qualified leads with FranchiseLeadsPro's paid advertising, CRM management, and inbound lead strategies."
        />
        <link rel="canonical" href="https://www.franchiseleadspro.com/case-studies" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.franchiseleadspro.com/case-studies" />
        <meta property="og:title" content="Case Studies | Franchise Lead Generation Success Stories" />
        <meta property="og:description" content="See how Jesica Thompson generated 847+ qualified leads and 27 franchise deals with FranchiseLeadsPro's paid advertising and CRM strategies." />
        <meta property="og:image" content="https://www.franchiseleadspro.com/og-image.png" />
        <meta property="og:site_name" content="FranchiseLeadsPro" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Studies | Franchise Lead Generation Success Stories" />
        <meta name="twitter:description" content="See how Jesica Thompson generated 847+ qualified leads and 27 franchise deals with FranchiseLeadsPro." />
        <meta name="twitter:image" content="https://www.franchiseleadspro.com/og-image.png" />
      </Helmet>
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-accent/30 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-sm px-4 py-1">
              Case Studies
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Real Results. Real Clients.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore how franchise professionals are scaling their businesses with our proven lead generation, paid advertising, and CRM management strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-10">
              <p className="text-sm font-semibold text-primary mb-2">Featured Case Study</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {study.company} — {study.client}
              </h2>
              <p className="text-muted-foreground">{study.role}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-10">
                {/* Video Testimonial */}
                <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
                  <video
                    className="w-full aspect-video object-cover"
                    controls
                    preload="metadata"
                    poster=""
                  >
                    <source src={study.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Sectors */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Sectors</h3>
                  <hr className="border-border mb-4" />
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {study.sectors.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>

                {/* Overview */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Overview</h3>
                  <hr className="border-border mb-4" />
                  <p className="text-muted-foreground leading-relaxed">{study.overview}</p>
                </div>

                {/* Narrative */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Narrative</h3>
                  <hr className="border-border mb-4" />
                  {study.narrative.split("\n\n").map((p, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Timeline */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Timeline</h3>
                  <hr className="border-border mb-4" />
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Launched service on {study.timeline.launched}</li>
                    <li>{study.timeline.duration}</li>
                  </ul>
                </div>

                {/* Stats */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Results</h3>
                  <hr className="border-border mb-4" />
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {study.stats.map((stat) => (
                      <Card key={stat.label} className="text-center border-primary/20">
                        <CardContent className="p-4">
                          <p className="text-2xl lg:text-3xl font-bold text-primary">{stat.value}</p>
                          <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Client Quote */}
                <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 lg:p-8">
                  <svg className="w-8 h-8 text-primary/40 mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-foreground/90 leading-relaxed italic text-base lg:text-lg mb-4">
                    "{study.quote}"
                  </p>
                  <p className="font-semibold text-foreground">{study.client}</p>
                  <p className="text-sm text-muted-foreground">{study.role}, {study.company}</p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Services Card */}
                  <Card className="border-primary/20 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-1">Services Delivered</h3>
                      <p className="text-sm text-muted-foreground mb-4">Full-stack franchise growth</p>
                      <hr className="border-border mb-4" />
                      <ul className="space-y-3">
                        {study.services.map((svc) => (
                          <li key={svc} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            {svc}
                          </li>
                        ))}
                      </ul>
                      <hr className="border-border my-5" />
                      <Button
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                        size="lg"
                        onClick={() => window.open("https://calendly.com/lets-build-your-brand", "_blank")}
                      >
                        Schedule a Call <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <p className="text-xs text-center text-muted-foreground mt-2">100% FREE, No Obligation</p>
                    </CardContent>
                  </Card>

                  {/* Quick Stats Sidebar */}
                  <Card className="bg-gradient-to-br from-primary/5 to-accent/10 border-border/50">
                    <CardContent className="p-6 space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-primary" /> Key Metrics
                      </h4>
                      {study.stats.map((stat) => (
                        <div key={stat.label} className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">{stat.label}</span>
                          <span className="font-bold text-primary">{stat.value}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold">Want Results Like These?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Book a free strategy call and let us show you how we can fill your pipeline with qualified franchise investors.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary px-8 py-6 text-lg backdrop-blur-sm mt-4"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
