import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
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
          "description": "Franchise lead generation agency providing SEO, PPC, and digital marketing for franchisors and franchise consultants across the USA, UK, and worldwide.",
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
            "description": "We generate qualified franchise buyer leads with performance marketing, franchise SEO, paid ads, and conversion optimization.",
            "serviceArea": ["United States", "United Kingdom", "International"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Franchise Marketing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Franchise Lead Generation",
                    "description": "High-intent franchise buyer leads through targeted campaigns and qualification"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Franchise SEO",
                    "description": "Topical authority + location SEO to rank for franchise lead generation keywords"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Franchise PPC Advertising",
                    "description": "Conversion-focused paid media to scale leads profitably"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Landing Pages & Funnels",
                    "description": "High-converting funnels that turn clicks into booked calls"
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
      <PortfolioSection />
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