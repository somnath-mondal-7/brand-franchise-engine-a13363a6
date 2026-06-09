import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import PricingSection from "@/components/PricingSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";


import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import SEOBreadcrumbs from "@/components/SEOBreadcrumbs";
import SEOInternalLinks from "@/components/SEOInternalLinks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Franchise Lead Generation Agency | FranchiseLeadsPro</title>
        <meta name="description" content="Generate qualified franchise buyer leads with LinkedIn marketing, social media & web development. Serving USA, India, UK & worldwide." />
        <link rel="canonical" href="https://www.franchiseleadspro.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "FranchiseLeadsPro",
            "url": "https://www.franchiseleadspro.com",
            "description": "We help franchise consultants and franchisors generate qualified investor leads through LinkedIn marketing, social media campaigns, and franchise website development.",
            "mainEntity": {
              "@type": "Organization",
              "name": "FranchiseLeadsPro",
              "description": "We generate qualified franchise buyer leads through LinkedIn marketing, social media campaigns, and high-converting franchise website development.",
              "serviceArea": ["United States", "United Kingdom", "International"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Franchise Marketing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "LinkedIn Marketing for Franchises",
                      "description": "Targeted LinkedIn outreach and thought leadership campaigns to connect franchise brands with qualified investors"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Social Media Marketing",
                      "description": "Paid and organic social media campaigns on Facebook, Instagram, and LinkedIn for franchise lead generation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Franchise Website Development & Design",
                      "description": "High-converting franchise websites with lead capture, SEO optimization, and mobile-first design"
                    }
                  }
                ]
              }
            }
          })}
        </script>
      </Helmet>

      <Navigation />
      <SEOBreadcrumbs />
      <Hero />
      <PortfolioSection />
      <TestimonialsSection />
      <CaseStudiesSection />
      <PricingSection />
      <SEOInternalLinks />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;