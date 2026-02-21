import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Users, DollarSign } from "lucide-react";

const FranchiseLeadsAustralia = () => {
  return (
    <>
      <Helmet>
        <title>Franchise Leads Australia - #1 Franchise Lead Generation Service in Australia</title>
        <meta name="description" content="Get qualified franchise leads in Australia. We've generated 15,000+ franchise consultant leads across Sydney, Melbourne, Brisbane, Perth, Adelaide. Expert Australian franchise marketing agency." />
        <meta name="keywords" content="franchise leads Australia, franchise lead generation Australia, franchise consultant leads Sydney, Melbourne franchise opportunities, Brisbane franchise leads, Perth franchise marketing, Adelaide franchise consultants, Australian franchise leads, franchise opportunities Australia, franchise business Australia" />
        <link rel="canonical" href="https://www.franchiseleadspro.com/franchise-leads-australia" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Franchise Leads Australia - #1 Lead Generation Service" />
        <meta property="og:description" content="Get qualified franchise leads in Australia. 15,000+ leads generated for Australian franchise consultants across all major cities." />
        <meta property="og:url" content="https://www.franchiseleadspro.com/franchise-leads-australia" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Franchise Leads Australia - #1 Lead Generation Service" />
        <meta name="twitter:description" content="Get qualified franchise leads in Australia. 15,000+ leads generated for Australian franchise consultants." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Franchise Lead Generation Australia",
          "description": "Professional franchise lead generation services for consultants and franchisors across Australia including Sydney, Melbourne, Brisbane, Perth, Adelaide",
          "provider": {
            "@type": "Organization",
            "name": "FranchiseLeadsPro",
            "url": "https://www.franchiseleadspro.com"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Australia"
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
                #1 Franchise Lead Generation in Australia
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Transform your Australian franchise business with our proven lead generation system. 
                We've generated over 15,000 qualified franchise leads across Sydney, Melbourne, Brisbane, Perth, Adelaide, and all major Australian cities.
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold"
                onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
              >
                Get Australian Franchise Leads Now
              </Button>
            </div>
          </div>
        </section>

        {/* Australian Market Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Dominating the Australian Franchise Market
              </h2>
              <p className="text-xl text-gray-600">
                The Australian franchise industry is worth $184 billion annually. 
                Capture your share with our targeted Australian franchise lead generation services covering Sydney, Melbourne, Brisbane, Perth, Adelaide, Gold Coast, Canberra, Darwin, Hobart.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">15,000+</h3>
                <p className="text-gray-600">Australian Franchise Leads Generated</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">1,200+</h3>
                <p className="text-gray-600">Australian Franchise Consultants Served</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">$25M+</h3>
                <p className="text-gray-600">Commission Generated for Australian Clients</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">8</h3>
                <p className="text-gray-600">Australian States & Territories Covered</p>
              </div>
            </div>
          </div>
        </section>

        {/* Australian Cities Coverage */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Franchise Lead Generation Across All Australian Cities
              </h2>
              <p className="text-xl text-gray-600">
                We generate qualified franchise leads in every major Australian city and regional area
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-card text-center">
                <h3 className="text-lg font-semibold mb-2">Sydney Franchise Leads</h3>
                <p className="text-gray-600 text-sm">Premium franchise opportunities in Australia's largest city</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card text-center">
                <h3 className="text-lg font-semibold mb-2">Melbourne Franchise Leads</h3>
                <p className="text-gray-600 text-sm">Quality franchise leads in Victoria's business capital</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card text-center">
                <h3 className="text-lg font-semibold mb-2">Brisbane Franchise Leads</h3>
                <p className="text-gray-600 text-sm">Growing franchise market in Queensland's hub</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card text-center">
                <h3 className="text-lg font-semibold mb-2">Perth Franchise Leads</h3>
                <p className="text-gray-600 text-sm">Western Australia's franchise opportunities</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card text-center">
                <h3 className="text-lg font-semibold mb-2">Adelaide Franchise Leads</h3>
                <p className="text-gray-600 text-sm">South Australia's franchise market</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card text-center">
                <h3 className="text-lg font-semibold mb-2">Gold Coast Franchise Leads</h3>
                <p className="text-gray-600 text-sm">Tourism and hospitality franchise opportunities</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card text-center">
                <h3 className="text-lg font-semibold mb-2">Canberra Franchise Leads</h3>
                <p className="text-gray-600 text-sm">Government sector franchise opportunities</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card text-center">
                <h3 className="text-lg font-semibold mb-2">Regional Australia</h3>
                <p className="text-gray-600 text-sm">Newcastle, Wollongong, Cairns, Townsville</p>
              </div>
            </div>
          </div>
        </section>

        {/* Australian Franchise Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comprehensive Australian Franchise Lead Generation Services
              </h2>
              <p className="text-xl text-gray-600">
                Tailored franchise marketing strategies for the Australian market
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold mb-4">Australian Market Research</h3>
                <p className="text-gray-600 mb-4">
                  Deep analysis of Australian franchise opportunities, market trends, and regional preferences across all states and territories.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• State-by-state franchise market analysis</li>
                  <li>• Australian consumer behavior insights</li>
                  <li>• Regional franchise opportunity mapping</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold mb-4">Targeted Australian Lead Generation</h3>
                <p className="text-gray-600 mb-4">
                  Precision-targeted franchise leads from high-net-worth individuals and business investors across Australia.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• LinkedIn outreach to Australian prospects</li>
                  <li>• Email campaigns for Australian investors</li>
                  <li>• Social media targeting by Australian regions</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold mb-4">Australian Franchise Consulting</h3>
                <p className="text-gray-600 mb-4">
                  Expert guidance on Australian franchise regulations, financing, and market entry strategies.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Australian franchise law compliance</li>
                  <li>• ACCC franchise code guidance</li>
                  <li>• Australian market positioning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Australian Success Stories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Success Stories Across Australia
              </h2>
              <p className="text-xl text-gray-600">
                Our Australian franchise lead generation has helped consultants close deals from Sydney to Perth
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl">
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "FranchiseLeadsPro generated 32 qualified leads for me in Melbourne and Sydney combined. I closed 2 deals worth $150,000 AUD in commission from their Australian franchise lead generation system."
              </blockquote>
              <cite className="text-sm font-semibold text-gray-900">
                - Sarah Mitchell, Franchise Consultant, Melbourne, VIC
              </cite>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Dominate the Australian Franchise Market?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join 1,200+ Australian franchise consultants who trust us for qualified franchise leads across all major cities
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold"
                onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
              >
                Start Getting Australian Franchise Leads Today
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FranchiseLeadsAustralia;