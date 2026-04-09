import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Linkedin,
  Megaphone,
  Monitor,
  PenTool,
  Search,
  LineChart,
  ArrowUpRight,
  CheckCircle2,
  MessageSquare,
  Target,
  Zap,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: <Linkedin className="w-6 h-6" />,
    title: "LinkedIn Outreach",
    description: "Sales Navigator prospecting that books meetings with franchise investors.",
    highlights: ["Custom investor targeting", "Personalized campaigns", "Weekly meeting reports"],
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Paid Social Ads",
    description: "Data-driven ad campaigns across Facebook, Instagram & LinkedIn.",
    highlights: ["Multi-platform setup", "Retargeting & lookalikes", "Monthly performance reports"],
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Website Development",
    description: "Conversion-focused franchise websites with lead capture & SEO.",
    highlights: ["Responsive design", "Lead capture forms", "SEO-optimized architecture"],
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "Content & Branding",
    description: "Blog posts, social content & email sequences for franchise recruitment.",
    highlights: ["Brand positioning", "Content calendar", "Email nurture sequences"],
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "SEO & Search",
    description: "Technical & local SEO to rank for high-intent franchise keywords.",
    highlights: ["Technical SEO audit", "Local SEO", "Keyword mapping"],
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Analytics & Tracking",
    description: "End-to-end attribution so you know exactly what's working.",
    highlights: ["Cross-channel attribution", "Lead quality scoring", "ROI tracking"],
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "We learn your franchise model and growth goals.", icon: <MessageSquare className="w-5 h-5" /> },
  { step: "02", title: "Strategy", desc: "Custom marketing plan tailored to your brand.", icon: <Target className="w-5 h-5" /> },
  { step: "03", title: "Launch", desc: "Campaigns go live with weekly optimization.", icon: <Zap className="w-5 h-5" /> },
  { step: "04", title: "Scale", desc: "Double down on what works. Pivot what doesn't.", icon: <TrendingUp className="w-5 h-5" /> },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-xs font-semibold tracking-wider">
            What We Deliver
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Everything Your Franchise Needs to{" "}
            <span className="text-primary">Grow</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            LinkedIn outreach, paid ads, websites, SEO & analytics — all under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl border border-border/60 bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1.5">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
              <ul className="space-y-1.5">
                {service.highlights.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">How It Works</h3>
            <p className="text-muted-foreground">From first call to qualified leads in 4 simple steps.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
                  {item.step}
                </div>
                <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="gap-2 px-8 py-4 text-base font-semibold rounded-xl"
            onClick={() => window.open("https://calendly.com/lets-build-your-brand", "_blank")}
          >
            Book Free Strategy Call
            <ArrowUpRight className="h-4 w-4" />
          </Button>
          <p className="text-sm text-muted-foreground mt-3">No commitment. No pressure.</p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
