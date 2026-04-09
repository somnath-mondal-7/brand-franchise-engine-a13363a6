import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, ExternalLink, Globe, Linkedin, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const CaseStudyHOF = () => {
  const comparisonData = [
    { feature: "Design", before: "Basic WordPress theme, dated look, stock imagery", after: "Custom modern design with bold navy/orange brand palette, professional typography (Playfair Display + Inter)" },
    { feature: "Navigation", before: "Flat top nav with 7 links, no dropdown", after: "Smart sticky navbar with Franchise dropdown menu, top info bar with email/phone, mobile hamburger menu" },
    { feature: "Hero Section", before: "Simple image slider with basic text", after: "Full-width hero with animated text, dual CTAs, trust badges" },
    { feature: "Video Content", before: "No video on site", after: "Embedded intro video with custom thumbnail, optimized playback (52MB → 8.6MB)" },
    { feature: "Franchise Directory", before: "Single franchise page with basic list", after: "Searchable directory with 90+ franchise brands, category filters, investment details" },
    { feature: "Mobile Experience", before: "Basic responsive", after: "Fully responsive with dedicated mobile menu, optimized touch targets, mobile-first approach" },
    { feature: "Performance", before: "WordPress with multiple plugins (slow)", after: "Lightning-fast React SPA, no server-side rendering delays, optimized assets" },
    { feature: "CTAs & Lead Gen", before: "Single 'Free Consultation' button", after: "Multiple strategic CTAs — Calendly integration, 'LET'S TALK' footer bar, strategy session buttons" },
    { feature: "SEO", before: "Basic WordPress SEO", after: "Semantic HTML, proper heading hierarchy, meta tags, alt text on images" },
    { feature: "Trust Badges", before: "IFPG seal only", after: "IFPG seal + Business Management Review award badge, displayed in hero and footer" },
  ];

  const newFeatures = [
    "90+ Franchise Directory — Searchable, filterable database with investment ranges, highlights, and training details for each brand",
    "Interactive Franchise Categories — Clickable category cards directing users to the franchise directory",
    "Shawn's Video Introduction — Embedded on both Home and About pages with custom thumbnail and optimized streaming",
    "Dedicated Lending Page — Complete business financing information as a standalone section",
    "Book Consultation Page — Calendly-integrated scheduling page",
    "Animated Sections — Scroll-triggered fade-in animations and gentle bounce effects",
    "Trust Badge System — IFPG seal and BMR award displayed prominently across the site",
    "Rich Footer with CTA Bar — Orange call-to-action bar + 5-column organized footer",
  ];

  const services = [
    "Complete Website Redesign & Development",
    "Custom React/TypeScript Build",
    "90+ Franchise Brand Directory Integration",
    "Calendly Booking System Integration",
    "Video Content Optimization & Embedding",
    "Mobile-First Responsive Design",
    "SEO Architecture & Implementation",
    "Brand Identity & Visual Design System",
  ];

  const stats = [
    { label: "Franchise Brands Listed", value: "90+" },
    { label: "Video Size Reduction", value: "83%" },
    { label: "Pages Built", value: "15+" },
    { label: "Load Speed Improvement", value: "3x" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>HOF Franchise Consulting Website Redesign Case Study | FranchiseLeadsPro</title>
        <meta name="description" content="How FranchiseLeadsPro transformed HOF Franchise Consulting's outdated WordPress site into a modern, high-converting React application with 90+ franchise directory, Calendly integration, and premium brand design." />
        <link rel="canonical" href="https://www.franchiseleadspro.com/case-studies/hof-franchise-consulting" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.franchiseleadspro.com/case-studies/hof-franchise-consulting" />
        <meta property="og:title" content="HOF Franchise Consulting — Website Redesign Case Study" />
        <meta property="og:description" content="From outdated WordPress to a blazing-fast React SPA — see how we rebuilt HOF Franchise Consulting's entire digital presence." />
        <meta property="og:image" content="https://www.franchiseleadspro.com/og-image.png" />
      </Helmet>
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-accent/30 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-sm px-4 py-1">
              Case Study — Website Design & Development
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              HOF Franchise Consulting — Complete Website Transformation
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              How we rebuilt Shawn Gurn's franchise consulting website from a dated WordPress site into a modern, high-converting React application with a 90+ franchise directory.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a href="https://www.linkedin.com/in/shawngurn/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-border text-foreground hover:bg-muted">
                  <Linkedin className="w-4 h-4 mr-2" /> Shawn Gurn on LinkedIn
                </Button>
              </a>
              <a href="https://hoffranchiseconsulting.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-border text-foreground hover:bg-muted">
                  <Globe className="w-4 h-4 mr-2" /> Visit HOF Website
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Main Column */}
              <div className="lg:col-span-2 space-y-12">
                {/* Client Overview */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Client Overview</h2>
                  <hr className="border-border mb-4" />
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">Shawn Gurn</strong> is the founder of <strong className="text-foreground">HOF Franchise Consulting</strong> and an active member of the <strong className="text-foreground">IFPG (International Franchise Professionals Group)</strong>. With years of experience helping aspiring entrepreneurs find the right franchise opportunities, Shawn has built a reputation as a trusted advisor in the franchise consulting space.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    However, his digital presence wasn't matching the caliber of service he delivered. His existing website — a basic WordPress site with a dated theme, stock imagery, and limited functionality — was failing to capture leads, showcase his expertise, or stand out in a competitive market.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Shawn partnered with FranchiseLeadsPro to completely reimagine and rebuild his website from the ground up — transforming it into a premium digital asset that positions HOF Franchise Consulting as an industry authority.
                  </p>
                </div>

                {/* The Challenge */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">The Challenge</h2>
                  <hr className="border-border mb-4" />
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Shawn's existing WordPress site had several critical shortcomings that were actively holding his business back:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    {[
                      "Dated visual design that didn't reflect his professional caliber or IFPG credentials",
                      "No franchise directory — prospects had to contact Shawn just to learn what brands he represented",
                      "Zero video content, missing the opportunity to build trust before the first conversation",
                      "Single generic CTA with no strategic lead capture funnel",
                      "Slow WordPress performance with heavy plugins creating poor user experience",
                      "Basic mobile responsiveness that wasn't optimized for the 60%+ mobile visitors",
                      "No category-based franchise browsing — everything was a flat, unorganized list",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-destructive mt-1">✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Our Solution */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Our Solution</h2>
                  <hr className="border-border mb-4" />
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We didn't just redesign Shawn's website — we engineered an entirely new digital platform from scratch. Built on <strong className="text-foreground">React 18, TypeScript, Tailwind CSS, and Framer Motion</strong>, the new site is a blazing-fast single-page application that loads instantly, looks stunning, and converts visitors into booked consultations.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The centerpiece of the new build is a <strong className="text-foreground">searchable franchise directory featuring 90+ brands</strong> — complete with investment ranges, category filters, training details, and highlights for each opportunity. This alone transformed the site from a static brochure into an interactive lead magnet that keeps visitors engaged.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We also embedded Shawn's personal introduction video — compressed from 52MB down to just 8.6MB without quality loss — on both the Home and About pages. This personal touch lets prospects connect with Shawn before they ever pick up the phone, dramatically increasing trust and conversion rates. Combined with Calendly-integrated booking, multiple strategic CTAs, and IFPG trust badges, the new site is a complete lead generation machine.
                  </p>
                </div>

                {/* Before vs After */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Before vs. After Comparison</h2>
                  <hr className="border-border mb-4" />
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 pr-4 text-foreground font-semibold w-1/5">Feature</th>
                          <th className="text-left py-3 pr-4 text-muted-foreground font-semibold w-2/5">Before (WordPress)</th>
                          <th className="text-left py-3 text-primary font-semibold w-2/5">After (Custom Build)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonData.map((row, i) => (
                          <tr key={i} className="border-b border-border/50">
                            <td className="py-3 pr-4 font-medium text-foreground">{row.feature}</td>
                            <td className="py-3 pr-4 text-muted-foreground">{row.before}</td>
                            <td className="py-3 text-foreground">{row.after}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* New Features */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">New Pages & Features Added</h2>
                  <hr className="border-border mb-4" />
                  <ul className="space-y-3">
                    {newFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Benefits */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Key Benefits Delivered</h2>
                  <hr className="border-border mb-4" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: "Professional Brand Authority", desc: "Custom colors, typography, and animations position HOF as a premium consulting firm — not a generic WordPress site." },
                      { title: "Faster Performance", desc: "React-based SPA loads instantly vs. the old WordPress site with heavy plugins. Faster sites convert more leads." },
                      { title: "Better Lead Generation", desc: "Multiple strategic CTAs, Calendly integration, and a clear user journey guide visitors toward booking." },
                      { title: "Franchise Directory as Lead Magnet", desc: "The 90+ brand searchable directory gives visitors a reason to explore and engage, increasing time on site." },
                      { title: "Personal Connection via Video", desc: "Shawn's intro video builds trust before prospects even speak with him — a proven conversion booster." },
                      { title: "Mobile-First Experience", desc: "Fully responsive design ensures 60%+ of visitors on mobile get a flawless experience." },
                    ].map((item, i) => (
                      <Card key={i} className="border-border/50">
                        <CardContent className="p-4">
                          <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Technology Stack */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Technology Stack</h2>
                  <hr className="border-border mb-4" />
                  <div className="flex flex-wrap gap-2">
                    {["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "Shadcn/UI"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    Custom-coded and hosted on a global CDN with instant deployments. No WordPress maintenance, plugin updates, or security patches needed.
                  </p>
                </div>

                {/* Client Quote */}
                <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 lg:p-8">
                  <svg className="w-8 h-8 text-primary/40 mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-foreground/90 leading-relaxed italic text-base lg:text-lg mb-4">
                    "The team at FranchiseLeadsPro completely transformed my online presence. My old WordPress site was holding me back — now I have a professional platform that actually generates leads and showcases my franchise portfolio the way it deserves. The searchable franchise directory alone has been a game-changer for my business."
                  </p>
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-semibold text-foreground">Shawn Gurn</p>
                      <p className="text-sm text-muted-foreground">Founder, HOF Franchise Consulting · IFPG Member</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Services Card */}
                  <Card className="border-primary/20 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-1">Services Delivered</h3>
                      <p className="text-sm text-muted-foreground mb-4">Full website redesign & development</p>
                      <hr className="border-border mb-4" />
                      <ul className="space-y-3">
                        {services.map((svc) => (
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
                        Get Your Website Built <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <p className="text-xs text-center text-muted-foreground mt-2">100% FREE Consultation</p>
                    </CardContent>
                  </Card>

                  {/* Stats Card */}
                  <Card className="bg-gradient-to-br from-primary/5 to-accent/10 border-border/50">
                    <CardContent className="p-6 space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-primary" /> Key Metrics
                      </h4>
                      {stats.map((stat) => (
                        <div key={stat.label} className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">{stat.label}</span>
                          <span className="font-bold text-primary">{stat.value}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Client Info Card */}
                  <Card className="border-border/50">
                    <CardContent className="p-6 space-y-3">
                      <h4 className="font-bold text-foreground">Client Details</h4>
                      <hr className="border-border" />
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Client</span>
                          <span className="text-foreground font-medium">Shawn Gurn</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Company</span>
                          <span className="text-foreground font-medium">HOF Franchise Consulting</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Industry</span>
                          <span className="text-foreground font-medium">Franchise Consulting</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Affiliation</span>
                          <span className="text-foreground font-medium">IFPG</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Project Type</span>
                          <span className="text-foreground font-medium">Website Redesign</span>
                        </div>
                      </div>
                      <hr className="border-border" />
                      <a href="https://www.linkedin.com/in/shawngurn/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary hover:underline">
                        <Linkedin className="w-4 h-4" /> Connect with Shawn on LinkedIn
                        <ExternalLink className="w-3 h-3" />
                      </a>
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
          <h2 className="text-3xl lg:text-4xl font-bold">Want a Website Like This?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            We build high-converting franchise websites that generate leads, showcase your brand, and position you as an industry authority. Let's talk about your project.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary px-8 py-6 text-lg backdrop-blur-sm mt-4"
            >
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyHOF;
