import { Helmet } from "react-helmet-async";
import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";
import SEOBreadcrumbs from "@/components/SEOBreadcrumbs";

const RefundCancellation = () => {
  return (
    <>
      <Helmet>
        <title>Refund & Cancellation Policy | FranchiseLeadsPro</title>
        <meta
          name="description"
          content="Comprehensive Refund & Cancellation Policy for FranchiseLeadsPro — subscription rules, eligibility, billing disputes, refund processing and cancellation steps."
        />
        <link rel="canonical" href="https://www.franchiseleadspro.com/legal-terms/refund-cancellation-policy" />
      </Helmet>

      <IndiaNav />
      <SEOBreadcrumbs />

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Refund & Cancellation Policy</h1>
        <p className="text-muted-foreground mb-10">Last updated: 7/2/2021</p>

        <div className="prose prose-lg max-w-none text-foreground space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Overview</h2>
            <p>
              FranchiseLeadsPro provides monthly subscription-based franchise lead generation,
              brand-building, CRM support, application development and paid advertising services.
              This policy explains how cancellations and refunds work so that every client knows
              exactly what to expect before, during and after a subscription.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Subscription Model</h2>
            <p>
              Our services are billed on a recurring monthly basis from the date you activate your
              plan. The subscription auto-renews each cycle until you cancel. Each new billing cycle
              unlocks a fresh round of campaign work, lead delivery, reporting and support hours.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. How to Cancel</h2>
            <p>To cancel your subscription:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Send a written cancellation request to <a className="text-primary hover:underline" href="mailto:support@franchiseleadspro.com">support@franchiseleadspro.com</a> from the registered email on your account.</li>
              <li>Include your business name, registered email and the reason for cancellation (optional but helpful).</li>
              <li>Submit the request at least <strong>5 business days before</strong> your next billing date to ensure it takes effect before renewal.</li>
              <li>You will receive a confirmation email within 2 business days acknowledging the cancellation.</li>
            </ol>
            <p className="mt-3">
              Once cancelled, your subscription remains active until the end of the current paid
              cycle. After that, no further charges will be made and active campaigns will be paused.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Refund Eligibility</h2>
            <p>
              Because our services are delivered as ongoing, customized monthly campaigns, refunds
              are evaluated case-by-case. You may be eligible for a partial or full refund if:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The service has not yet been started or activated for the billed cycle.</li>
              <li>There has been a verifiable failure to deliver the agreed scope of work.</li>
              <li>A duplicate charge was made due to a technical or payment processing error.</li>
              <li>The cancellation request was submitted in writing before the renewal date but was processed late on our end.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Non-Refundable Items</h2>
            <p>The following are not eligible for refund once work has commenced:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Leads that have already been generated, qualified and delivered to you.</li>
              <li>Completed strategy sessions, consulting calls or campaign setup.</li>
              <li>Custom creative work that has been approved, published or handed over.</li>
              <li>Third-party ad spend already invested into Google, Meta, LinkedIn or other ad platforms on your behalf.</li>
              <li>Application development, CRM setup or website work delivered against an agreed milestone.</li>
              <li>Services that have already been used or consumed during the active month.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Billing Disputes</h2>
            <p>
              All billing disputes must be raised in writing within <strong>7 days</strong> of the
              invoice date. After 7 days, the invoice is considered final and accepted. Please email
              billing concerns to{" "}
              <a className="text-primary hover:underline" href="mailto:support@franchiseleadspro.com">
                support@franchiseleadspro.com
              </a>{" "}
              with the invoice number, payment date and a clear description of the issue.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Refund Processing</h2>
            <p>
              Once a refund is approved, it will be initiated to your original payment method within
              5 business days and typically reflects in your account within 10–15 business days
              depending on your bank, card issuer or payment gateway. For international wire
              transfers, applicable banking fees will be deducted from the refund amount.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Service Pauses</h2>
            <p>
              If you need a temporary pause instead of full cancellation (e.g. due to seasonality or
              internal restructuring), you may request a pause of up to 30 days once every 12 months
              at no additional charge. Pauses must be requested in writing in advance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Termination by Us</h2>
            <p>
              We reserve the right to terminate or refuse service if a client violates our terms,
              engages in abusive conduct toward our team, provides false information, or operates a
              business model that is illegal, deceptive or harmful. In such cases refunds for the
              unused portion of the current cycle may be issued at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Contact</h2>
            <p>
              For all cancellations, refund requests and billing queries, contact:{" "}
              <a className="text-primary hover:underline" href="mailto:support@franchiseleadspro.com">
                support@franchiseleadspro.com
              </a>
              . Our team responds within 1–2 business days.
            </p>
          </section>
        </div>
      </main>

      <IndiaFooter />
    </>
  );
};

export default RefundCancellation;
