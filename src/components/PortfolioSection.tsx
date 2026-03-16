import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  Target,
  Globe,
  Linkedin,
  BarChart3,
  ArrowUpRight,
  CheckCircle2,
  Shield,
  Zap,
  MessageSquare,
  Search,
  PenTool,
  Monitor,
  Megaphone,
  LineChart,
  Award,
  Clock,
  HeartHandshake
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

const whyChooseUs = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Franchise-Only Focus",
    description: "We exclusively serve franchise consultants and franchisors — not restaurants, not retail. This specialization means deeper expertise and better results for your franchise brand."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Speed to First Leads",
    description: "Most clients see their first qualified franchise investor leads within 2-4 weeks of campaign launch. We move fast because your pipeline can't wait."
  },
  {
    icon: <HeartHandshake className="w-8 h-8" />,
    title: "Transparent Reporting",
    description: "No vanity metrics. We report on leads generated, lead quality scores, cost per qualified lead, and meetings booked — the numbers that actually matter."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Reach, Local Expertise",
    description: "Whether you're expanding in the US, UK, India, Canada, or the Middle East, we understand local investor behavior and franchise market dynamics."
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

        {!showAll && (
          <div className="text-center mb-16">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(true)}
              className="border-primary text-primary hover:bg-primary/10 gap-2"
            >
              More Solutions
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Why Choose Us */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-accent/10 text-accent-foreground border-accent/20">
              <Target className="h-3 w-3 mr-1" />
              Why Franchise Brands Choose Us
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Built Exclusively for Franchise Growth
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We don't do generic digital marketing. Every strategy, campaign, and website we build 
              is designed specifically for franchise investor recruitment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div 
                key={idx} 
                className="text-center p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {item.icon}
                </div>
                <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How We Work - Simple Process */}
        <div className="mb-16 p-8 md:p-12 bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-3xl border border-border/50">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              How We Work With Franchise Brands
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A simple, transparent process from strategy to results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery Call", desc: "We learn about your franchise model, target investor profile, and growth goals.", icon: <MessageSquare className="w-6 h-6" /> },
              { step: "02", title: "Custom Strategy", desc: "We build a tailored marketing plan combining the channels that fit your brand best.", icon: <Target className="w-6 h-6" /> },
              { step: "03", title: "Launch & Optimize", desc: "Campaigns go live. We monitor, test, and optimize weekly for maximum lead quality.", icon: <Zap className="w-6 h-6" /> },
              { step: "04", title: "Report & Scale", desc: "Transparent monthly reports. When something works, we scale it. When it doesn't, we pivot.", icon: <TrendingUp className="w-6 h-6" /> }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                </div>
                <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

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
