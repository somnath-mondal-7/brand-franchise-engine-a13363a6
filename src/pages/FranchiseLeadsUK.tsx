import { Helmet } from "react-helmet-async";
import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Users, DollarSign } from "lucide-react";

const FranchiseLeadsUK = () => {
  return (
    <>
      <Helmet>
        <title>Franchise Leads UK - #1 British Franchise Lead Generation Service</title>
        <meta name="description" content="Get qualified franchise leads in UK. Leading British franchise marketing agency generating high-quality leads for franchise consultants across England, Scotland, Wales, and Northern Ireland." />
        <meta name="keywords" content="franchise leads UK, franchise lead generation UK, British franchise leads, UK franchise opportunities, franchise marketing agency UK, franchise consultant leads Britain" />
        <link rel="canonical" href="https://www.franchiseleadspro.com/franchise-leads-uk" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Franchise Leads UK - #1 British Lead Generation Service" />
        <meta property="og:description" content="Get qualified franchise leads in UK. Leading British franchise marketing agency." />
        <meta property="og:url" content="https://www.franchiseleadspro.com/franchise-leads-uk" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Franchise Leads UK - #1 British Lead Generation Service" />
        <meta name="twitter:description" content="Get qualified franchise leads in UK. Leading British franchise marketing agency." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Franchise Lead Generation UK",
          "description": "Professional franchise lead generation services for consultants and franchisors across the United Kingdom",
          "provider": {
            "@type": "Organization",
            "name": "FranchiseLeadsPro",
            "url": "https://www.franchiseleadspro.com"
          },
          "areaServed": {
            "@type": "Country",
            "name": "United Kingdom"
          },
          "serviceType": "Franchise Lead Generation",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock"
          }
        })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <IndiaNav />
        
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                #1 Franchise Lead Generation in UK
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Dominate the British franchise market with our proven lead generation system. 
                We've generated over 15,000 qualified franchise leads across England, Scotland, Wales, and Northern Ireland.
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold"
                onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
              >
                Get UK Franchise Leads Now
              </Button>
            </div>
          </div>
        </section>

        {/* UK Market Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Leading the UK Franchise Industry
              </h2>
              <p className="text-xl text-gray-600">
                The UK franchise sector contributes £17.2 billion to the British economy annually. 
                Secure your market share with our targeted UK franchise lead generation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">15,000+</h3>
                <p className="text-gray-600">UK Franchise Leads Generated</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">1,200+</h3>
                <p className="text-gray-600">British Franchise Consultants Served</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">£25M+</h3>
                <p className="text-gray-600">Commission Generated for UK Clients</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">100%</h3>
                <p className="text-gray-600">UK Regions Covered</p>
              </div>
            </div>
          </div>
        </section>

        {/* UK Franchise Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comprehensive UK Franchise Marketing Services
              </h2>
              <p className="text-xl text-gray-600">
                Bespoke franchise lead generation strategies for the British market
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold mb-4">UK Market Intelligence</h3>
                <p className="text-gray-600 mb-4">
                  In-depth analysis of British franchise opportunities, market dynamics, and regional business preferences across the UK.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Regional UK franchise market analysis</li>
                  <li>• British consumer behaviour insights</li>
                  <li>• UK franchise opportunity mapping</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold mb-4">Targeted UK Lead Generation</h3>
                <p className="text-gray-600 mb-4">
                  Precision-targeted franchise leads from high-net-worth British individuals and business investors across the UK.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• LinkedIn outreach to UK prospects</li>
                  <li>• Email campaigns for British investors</li>
                  <li>• Social media targeting by UK regions</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold mb-4">UK Franchise Consulting</h3>
                <p className="text-gray-600 mb-4">
                  Expert guidance on UK franchise regulations, British business financing, and local market entry strategies.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• UK franchise law compliance</li>
                  <li>• British business loan facilitation</li>
                  <li>• Local market positioning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* UK Success Stories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Success Stories Across Britain
              </h2>
              <p className="text-xl text-gray-600">
                Our UK franchise lead generation has helped British consultants close deals from London to Edinburgh
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl">
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "FranchiseLeadsPro's UK-focused approach generated 32 qualified leads for me in Greater London. I closed 2 significant deals worth £95,000 in commission from their British franchise lead system."
              </blockquote>
              <cite className="text-sm font-semibold text-gray-900">
                - James Thompson, Franchise Consultant, London, UK
              </cite>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Dominate the UK Franchise Market?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join 1,200+ British franchise consultants who trust us for qualified UK franchise leads
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold"
                onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
              >
                Start Getting UK Franchise Leads Today
              </Button>
            </div>
          </div>
        </section>

        <IndiaFooter />
      </div>
    </>
  );
};

export default FranchiseLeadsUK;