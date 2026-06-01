import { Helmet } from "react-helmet-async";
import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";
import SEOBreadcrumbs from "@/components/SEOBreadcrumbs";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Franchiseleadspro</title>
        <meta name="description" content="Terms of Service for Franchiseleadspro — a B2B marketing consulting service registered in India." />
        <link rel="canonical" href="https://www.franchiseleadspro.com/legal-terms/terms-of-service" />
      </Helmet>

      <IndiaNav />
      <SEOBreadcrumbs />

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>
        <div className="prose prose-lg max-w-none text-foreground">
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <p className="mb-6 leading-relaxed">
            By subscribing to our services, clients agree to a monthly recurring payment.
            Services are delivered digitally. Franchiseleadspro operates as a B2B marketing
            consulting service registered in India.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Contact</h2>
          <p>
            For any questions about these terms, email{" "}
            <a className="text-primary hover:underline" href="mailto:support@franchiseleadspro.com">
              support@franchiseleadspro.com
            </a>.
          </p>
        </div>
      </main>

      <IndiaFooter />
    </>
  );
};

export default TermsOfService;
