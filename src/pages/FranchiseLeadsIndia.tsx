import { Helmet } from "react-helmet-async";
import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Users, DollarSign } from "lucide-react";

const FranchiseLeadsIndia = () => {
  return (
    <>
      <Helmet>
        <title>Franchise Leads India - #1 Franchise Lead Generation Service in India</title>
        <meta name="description" content="Get qualified franchise leads in India. We've generated 20,000+ franchise consultant leads across Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, Kolkata. Expert Indian franchise marketing agency." />
        <meta name="keywords" content="franchise leads India, franchise lead generation India, franchise consultant leads Mumbai, Delhi franchise opportunities, Bangalore franchise leads, Chennai franchise marketing, Hyderabad franchise consultants, Indian franchise leads, franchise opportunities India, franchise business India" />
        <link rel="canonical" href="https://www.franchiseleadspro.com/franchise-leads-india" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Franchise Leads India - #1 Lead Generation Service" />
        <meta property="og:description" content="Get qualified franchise leads in India. 20,000+ leads generated for Indian franchise consultants across all major cities." />
        <meta property="og:url" content="https://www.franchiseleadspro.com/franchise-leads-india" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Franchise Leads India - #1 Lead Generation Service" />
        <meta name="twitter:description" content="Get qualified franchise leads in India. 20,000+ leads generated for Indian franchise consultants." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Franchise Lead Generation India",
          "description": "Professional franchise lead generation services for consultants and franchisors across India including Mumbai, Delhi, Bangalore, Chennai, Hyderabad",
          "provider": {
            "@type": "Organization",
            "name": "FranchiseLeadsPro",
            "url": "https://www.franchiseleadspro.com"
          },
          "areaServed": {
            "@type": "Country",
            "name": "India"
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
                #1 Franchise Lead Generation in India
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Transform your Indian franchise business with our proven lead generation system. 
                We've generated over 20,000 qualified franchise leads across Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, Kolkata, and all major Indian cities.
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold"
                onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
              >
                Get Indian Franchise Leads Now
              </Button>
            </div>
          </div>
        </section>

        {/* Indian Market Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Dominating the Indian Franchise Market
              </h2>
              <p className="text-xl text-gray-600">
                The Indian franchise industry is worth $50 billion annually with rapid growth. 
                Capture your share with our targeted Indian franchise lead generation services covering Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, Surat, Jaipur.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">20,000+</h3>
                <p className="text-gray-600">Indian Franchise Leads Generated</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">1,800+</h3>
                <p className="text-gray-600">Indian Franchise Consultants Served</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">₹200Cr+</h3>
                <p className="text-gray-600">Commission Generated for Indian Clients</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">28</h3>
                <p className="text-gray-600">Indian States & UTs Covered</p>
              </div>
            </div>
          </div>
        </section>

        {/* Indian Cities Coverage */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Franchise Lead Generation Across All Indian Cities
              </h2>
              <p className="text-xl text-gray-600">
                We generate qualified franchise leads in every major Indian city and tier-2 cities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-card text-center">
                <h3 className="text-lg font-semibold mb-2">Mumbai Franchise Leads</h3>
                <p className="text-gray-600 text-sm">Financial capital franchise opportunities</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card text-center">
                <h3 className="text-lg font-semibold mb-2">Delhi NCR Franchise Leads</h3>
                <p className="text-gray-600 text-sm">Capital region franchise market including Gurgaon, Noida</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card text-center">
                <h3 className="text-lg font-semibold mb-2">Bangalore Franchise Leads</h3>
                <p className="text-gray-600 text-sm">Silicon Valley of India franchise opportunities</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card text-center">
                <h3 className="text-lg font-semibold mb-2">Chennai Franchise Leads</h3>
                <p className="text-gray-600 text-sm">South India's business hub franchise market</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card text-center">
                <h3 className="text-lg font-semibold mb-2">Hyderabad Franchise Leads</h3>
                <p className="text-gray-600 text-sm">Cyberabad and pharma city franchise opportunities</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card text-center">
                <h3 className="text-lg font-semibold mb-2">Pune Franchise Leads</h3>
                <p className="text-gray-600 text-sm">Oxford of the East franchise market</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card text-center">
                <h3 className="text-lg font-semibold mb-2">Kolkata Franchise Leads</h3>
                <p className="text-gray-600 text-sm">Cultural capital franchise opportunities</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card text-center">
                <h3 className="text-lg font-semibold mb-2">Tier-2 Cities</h3>
                <p className="text-gray-600 text-sm">Ahmedabad, Surat, Jaipur, Lucknow, Kochi</p>
              </div>
            </div>
          </div>
        </section>

        {/* Indian Franchise Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comprehensive Indian Franchise Lead Generation Services
              </h2>
              <p className="text-xl text-gray-600">
                Tailored franchise marketing strategies for the Indian market
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold mb-4">Indian Market Research</h3>
                <p className="text-gray-600 mb-4">
                  Deep analysis of Indian franchise opportunities, market trends, and regional preferences across all states.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• State-wise franchise market analysis</li>
                  <li>• Indian consumer behavior insights</li>
                  <li>• Regional franchise opportunity mapping</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold mb-4">Targeted Indian Lead Generation</h3>
                <p className="text-gray-600 mb-4">
                  Precision-targeted franchise leads from HNI individuals and business investors across India.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• LinkedIn outreach to Indian prospects</li>
                  <li>• Email campaigns for Indian investors</li>
                  <li>• Multi-language lead generation support</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold mb-4">Indian Franchise Consulting</h3>
                <p className="text-gray-600 mb-4">
                  Expert guidance on Indian franchise regulations, GST compliance, and market entry strategies.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Indian franchise law compliance</li>
                  <li>• GST and regulatory guidance</li>
                  <li>• Indian market positioning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Indian Success Stories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Success Stories Across India
              </h2>
              <p className="text-xl text-gray-600">
                Our Indian franchise lead generation has helped consultants close deals from Mumbai to Bangalore
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl">
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "FranchiseLeadsPro generated 45 qualified leads for me across Mumbai and Pune. I closed 3 deals worth ₹25 lakhs in commission from their Indian franchise lead generation system."
              </blockquote>
              <cite className="text-sm font-semibold text-gray-900">
                - Rajesh Sharma, Franchise Consultant, Mumbai, Maharashtra
              </cite>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Dominate the Indian Franchise Market?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join 1,800+ Indian franchise consultants who trust us for qualified franchise leads across all major cities
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold"
                onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
              >
                Start Getting Indian Franchise Leads Today
              </Button>
            </div>
          </div>
        </section>

        <IndiaFooter />
      </div>
    </>
  );
};

export default FranchiseLeadsIndia;