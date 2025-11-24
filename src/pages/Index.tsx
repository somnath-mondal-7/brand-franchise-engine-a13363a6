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
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "FranchiseLeadsHQ",
          "url": "https://www.franchiseleadshq.com",
          "description": "Premier franchise consulting firm providing complete franchise development, recruitment, matchmaking, expansion, and support services across India & USA.",
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
            "description": "Complete franchise consulting solutions - from development to expansion. We help businesses franchise successfully and connect investors with profitable opportunities.",
            "serviceArea": ["India", "United States", "International"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Franchise Consulting Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Franchise Development",
                    "description": "Complete franchise system development including FDD, operations manuals, and legal documentation"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Franchisee Recruitment",
                    "description": "Connect with qualified franchisees through strategic recruitment and lead generation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Franchise Matchmaking",
                    "description": "Expert matchmaking services connecting investors with ideal franchise opportunities"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Franchise Expansion",
                    "description": "Strategic expansion planning for regional and international franchise growth"
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