import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Eye, 
  MousePointer, 
  Target,
  Globe,
  Linkedin,
  BarChart3,
  ArrowUpRight,
  Play,
  ExternalLink
} from "lucide-react";

// Portfolio categories
const categories = [
  { id: "all", label: "All Work" },
  { id: "websites", label: "Website Design" },
  { id: "paid-ads", label: "Paid Advertising" },
  { id: "linkedin", label: "LinkedIn Marketing" },
  { id: "lead-gen", label: "Lead Generation" },
  { id: "case-studies", label: "Case Studies" }
];

// Portfolio items with realistic data
const portfolioItems = [
  {
    id: 1,
    category: "websites",
    title: "Subway India Franchise Portal",
    client: "Subway India",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    description: "Complete franchise recruitment website with lead capture, territory mapping, and investor qualification system.",
    results: [
      { label: "Conversion Rate", value: "8.7%", icon: Target },
      { label: "Monthly Leads", value: "340+", icon: Users },
      { label: "Avg. Session", value: "4:32", icon: Eye }
    ],
    tags: ["Franchise Portal", "Lead Capture", "Territory Mapping"],
    year: "2024"
  },
  {
    id: 2,
    category: "paid-ads",
    title: "Google Ads Campaign - Pizza Franchise",
    client: "La Pino'z Pizza",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    description: "Multi-location Google Ads campaign targeting franchise investors across 15 Indian states with geo-targeted landing pages.",
    results: [
      { label: "ROAS", value: "847%", icon: DollarSign },
      { label: "Cost Per Lead", value: "₹285", icon: Target },
      { label: "Qualified Leads", value: "1,240", icon: Users }
    ],
    tags: ["Google Ads", "Geo-Targeting", "Franchise Recruitment"],
    year: "2024"
  },
  {
    id: 3,
    category: "linkedin",
    title: "LinkedIn Franchise Investor Outreach",
    client: "Lenskart Franchise",
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&q=80",
    description: "B2B LinkedIn campaign targeting HNIs and business owners for franchise investment opportunities with automated sequences.",
    results: [
      { label: "Connection Rate", value: "42%", icon: Users },
      { label: "Response Rate", value: "18.5%", icon: MousePointer },
      { label: "Meetings Booked", value: "156", icon: Target }
    ],
    tags: ["LinkedIn Automation", "B2B Outreach", "Investor Targeting"],
    year: "2024"
  },
  {
    id: 4,
    category: "lead-gen",
    title: "Franchise Lead Generation System",
    client: "Haldiram's Franchise",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    description: "End-to-end lead generation funnel with qualification scoring, automated nurturing, and CRM integration for franchise sales.",
    results: [
      { label: "Monthly Leads", value: "520+", icon: Users },
      { label: "Qualification Rate", value: "34%", icon: Target },
      { label: "Deal Closures", value: "28", icon: DollarSign }
    ],
    tags: ["Lead Funnel", "CRM Integration", "Automation"],
    year: "2023"
  },
  {
    id: 5,
    category: "case-studies",
    title: "Chai Sutta Bar - National Expansion",
    client: "Chai Sutta Bar",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
    description: "Complete franchise development and recruitment strategy that helped expand from 50 to 450+ outlets in 18 months.",
    results: [
      { label: "New Franchisees", value: "400+", icon: Users },
      { label: "Revenue Growth", value: "780%", icon: TrendingUp },
      { label: "States Covered", value: "22", icon: Globe }
    ],
    tags: ["Franchise Development", "National Expansion", "Brand Building"],
    year: "2023"
  },
  {
    id: 6,
    category: "websites",
    title: "Franchise Discovery Platform",
    client: "FranchiseIndia.com",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    description: "Marketplace platform connecting franchise brands with investors, featuring advanced search, comparison tools, and inquiry management.",
    results: [
      { label: "Monthly Visitors", value: "2.1M", icon: Eye },
      { label: "Brand Listings", value: "850+", icon: Globe },
      { label: "Monthly Inquiries", value: "45K+", icon: Users }
    ],
    tags: ["Marketplace", "Franchise Discovery", "Lead Management"],
    year: "2024"
  },
  {
    id: 7,
    category: "paid-ads",
    title: "Meta Ads - Quick Service Restaurant",
    client: "WOW! Momo",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    description: "Facebook & Instagram campaign with lookalike audiences targeting potential franchisees in Tier 2 & 3 cities.",
    results: [
      { label: "ROAS", value: "624%", icon: DollarSign },
      { label: "Lead Cost", value: "₹195", icon: Target },
      { label: "Conversions", value: "890", icon: Users }
    ],
    tags: ["Meta Ads", "Lookalike Audiences", "Tier 2/3 Cities"],
    year: "2024"
  },
  {
    id: 8,
    category: "linkedin",
    title: "Franchise Owner Thought Leadership",
    client: "Barbeque Nation",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    description: "Executive thought leadership campaign positioning the founder as industry expert, driving inbound franchise inquiries.",
    results: [
      { label: "Followers Growth", value: "12.4K", icon: Users },
      { label: "Engagement Rate", value: "8.2%", icon: TrendingUp },
      { label: "Inbound Leads", value: "245", icon: Target }
    ],
    tags: ["Thought Leadership", "Personal Branding", "Inbound Marketing"],
    year: "2024"
  },
  {
    id: 9,
    category: "lead-gen",
    title: "Multi-Channel Franchise Recruitment",
    client: "Jockey India",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    description: "Integrated lead generation across Google, Meta, LinkedIn, and content marketing with unified tracking and attribution.",
    results: [
      { label: "Total Leads", value: "3,200+", icon: Users },
      { label: "Avg. CPL", value: "₹340", icon: DollarSign },
      { label: "Franchise Sales", value: "67", icon: Target }
    ],
    tags: ["Multi-Channel", "Attribution", "Franchise Sales"],
    year: "2023"
  },
  {
    id: 10,
    category: "case-studies",
    title: "US Market Entry - Indian QSR Brand",
    client: "Biryani By Kilo",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    description: "Complete market entry strategy for expanding to the US market, including regulatory compliance, territory mapping, and franchisee recruitment.",
    results: [
      { label: "US Outlets", value: "18", icon: Globe },
      { label: "Investment", value: "$4.2M", icon: DollarSign },
      { label: "First Year Sales", value: "$8.7M", icon: TrendingUp }
    ],
    tags: ["US Expansion", "International Franchising", "Market Entry"],
    year: "2024"
  },
  {
    id: 11,
    category: "websites",
    title: "Franchise Investor CRM Dashboard",
    client: "Amul Franchise",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    description: "Custom CRM and dashboard for managing 5000+ franchise inquiries with automated scoring, follow-up sequences, and analytics.",
    results: [
      { label: "Lead Response", value: "<2 hrs", icon: Target },
      { label: "Conversion Lift", value: "+45%", icon: TrendingUp },
      { label: "Active Users", value: "120+", icon: Users }
    ],
    tags: ["CRM", "Dashboard", "Lead Management"],
    year: "2024"
  },
  {
    id: 12,
    category: "paid-ads",
    title: "YouTube Pre-Roll Franchise Campaign",
    client: "VLCC Franchise",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
    description: "Video advertising campaign on YouTube targeting aspiring entrepreneurs and investors interested in wellness franchise opportunities.",
    results: [
      { label: "Views", value: "4.2M", icon: Eye },
      { label: "VTR", value: "68%", icon: Play },
      { label: "Leads Generated", value: "1,850", icon: Users }
    ],
    tags: ["YouTube Ads", "Video Marketing", "Wellness Franchise"],
    year: "2024"
  }
];

