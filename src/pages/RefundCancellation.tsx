import { Helmet } from "react-helmet-async";
import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";
import SEOBreadcrumbs from "@/components/SEOBreadcrumbs";

const RefundCancellation = () => {
  return (
    <>
      <Helmet>
        <title>Refund & Cancellation Policy | Franchiseleadspro</title>
        <meta name="description" content="Refund and cancellation policy for Franchiseleadspro subscriptions." />
        <link rel="canonical" href="https://www.franchiseleadspro.com/legal-terms/refund-cancellation-policy" />
      </Helmet>

      <IndiaNav />
      <SEOBreadcrumbs />

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Refund & Cancellation Policy</h1>
        <div className="prose prose-lg max-w-none text-foreground">
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <p className="mb-6 leading-relaxed">
            Clients may cancel their subscription at any time before the next billing cycle.
            No refunds are issued for the current active month. Disputes must be raised within
            7 days of billing. Contact us at{" "}
            <a className="text-primary hover:underline" href="mailto:support@franchiseleadspro.com">
              support@franchiseleadspro.com
            </a>{" "}
            for any billing queries.
          </p>
        </div>
      </main>

      <IndiaFooter />
    </>
  );
};

export default RefundCancellation;
