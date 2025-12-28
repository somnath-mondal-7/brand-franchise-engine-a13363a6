import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { keyMarkets, getMarketContent } from "@/data/strategicSEOPages";
import { MapPin, Building2, Users, TrendingUp, CheckCircle, Phone, ArrowRight } from "lucide-react";

const StrategicMarketPage = () => {
  const { market: marketSlug } = useParams<{ market: string }>();
  
  const market = keyMarkets.find(m => m.slug === marketSlug);
  
  if (!market) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Market Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Return to Homepage</Link>
        </div>
      </div>
    );
  }
  
  const content = getMarketContent(market);
  const isUSA = market.countryCode === "USA";
  
  const services = [
    { title: "Franchise Development", description: "Transform your business into a successful franchise system" },
    { title: "Franchisee Recruitment", description: "Find qualified investors for your franchise brand" },
    { title: "Franchise Matchmaking", description: "Connect with the perfect franchise opportunity" },
    { title: "Expansion Strategy", description: "Strategic planning for multi-unit franchise growth" },
  ];
  
  const stats = isUSA 
    ? [
        { value: "150+", label: "Franchise Projects" },
        { value: "95%", label: "Success Rate" },
        { value: "$50M+", label: "Investment Facilitated" },
        { value: "18+", label: "Years Experience" },
      ]
    : [
        { value: "200+", label: "Franchise Projects" },
        { value: "92%", label: "Success Rate" },
        { value: "₹100Cr+", label: "Investment Facilitated" },
        { value: "18+", label: "Years Experience" },
      ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Franchise Leads HQ - ${market.name}`,
    "description": content.metaDescription,
    "url": `https://www.franchiseleadshq.com/franchise-consulting/${market.slug}`,
    "areaServed": {
      "@type": "City",
      "name": market.name,
      "containedInPlace": {
        "@type": "Country",
        "name": market.country
      }
    },
    "serviceType": ["Franchise Consulting", "Franchise Development", "Franchise Matchmaking"],
    "priceRange": content.investmentRange
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{content.title}</title>
        <meta name="description" content={content.metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://www.franchiseleadshq.com/franchise-consulting/${market.slug}`} />
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.metaDescription} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">{market.name}, {market.country}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {content.heroTitle}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {content.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get Free Consultation
                  <Phone className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Franchise Consulting Services in {market.name}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive franchise solutions tailored for the {market.name} market
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Building2 className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Franchise Opportunities Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Top Franchise Opportunities in {market.name}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {market.name} offers excellent franchise investment opportunities across various industries. 
                With a population of {market.population?.toLocaleString()}+ and a thriving business ecosystem, 
                it's an ideal market for franchise expansion.
              </p>
              <div className="space-y-3 mb-8">
                {content.opportunities.map((opp, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{opp}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground">
                <strong>Investment Range:</strong> {content.investmentRange}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">{(market.population || 0) > 1000000 ? `${(market.population! / 1000000).toFixed(1)}M+` : `${(market.population! / 1000).toFixed(0)}K+`}</div>
                <div className="text-sm text-muted-foreground">Population</div>
              </Card>
              <Card className="p-6 text-center">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">High</div>
                <div className="text-sm text-muted-foreground">Growth Potential</div>
              </Card>
              <Card className="p-6 text-center col-span-2">
                <Building2 className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">Business Hub</div>
                <div className="text-sm text-muted-foreground">Major Commercial Center</div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Franchise Journey in {market.name}?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get expert guidance from our franchise consultants who understand the {market.name} market inside out.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Schedule Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default StrategicMarketPage;
