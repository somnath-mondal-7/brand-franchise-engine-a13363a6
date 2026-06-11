import { Helmet } from "react-helmet-async";
import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";
import SEOBreadcrumbs from "@/components/SEOBreadcrumbs";

const RefundPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Refund & Satisfaction Guarantee Policy | FranchiseLeadsPro</title>
        <meta name="description" content="FranchiseLeadsPro's refund and satisfaction guarantee policy. Learn about our commitment to delivering results and our fair refund process." />
        <link rel="canonical" href="https://www.franchiseleadspro.com/legal-terms/refund-satisfaction-guarantee-policy" />
      </Helmet>

      <IndiaNav />
      <SEOBreadcrumbs />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Refund & Satisfaction Guarantee Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: 7/2/2021
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Commitment to Your Success</h2>
            <p className="mb-4">
              At FranchiseLeadsPro, we are committed to delivering measurable results for franchise brands, 
              consultants, and franchisors. Our satisfaction guarantee reflects our confidence in the quality 
              of leads and marketing services we provide.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Satisfaction Guarantee</h2>
            <p className="mb-4">
              We stand behind the quality of our franchise lead generation services. If you are not satisfied 
              with the leads or services delivered during the initial engagement period, we will work with you 
              to address your concerns and ensure you receive value from our partnership.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>All leads are verified and qualified before delivery</li>
              <li>We replace any leads that do not meet the agreed-upon qualification criteria</li>
              <li>Our team provides ongoing support to optimize your lead conversion process</li>
              <li>We offer transparent reporting on all campaign performance metrics</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Refund Eligibility</h2>
            <p className="mb-4">
              Refund requests are evaluated on a case-by-case basis. To be eligible for a refund, 
              the following conditions must be met:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>The refund request must be submitted within 30 days of the service start date</li>
              <li>You must have provided all necessary information and access required for campaign execution</li>
              <li>The service must not have been fully delivered or consumed</li>
              <li>You must have communicated your concerns to our team and allowed a reasonable opportunity to resolve them</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Non-Refundable Services</h2>
            <p className="mb-4">
              The following services are generally non-refundable once work has commenced:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Custom website design and development projects after design approval</li>
              <li>Delivered and verified franchise leads</li>
              <li>Completed consulting sessions and strategy development</li>
              <li>Third-party advertising spend (Google Ads, LinkedIn Ads, Meta Ads, etc.)</li>
              <li>Content creation that has been approved and published</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How to Request a Refund</h2>
            <p className="mb-4">
              To initiate a refund request, please follow these steps:
            </p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>Contact our support team at <a href="mailto:support@franchiseleadspro.com" className="text-primary hover:underline">support@franchiseleadspro.com</a></li>
              <li>Provide your account details and the service(s) in question</li>
              <li>Describe the reason for your refund request</li>
              <li>Our team will review your request and respond within 5 business days</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Refund Processing</h2>
            <p className="mb-4">
              Approved refunds will be processed within 10-15 business days. Refunds will be issued 
              to the original payment method used for the transaction. Partial refunds may be issued 
              for services that have been partially delivered.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Dispute Resolution</h2>
            <p className="mb-4">
              If you are dissatisfied with the outcome of your refund request, we encourage you to 
              reach out to our management team for further review. We are committed to resolving any 
              disputes in a fair and timely manner.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">
              For questions about this Refund & Satisfaction Guarantee Policy, please contact us:
            </p>
            <p>Email: <a href="mailto:support@franchiseleadspro.com" className="text-primary hover:underline">support@franchiseleadspro.com</a></p>
            <p>Phone: +1 (555) 123-4567</p>
          </section>
        </div>
      </main>

      <IndiaFooter />
    </>
  );
};

export default RefundPolicy;
