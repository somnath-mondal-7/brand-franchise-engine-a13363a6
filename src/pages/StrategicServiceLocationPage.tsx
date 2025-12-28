import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { keyMarkets, serviceKeywords, getServiceLocationContent } from "@/data/strategicSEOPages";
import { MapPin, CheckCircle, Phone, ArrowRight, Star } from "lucide-react";

const StrategicServiceLocationPage = () => {
  const { service: serviceSlug, market: marketSlug } = useParams<{ service: string; market: string }>();
  
  const service = serviceKeywords.find(s => s.slug === serviceSlug);
  const market = keyMarkets.find(m => m.slug === marketSlug);
  
  if (!service || !market) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Return to Homepage</Link>
        </div>
      </div>
    );
  }
  
  const content = getServiceLocationContent(service, market);
  const isUSA = market.countryCode === "USA";
  
  const benefits = [
    `Expert ${service.name.toLowerCase()} tailored for ${market.name}`,
    `Local market knowledge and industry connections`,
    `Proven track record with ${isUSA ? "American" : "Indian"} franchises`,
    `End-to-end support from consultation to success`,
    `Access to exclusive franchise opportunities`,
  ];
  
  const process = [
    { step: "1", title: "Initial Consultation", description: "Free discovery call to understand your goals" },
    { step: "2", title: "Market Analysis", description: `Comprehensive ${market.name} market research` },
    { step: "3", title: "Strategy Development", description: "Custom franchise strategy and roadmap" },
    { step: "4", title: "Implementation", description: "Hands-on support through execution" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service.name} in ${market.name}`,
    "description": content.metaDescription,
    "provider": {
      "@type": "Organization",
      "name": "Franchise Leads HQ"
    },
    "areaServed": {
      "@type": "City",
      "name": market.name
    },
    "serviceType": service.name
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{content.title}</title>
        <meta name="description" content={content.metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://www.franchiseleadshq.com/${service.slug}/${market.slug}`} />
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
                  Get Started Today
                  <Phone className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">
                  View All Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Choose Our {service.name} in {market.name}?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {service.description}. Our team of experts brings deep knowledge of the {market.name} 
                franchise market, helping you achieve your business goals with confidence.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-muted/50 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-lg text-foreground mb-4">
                "The {service.name.toLowerCase()} team at Franchise Leads HQ helped us successfully 
                expand our franchise in {market.name}. Their local expertise was invaluable."
              </blockquote>
              <cite className="text-muted-foreground">— Satisfied Client, {market.name}</cite>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our {service.name} Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven approach to franchise success in {market.name}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-6 pt-12">
                  <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Related Markets */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            {service.name} in Other Markets
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {keyMarkets
              .filter(m => m.slug !== market.slug)
              .slice(0, 8)
              .map(m => (
                <Link
                  key={m.slug}
                  to={`/${service.slug}/${m.slug}`}
                  className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-full text-foreground transition-colors"
                >
                  {m.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready for {service.name} in {market.name}?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Take the first step towards franchise success. Get a free consultation with our {market.name} experts today.
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

export default StrategicServiceLocationPage;
