import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Franchise Lead Generation | LinkedIn Marketing, Social Media & Web Development</title>
        <meta name="description" content="We help franchise consultants and franchisors generate qualified investor leads through LinkedIn marketing, social media campaigns (paid + organic), and high-converting franchise website development." />
        <link rel="canonical" href="https://www.franchiseleadspro.com/" />
      </Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "FranchiseLeadsPro",
          "url": "https://www.franchiseleadspro.com",
          "description": "We help franchise consultants and franchisors generate qualified investor leads through LinkedIn marketing, social media campaigns, and franchise website development.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.franchiseleadspro.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          },
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