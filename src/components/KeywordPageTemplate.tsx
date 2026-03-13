import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Users, TrendingUp, Target, Award, Search } from 'lucide-react';

interface KeywordPageProps {
  keyword: string;
  service?: string;
  location?: string;
}

export const KeywordPageTemplate: React.FC<KeywordPageProps> = ({
  keyword,
  service = "franchise lead generation",
  location = ""
}) => {
  const capitalizeKeyword = keyword.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const pageTitle = `${capitalizeKeyword} | FranchiseLeads Pro - Expert Services`;
  const pageDescription = `Looking for ${keyword}? FranchiseLeads Pro provides expert ${service} services. Get qualified leads, proven strategies, and measurable results. Start growing today!`;
  
  const keywordSlug = keyword.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const canonicalUrl = `https://www.franchiseleadspro.com/services/${keywordSlug}`;

  const isNearMeKeyword = keyword.includes('near me') || keyword.includes('nearby');
  const isLocalKeyword = keyword.includes('local');

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="keywords" content={`${keyword}, ${service}, franchise marketing, franchise development, franchise consulting, franchise growth`} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": capitalizeKeyword,
            "description": pageDescription,
            "provider": {
              "@type": "Organization",
              "name": "FranchiseLeads Pro",
              "url": "https://www.franchiseleadspro.com"
            },
            "areaServed": isNearMeKeyword || isLocalKeyword ? "Global" : "United States",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Franchise Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": service,
                    "description": `Professional ${service} services`
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-primary via-primary-dark to-primary-light flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Search className="h-6 w-6" />
              <span className="text-lg font-medium">Expert Franchise Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {capitalizeKeyword}
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              {isNearMeKeyword ? (
                `Find the best ${service} services near you. We help franchise businesses grow with proven strategies and qualified leads.`
              ) : (
                `Professional ${service} services that deliver results. Our expert team helps franchise businesses achieve their growth goals.`
              )}
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 inline-block">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Trusted by Franchise Businesses Worldwide</span>
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-dark text-white px-8 py-4 text-lg font-semibold"
              onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Franchise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">12</div>
                <div className="text-muted-foreground">Countries Covered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our {capitalizeKeyword} Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We provide comprehensive franchise marketing solutions designed to generate qualified leads 
                and help your franchise business achieve sustainable growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Lead Generation",
                  description: "Advanced lead generation strategies that attract high-quality prospects interested in franchise opportunities.",
                  icon: <Users className="h-8 w-8" />
                },
                {
                  title: "Market Analysis",
                  description: "Comprehensive market research and competitive analysis to optimize your franchise marketing approach.",
                  icon: <TrendingUp className="h-8 w-8" />
                },
                {
                  title: "Targeted Campaigns",
                  description: "Custom marketing campaigns designed to reach your ideal franchise prospects with precision targeting.",
                  icon: <Target className="h-8 w-8" />
                },
                {
                  title: "Digital Marketing",
                  description: "Complete digital marketing solutions including SEO, PPC, social media, and content marketing.",
                  icon: <Search className="h-8 w-8" />
                },
                {
                  title: "Conversion Optimization",
                  description: "Advanced techniques to convert more prospects into qualified franchise leads and partners.",
                  icon: <Award className="h-8 w-8" />
                },
                {
                  title: "Performance Tracking",
                  description: "Detailed analytics and reporting to measure ROI and optimize campaign performance continuously.",
                  icon: <TrendingUp className="h-8 w-8" />
                }
              ].map((service, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Our {capitalizeKeyword} Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Proven track record with 297K+ leads generated",
                "Expert team with years of franchise marketing experience",
                "Customized strategies tailored to your business needs",
                "Advanced targeting and optimization techniques",
                "Comprehensive reporting and analytics",
                "Dedicated account management and support",
                "Fast implementation and quick results",
                "ROI-focused approach with measurable outcomes"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our proven 4-step process ensures you get the best results from your franchise marketing investment.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Strategy", description: "We analyze your business and create a custom marketing strategy." },
                { step: "2", title: "Implementation", description: "Our team implements proven lead generation campaigns." },
                { step: "3", title: "Optimization", description: "We continuously optimize campaigns for better performance." },
                { step: "4", title: "Results", description: "You receive qualified leads and detailed performance reports." }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources Section for SEO */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Related {capitalizeKeyword} Resources</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="/franchise-leads-usa" className="text-primary hover:underline">USA Franchise Leads</a>
              <a href="/franchise-leads-uk" className="text-primary hover:underline">UK Franchise Leads</a>
              <a href="/franchise-leads-canada" className="text-primary hover:underline">Canada Franchise Leads</a>
              <a href="/services/franchise-marketing" className="text-primary hover:underline">Franchise Marketing</a>
              <a href="/services/franchise-consulting" className="text-primary hover:underline">Franchise Consulting</a>
              <a href="/digital-marketing" className="text-primary hover:underline">Digital Marketing</a>
              <a href="/testimonials" className="text-primary hover:underline">Client Success Stories</a>
              <a href="/blog" className="text-primary hover:underline">Franchise Blog</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started with {capitalizeKeyword}?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join the hundreds of successful franchise businesses that trust FranchiseLeadsPro 
              for their marketing and lead generation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="px-8 py-4 text-lg font-semibold"
                onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
              >
                Schedule Free Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-primary"
                onClick={() => window.location.href = '/contact'}
              >
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};