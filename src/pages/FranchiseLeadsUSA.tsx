import { Helmet } from "react-helmet-async";
import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Users, DollarSign } from "lucide-react";

const FranchiseLeadsUSA = () => {
  return (
    <>
      <Helmet>
        <title>Franchise Leads USA - #1 Franchise Lead Generation Service in America</title>
        <meta name="description" content="Get qualified franchise leads in USA. We've generated 50,000+ franchise consultant leads across America. Expert franchise marketing agency specializing in US franchise opportunities." />
        <meta name="keywords" content="franchise leads USA, franchise lead generation USA, franchise consultant leads America, US franchise opportunities, franchise marketing agency USA, American franchise leads" />
        <link rel="canonical" href="https://www.franchiseleadspro.com/franchise-leads-usa" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Franchise Leads USA - #1 Lead Generation Service in America" />
        <meta property="og:description" content="Get qualified franchise leads in USA. 50,000+ leads generated for American franchise consultants." />
        <meta property="og:url" content="https://www.franchiseleadspro.com/franchise-leads-usa" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Franchise Leads USA - #1 Lead Generation Service in America" />
        <meta name="twitter:description" content="Get qualified franchise leads in USA. 50,000+ leads generated for American franchise consultants." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Franchise Lead Generation USA",
          "description": "Professional franchise lead generation services for consultants and franchisors across the United States",
          "provider": {
            "@type": "Organization",
            "name": "FranchiseLeadsPro",
            "url": "https://www.franchiseleadspro.com"
          },
          "areaServed": {
            "@type": "Country",
            "name": "United States"
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
                #1 Franchise Lead Generation in USA
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Transform your American franchise business with our proven lead generation system. 
                We've generated over 25,000 qualified franchise leads across all 50 states for US franchise consultants.
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold"
                onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
              >
                Get US Franchise Leads Now
              </Button>
            </div>
          </div>
        </section>

        {/* US Market Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Dominating the US Franchise Market
              </h2>
              <p className="text-xl text-gray-600">
                The United States franchise industry is worth $787 billion annually. 
                Capture your share with our targeted US franchise lead generation services.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">25,000+</h3>
                <p className="text-gray-600">US Franchise Leads Generated</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">2,500+</h3>
                <p className="text-gray-600">American Franchise Consultants Served</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">$50M+</h3>
                <p className="text-gray-600">Commission Generated for US Clients</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">50</h3>
                <p className="text-gray-600">All US States Covered</p>
              </div>
            </div>
          </div>
        </section>

        {/* US Franchise Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comprehensive US Franchise Lead Generation Services
              </h2>
              <p className="text-xl text-gray-600">
                Tailored franchise marketing strategies for the American market
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold mb-4">US Market Research</h3>
                <p className="text-gray-600 mb-4">
                  Deep analysis of American franchise opportunities, market trends, and regional preferences across all 50 states.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• State-by-state franchise market analysis</li>
                  <li>• US consumer behavior insights</li>
                  <li>• Regional franchise opportunity mapping</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold mb-4">Targeted US Lead Generation</h3>
                <p className="text-gray-600 mb-4">
                  Precision-targeted franchise leads from high-net-worth individuals and business investors across America.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• LinkedIn outreach to US prospects</li>
                  <li>• Email campaigns for American investors</li>
                  <li>• Social media targeting by US regions</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold mb-4">US Franchise Consulting</h3>
                <p className="text-gray-600 mb-4">
                  Expert guidance on US franchise regulations, SBA financing, and American market entry strategies.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• US franchise law compliance</li>
                  <li>• SBA loan facilitation</li>
                  <li>• American market positioning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* US Success Stories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Success Stories Across America
              </h2>
              <p className="text-xl text-gray-600">
                Our US franchise lead generation has helped consultants close deals from California to New York
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl">
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "FranchiseLeadsPro generated 47 qualified leads for me in Texas alone. I closed 3 deals worth $180,000 in commission from their US franchise lead generation system."
              </blockquote>
              <cite className="text-sm font-semibold text-gray-900">
                - Michael Rodriguez, Franchise Consultant, Dallas, TX
              </cite>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Dominate the US Franchise Market?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join 2,500+ American franchise consultants who trust us for qualified US franchise leads
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold"
                onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
              >
                Start Getting US Franchise Leads Today
              </Button>
            </div>
          </div>
        </section>

        <IndiaFooter />
      </div>
    </>
  );
};

export default FranchiseLeadsUSA;