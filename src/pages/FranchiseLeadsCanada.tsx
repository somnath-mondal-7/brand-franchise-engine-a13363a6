import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Users, DollarSign } from "lucide-react";

const FranchiseLeadsCanada = () => {
  return (
    <>
      <Helmet>
        <title>Franchise Leads Canada - #1 Canadian Franchise Lead Generation Service</title>
        <meta name="description" content="Get qualified franchise leads in Canada. Leading Canadian franchise marketing agency generating high-quality leads for franchise consultants across all provinces and territories." />
        <meta name="keywords" content="franchise leads Canada, franchise lead generation Canada, Canadian franchise leads, Canada franchise opportunities, franchise marketing agency Canada, franchise consultant leads Canadian" />
        <link rel="canonical" href="https://www.franchiseleadspro.com/franchise-leads-canada" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Franchise Leads Canada - #1 Canadian Lead Generation Service" />
        <meta property="og:description" content="Get qualified franchise leads in Canada. Leading Canadian franchise marketing agency." />
        <meta property="og:url" content="https://www.franchiseleadspro.com/franchise-leads-canada" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Franchise Leads Canada - #1 Canadian Lead Generation Service" />
        <meta name="twitter:description" content="Get qualified franchise leads in Canada. Leading Canadian franchise marketing agency." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Franchise Lead Generation Canada",
          "description": "Professional franchise lead generation services for consultants and franchisors across Canada",
          "provider": {
            "@type": "Organization",
            "name": "FranchiseLeadsPro",
            "url": "https://www.franchiseleadspro.com"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Canada"
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
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                #1 Franchise Lead Generation in Canada
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Dominate the Canadian franchise market with our proven lead generation system. 
                We've generated over 10,000 qualified franchise leads across all Canadian provinces and territories.
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold"
                onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
              >
                Get Canadian Franchise Leads Now
              </Button>
            </div>
          </div>
        </section>

        {/* Canada Market Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Leading the Canadian Franchise Industry
              </h2>
              <p className="text-xl text-gray-600">
                The Canadian franchise sector contributes over $100 billion CAD to the economy annually. 
                Capture your share with our targeted Canadian franchise lead generation services.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">10,000+</h3>
                <p className="text-gray-600">Canadian Franchise Leads Generated</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">800+</h3>
                <p className="text-gray-600">Canadian Franchise Consultants Served</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">$35M+</h3>
                <p className="text-gray-600">CAD Commission Generated</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">13</h3>
                <p className="text-gray-600">Provinces & Territories Covered</p>
              </div>
            </div>
          </div>
        </section>

        {/* Canadian Franchise Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comprehensive Canadian Franchise Marketing Services
              </h2>
              <p className="text-xl text-gray-600">
                Tailored franchise lead generation strategies for the Canadian market
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold mb-4">Canadian Market Research</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive analysis of Canadian franchise opportunities, market trends, and provincial business preferences across Canada.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Provincial franchise market analysis</li>
                  <li>• Canadian consumer behaviour insights</li>
                  <li>• Regional franchise opportunity mapping</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold mb-4">Targeted Canadian Lead Generation</h3>
                <p className="text-gray-600 mb-4">
                  Precision-targeted franchise leads from high-net-worth Canadian individuals and business investors across all provinces.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• LinkedIn outreach to Canadian prospects</li>
                  <li>• Email campaigns for Canadian investors</li>
                  <li>• Social media targeting by Canadian regions</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold mb-4">Canadian Franchise Consulting</h3>
                <p className="text-gray-600 mb-4">
                  Expert guidance on Canadian franchise regulations, business financing, and local market entry strategies.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Canadian franchise law compliance</li>
                  <li>• Business loan facilitation</li>
                  <li>• Provincial market positioning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Canadian Success Stories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Success Stories Across Canada
              </h2>
              <p className="text-xl text-gray-600">
                Our Canadian franchise lead generation has helped consultants close deals from Vancouver to Halifax
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl">
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "FranchiseLeadsPro's Canadian-focused approach generated 28 qualified leads for me in Ontario and Quebec. I closed 2 major deals worth $120,000 CAD in commission from their Canadian franchise lead system."
              </blockquote>
              <cite className="text-sm font-semibold text-gray-900">
                - Sarah Mitchell, Franchise Consultant, Toronto, ON
              </cite>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Dominate the Canadian Franchise Market?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join 800+ Canadian franchise consultants who trust us for qualified franchise leads
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold"
                onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
              >
                Start Getting Canadian Franchise Leads Today
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FranchiseLeadsCanada;