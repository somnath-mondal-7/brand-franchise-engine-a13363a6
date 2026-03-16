import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Globe,
  Linkedin,
  BarChart3,
  ArrowUpRight,
  CheckCircle2,
  Monitor,
  Megaphone,
  LineChart,
  Award,
  Clock,
  Search,
  PenTool,
  ChevronDown
} from "lucide-react";

const serviceCapabilities = [
  {
    icon: <Linkedin className="w-10 h-10 text-primary" />,
    title: "LinkedIn Investor Outreach",
    description: "We use Sales Navigator to identify and engage high-net-worth individuals and business owners who are actively looking to invest in franchise opportunities.",
    deliverables: [
      "Custom investor persona targeting",
      "Personalized connection campaigns",
      "Thought leadership content calendar",
      "Weekly meeting booking reports"
    ],
    metric: "Typical 35-45% connection acceptance rate",
    color: "from-blue-500/10 to-blue-600/5"
  },
  {
    icon: <Megaphone className="w-10 h-10 text-primary" />,
    title: "Paid Social Advertising",
    description: "Data-driven Facebook, Instagram, and LinkedIn ad campaigns with geo-targeting, lookalike audiences, and continuous A/B testing to reduce cost per lead.",
    deliverables: [
      "Multi-platform campaign setup",
      "Creative design & copywriting",
      "Retargeting & lookalike audiences",
      "Monthly performance reports"
    ],
    metric: "Campaigns optimized for lowest CPL",
    color: "from-purple-500/10 to-purple-600/5"
  },
  {
    icon: <Monitor className="w-10 h-10 text-primary" />,
    title: "Franchise Website Development",
    description: "Conversion-focused franchise websites with lead capture forms, territory maps, investment calculators, and SEO-optimized architecture.",
    deliverables: [
      "Custom responsive design",
      "Lead capture & qualification forms",
      "SEO-optimized page structure",
      "CMS for easy content updates"
    ],
    metric: "Built for speed, SEO & conversions",
    color: "from-emerald-500/10 to-emerald-600/5"
  },
  {
    icon: <PenTool className="w-10 h-10 text-primary" />,
    title: "Content & Brand Strategy",
    description: "Organic content marketing including blog posts, social media content, email sequences, and brand positioning tailored for franchise recruitment.",
    deliverables: [
      "Brand messaging & positioning",
      "Blog & article writing",
      "Social media content calendar",
      "Email nurture sequences"
    ],
    metric: "Content that educates and converts",
    color: "from-orange-500/10 to-orange-600/5"
  },
  {
    icon: <Search className="w-10 h-10 text-primary" />,
    title: "SEO & Search Visibility",
    description: "Technical SEO, local SEO, and content optimization to help franchise brands rank for high-intent keywords across multiple locations.",
    deliverables: [
      "Technical SEO audit & fixes",
      "Local SEO for franchise territories",
      "Keyword research & mapping",
      "Monthly ranking reports"
    ],
    metric: "Long-term organic lead generation",
    color: "from-teal-500/10 to-teal-600/5"
  },
  {
    icon: <LineChart className="w-10 h-10 text-primary" />,
    title: "Analytics & Lead Tracking",
    description: "End-to-end tracking and attribution so you know exactly which channels drive your best franchise leads and where to invest more.",
    deliverables: [
      "Cross-channel attribution setup",
      "Custom reporting dashboards",
      "Lead quality scoring",
      "ROI tracking & optimization"
    ],
    metric: "Data-driven decision making",
    color: "from-rose-500/10 to-rose-600/5"
  }
];

const industryBenchmarks = [
  { label: "Franchise Brands Worked With", value: "640+", icon: <Users className="w-6 h-6 text-primary" /> },
  { label: "Avg. Time to First Leads", value: "2-4 Weeks", icon: <Clock className="w-6 h-6 text-primary" /> },
  { label: "Client Retention Rate", value: "93%", icon: <Award className="w-6 h-6 text-primary" /> },
  { label: "Countries Served", value: "12+", icon: <Globe className="w-6 h-6 text-primary" /> }
];

const PortfolioSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? serviceCapabilities : serviceCapabilities.slice(0, 3);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            What We Deliver
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Full-Service Franchise{" "}
            <span className="text-primary">Marketing Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything a franchise brand needs to attract, qualify, and convert investor leads — 
            from LinkedIn outreach to website development, all under one roof.
          </p>
        </div>

        {/* Industry Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 p-6 bg-muted/50 rounded-2xl border border-border/50">
          {industryBenchmarks.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Service Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {visibleServices.map((service, idx) => (
            <Card 
              key={idx} 
              className="group border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl overflow-hidden"
            >
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2 mb-4">
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-border/50">
                  <Badge variant="outline" className="text-xs bg-muted/50">
                    <BarChart3 className="h-3 w-3 mr-1" />
                    {service.metric}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Solutions Toggle */}
        {!showAll && (
          <div className="text-center mb-16">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(true)}
              className="gap-2 border-primary/30 text-primary hover:bg-primary/10"
            >
              More Solutions
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center p-6 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl">
            <div className="text-left">
              <h4 className="font-bold text-lg text-foreground">Ready to Grow Your Franchise?</h4>
              <p className="text-muted-foreground text-sm">Book a free strategy call — no commitment, no pressure.</p>
            </div>
            <Button 
              size="lg" 
              className="gap-2 whitespace-nowrap"
              onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
            >
              Book Free Strategy Call
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
