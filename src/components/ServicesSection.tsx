import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target,
  Megaphone,
  TrendingUp,
  Search,
  Share2,
  Mail,
  BarChart3,
  Globe,
  Zap,
  Users
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Lead Generation",
      description: "Get exclusive, pre-qualified franchise leads that actually close. We target investors actively looking to buy franchises in your industry.",
      features: [
        "Exclusive, non-shared leads",
        "Pre-qualification screening",
        "Real-time lead delivery",
        "Investment-verified prospects"
      ]
    },
    {
      icon: <Megaphone className="w-12 h-12 text-primary" />,
      title: "PPC Advertising",
      description: "High-converting Google & Meta ads that bring franchise buyers to your door. Average $45-85 cost per qualified lead.",
      features: [
        "Google Ads management",
        "Facebook & Instagram ads",
        "Retargeting campaigns",
        "Landing page optimization"
      ]
    },
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "SEO & Content Marketing",
      description: "Rank #1 for franchise keywords in your market. We create content that attracts and converts serious investors.",
      features: [
        "Local SEO domination",
        "Franchise keyword targeting",
        "Blog & content creation",
        "Link building campaigns"
      ]
    },
    {
      icon: <Share2 className="w-12 h-12 text-primary" />,
      title: "Social Media Marketing",
      description: "Build brand awareness and generate leads through strategic social media presence. 35% higher lead quality from social.",
      features: [
        "LinkedIn franchise targeting",
        "Instagram brand building",
        "Facebook community growth",
        "Social lead generation"
      ]
    },
    {
      icon: <Mail className="w-12 h-12 text-primary" />,
      title: "Email Marketing",
      description: "Automated email sequences that nurture leads from interest to signed franchise agreement. 3x better conversion than manual outreach.",
      features: [
        "Drip campaign automation",
        "Lead nurturing sequences",
        "Discovery day invites",
        "Franchisee newsletters"
      ]
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: "Marketing Analytics",
      description: "Know exactly which channels bring the best leads. Full-funnel tracking from ad click to franchise signing.",
      features: [
        "Lead source tracking",
        "ROI measurement",
        "Conversion analytics",
        "Monthly performance reports"
      ]
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Website & Landing Pages",
      description: "Franchise-focused websites that convert visitors into leads. Optimized for both search engines and investor psychology.",
      features: [
        "Franchise portal development",
        "High-converting landing pages",
        "Mobile-first design",
        "Inquiry form optimization"
      ]
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Brand Positioning",
      description: "Stand out in a crowded franchise market. Strategic positioning that makes investors choose you over competitors.",
      features: [
        "Competitive analysis",
        "Brand messaging",
        "Value proposition development",
        "Market differentiation"
      ]
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Lead Qualification",
      description: "Stop wasting time on tire-kickers. We pre-screen every lead for financial capacity and genuine investment interest.",
      features: [
        "Financial pre-qualification",
        "Investment intent verification",
        "Background screening",
        "Hot lead prioritization"
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Franchise Marketing Strategy",
      description: "Complete marketing roadmap tailored to your franchise model. From brand awareness to franchise agreement signing.",
      features: [
        "Go-to-market planning",
        "Channel strategy",
        "Budget allocation",
        "Growth milestone tracking"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Full-Service Marketing
          </span>
          <h2 className="text-4xl font-bold mb-4 text-foreground">Marketing Services That Fill Your Pipeline</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to attract, qualify, and convert franchise buyers—from first click to signed agreement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <CardHeader>
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2 text-lg">✓</span>
                      <span className="text-sm text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/contact">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl font-semibold shadow-elegant hover:shadow-hover transition-all duration-300"
            >
              Get Your Free Marketing Audit
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
