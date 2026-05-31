import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import IndiaHome from "./pages/IndiaHome";
import BrandDetail from "./pages/BrandDetail";
import About from "./pages/About";
import Services from "./pages/Services";
import DigitalMarketing from "./pages/DigitalMarketing";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogAdmin from "./pages/BlogAdmin";
import AutoBlogAdmin from "./pages/AutoBlogAdmin";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import Testimonials from "./pages/Testimonials";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyHOF from "./pages/CaseStudyHOF";
import Contact from "./pages/Contact";
import FranchiseLeadsUSA from "./pages/FranchiseLeadsUSA";
import FranchiseLeadsUK from "./pages/FranchiseLeadsUK";
import FranchiseLeadsCanada from "./pages/FranchiseLeadsCanada";
import FranchiseLeadsAustralia from "./pages/FranchiseLeadsAustralia";
import FranchiseLeadsDubai from "./pages/FranchiseLeadsDubai";
import FranchiseLeadsIndia from "./pages/FranchiseLeadsIndia";
import FranchiseLeadsKuwait from "./pages/FranchiseLeadsKuwait";
import BuyFranchiseLeads from "./pages/BuyFranchiseLeads";
import LocationPage from "./pages/LocationPage";
import KeywordPage from "./pages/KeywordPage";
import ServiceLocationPage from "./pages/ServiceLocationPage";
import CountryLocationPage from "./pages/CountryLocationPage";
import SitemapGenerator from "./pages/SitemapGenerator";
import Sitemap from "./pages/Sitemap";
import BlogSitemap from "./pages/BlogSitemap";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import NotFound from "./pages/NotFound";
import FranchiseMarketing from "./pages/FranchiseMarketing";
import FranchiseFlow from "./pages/FranchiseFlow";
import ServiceDetail from "./pages/ServiceDetail";
import ScrollToTop from "./components/ScrollToTop";
import ChatWidget from "./components/ChatWidget";
import { useLocation } from "react-router-dom";

const ConditionalChatWidget = () => {
  const location = useLocation();
  // Don't show chat widget on blog post pages — keeps reader experience clean
  if (location.pathname.startsWith("/blog/")) return null;
  return <ChatWidget />;
};

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <ConditionalChatWidget />
          <div className="india-theme">
          <Routes>
            <Route path="/" element={<IndiaHome />} />
            <Route path="/india" element={<Navigate to="/" replace />} />
            <Route path="/brands/:slug" element={<BrandDetail />} />
            <Route path="/usa" element={<Navigate to="/" replace />} />
            <Route path="/home-original" element={<Navigate to="/" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/franchise-leads-usa" element={<FranchiseLeadsUSA />} />
          <Route path="/franchise-leads-uk" element={<FranchiseLeadsUK />} />
          <Route path="/franchise-leads-canada" element={<FranchiseLeadsCanada />} />
          <Route path="/franchise-leads-australia" element={<FranchiseLeadsAustralia />} />
          <Route path="/franchise-leads-dubai" element={<FranchiseLeadsDubai />} />
          <Route path="/franchise-leads-india" element={<FranchiseLeadsIndia />} />
          <Route path="/franchise-leads-kuwait" element={<FranchiseLeadsKuwait />} />
          <Route path="/buy-franchise-leads" element={<BuyFranchiseLeads />} />
            {/* Dynamic Location Routes */}
            <Route path="/locations/:country" element={<CountryLocationPage />} />
            <Route path="/locations/:country/:location" element={<LocationPage />} />
            <Route path="/locations/:country/:location/:city" element={<LocationPage />} />
            {/* Dynamic Service + Location Routes */}
            <Route path="/:service/:country/:location" element={<ServiceLocationPage />} />
            <Route path="/:service/:country/:location/:city" element={<ServiceLocationPage />} />
            {/* Dynamic Keyword Routes */}
            <Route path="/services/:keyword" element={<KeywordPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/admin/blog" element={
              <ProtectedAdminRoute>
                <BlogAdmin />
              </ProtectedAdminRoute>
            } />
            <Route path="/admin/auto-blog" element={
              <ProtectedAdminRoute>
                <AutoBlogAdmin />
              </ProtectedAdminRoute>
            } />
            <Route path="/admin/sitemap-generator" element={
              <ProtectedAdminRoute>
                <SitemapGenerator />
              </ProtectedAdminRoute>
            } />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/hof-franchise-consulting" element={<CaseStudyHOF />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/sitemap-blog.xml" element={<BlogSitemap />} />
            <Route path="/search" element={<Navigate to="/" replace />} />
            <Route path="/legal-terms/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/legal-terms/refund-satisfaction-guarantee-policy" element={<RefundPolicy />} />
            
            <Route path="/franchise-marketing" element={<FranchiseMarketing />} />
            <Route path="/franchise-marketing/:slug" element={<ServiceDetail />} />
            <Route path="/franchise-flow" element={<FranchiseFlow />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;