// ROI Case Studies with detailed metrics
const roiCaseStudies = [
  {
    brand: "Chai Point",
    logo: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=100&q=80",
    industry: "F&B - Beverages",
    investment: "₹18.5L",
    period: "8 months",
    metrics: {
      leadsGenerated: 1240,
      qualifiedLeads: 421,
      franchisesSold: 34,
      totalRevenue: "₹5.1 Cr",
      roi: "2,757%"
    }
  },
  {
    brand: "The Belgian Waffle Co.",
    logo: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&q=80",
    industry: "F&B - Desserts",
    investment: "₹12L",
    period: "6 months",
    metrics: {
      leadsGenerated: 890,
      qualifiedLeads: 312,
      franchisesSold: 28,
      totalRevenue: "₹3.8 Cr",
      roi: "3,167%"
    }
  },
  {
    brand: "Tumbledry",
    logo: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=100&q=80",
    industry: "Services - Laundry",
    investment: "₹8.5L",
    period: "12 months",
    metrics: {
      leadsGenerated: 2100,
      qualifiedLeads: 735,
      franchisesSold: 52,
      totalRevenue: "₹4.2 Cr",
      roi: "4,941%"
    }
  }
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Our Work Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Proven Results That Drive{" "}
            <span className="text-primary">Franchise Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real campaigns, real results. Explore our portfolio of successful franchise 
            marketing and lead generation projects across India and USA.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setActiveCategory(cat.id);
                setShowAll(false);
              }}
              className="rounded-full"
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedItems.map((item) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {item.year}
                  </Badge>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white/80 text-sm font-medium">{item.client}</p>
                  <h3 className="text-white font-bold text-lg line-clamp-1">{item.title}</h3>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm" className="gap-2">
                    View Details <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {item.tags.map((tag, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="text-xs bg-muted/50"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border/50">
                  {item.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <result.icon className="h-4 w-4 mx-auto text-primary mb-1" />
                      <p className="text-sm font-bold text-foreground">{result.value}</p>
                      <p className="text-xs text-muted-foreground">{result.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More Button */}
        {filteredItems.length > 6 && (
          <div className="text-center mb-16">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="gap-2"
            >
              {showAll ? "Show Less" : `View All ${filteredItems.length} Projects`}
              <ArrowUpRight className={`h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
            </Button>
          </div>
        )}

        {/* ROI Case Studies Section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              <BarChart3 className="h-3 w-3 mr-1" />
              ROI Proof
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Transparent ROI from Real Campaigns
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Detailed breakdown of investment vs. returns from our franchise recruitment campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {roiCaseStudies.map((study, idx) => (
              <Card key={idx} className="border-border/50 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  {/* Brand Header */}
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border/50">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                      <img 
                        src={study.logo} 
                        alt={study.brand}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{study.brand}</h4>
                      <p className="text-xs text-muted-foreground">{study.industry}</p>
                    </div>
                  </div>

                  {/* Investment Info */}
                  <div className="flex justify-between items-center mb-4 p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="text-xs text-muted-foreground">Investment</p>
                      <p className="font-bold text-foreground">{study.investment}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Period</p>
                      <p className="font-bold text-foreground">{study.period}</p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Leads Generated</span>
                      <span className="font-semibold text-foreground">{study.metrics.leadsGenerated.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Qualified Leads</span>
                      <span className="font-semibold text-foreground">{study.metrics.qualifiedLeads.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Franchises Sold</span>
                      <span className="font-semibold text-primary">{study.metrics.franchisesSold}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Revenue Generated</span>
                      <span className="font-semibold text-foreground">{study.metrics.totalRevenue}</span>
                    </div>
                  </div>

                  {/* ROI Highlight */}
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">Campaign ROI</span>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-xl font-bold text-green-500">{study.metrics.roi}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Want similar results for your franchise brand?
          </p>
          <Button 
            size="lg" 
            className="gap-2"
            onClick={() => window.open("https://calendly.com/franchiseleadshq/30min", "_blank")}
          >
            Discuss Your Project <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
