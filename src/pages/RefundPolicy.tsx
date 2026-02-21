import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOBreadcrumbs from "@/components/SEOBreadcrumbs";

const RefundPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Refund & Satisfaction Guarantee Policy | FranchiseLeadsPro</title>
        <meta name="description" content="Refund and Satisfaction Guarantee Policy for FranchiseLeadsPro - Learn about our refund terms and conditions." />
        <link rel="canonical" href="https://www.franchiseleadspro.com/legal-terms/refund-satisfaction-guarantee-policy" />
      </Helmet>

      <Navigation />
      <SEOBreadcrumbs />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Refund & Satisfaction Guarantee Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Satisfaction Guarantee</h2>
            <p className="mb-4">
              At FranchiseLeadsPro, we are committed to delivering high-quality franchise leads 
              and exceptional service. We stand behind our work with a satisfaction guarantee.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Refund Eligibility</h2>
            <p className="mb-4">
              Refund requests must be submitted within 30 days of service delivery. 
              Eligibility is determined based on specific criteria and service agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Refund Process</h2>
            <p className="mb-4">
              To request a refund, please contact our customer service team with your 
              order details and reason for the refund request. We will review your case 
              and respond within 5-7 business days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Processing Time</h2>
            <p className="mb-4">
              Approved refunds will be processed within 7-10 business days and returned 
              to the original payment method.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">
              For refund requests or questions about this policy, please contact us at:
            </p>
            <p>Email: support@franchiseleadspro.com</p>
            <p>Phone: 1-800-FRANCHISE</p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default RefundPolicy;