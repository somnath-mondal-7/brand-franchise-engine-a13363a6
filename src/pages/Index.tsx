import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import SEOBreadcrumbs from "@/components/SEOBreadcrumbs";
import SEOInternalLinks from "@/components/SEOInternalLinks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Homepage Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "FranchiseLeadsHQ",
          "url": "https://www.franchiseleadshq.com",
          "description": "Leading franchise marketing agency specializing in lead generation and brand building for franchise consultants and franchisors.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.franchiseleadshq.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          },
          "mainEntity": {
            "@type": "Organization",
            "name": "FranchiseLeadsHQ",
            "description": "We don't just generate leads, we build brands. Transform your franchise business with our proven lead generation system.",
            "serviceArea": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Franchise Marketing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Franchise Lead Generation",
                    "description": "Proven system to generate qualified franchise leads"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Brand Building",
                    "description": "Complete brand development for franchise businesses"
                  }
                }
              ]
            }
          }
        })}
      </script>

      <Navigation />
      <SEOBreadcrumbs />
      <Hero />
      <ProcessSection />
      <ServicesSection />
      <BenefitsSection />
      <AboutSection />
      <TestimonialsSection />
      <BlogSection />
      {/* SEO Internal Links to improve discoverability */}
      <SEOInternalLinks />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;