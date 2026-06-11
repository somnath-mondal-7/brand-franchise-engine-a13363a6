import { Helmet } from "react-helmet-async";
import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";
import SEOBreadcrumbs from "@/components/SEOBreadcrumbs";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | FranchiseLeadsPro</title>
        <meta
          name="description"
          content="Detailed Terms of Service for FranchiseLeadsPro — eligibility, subscriptions, client responsibilities, deliverables, IP rights, liability and governing law."
        />
        <link rel="canonical" href="https://www.franchiseleadspro.com/legal-terms/terms-of-service" />
      </Helmet>

      <IndiaNav />
      <SEOBreadcrumbs />

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Terms of Service</h1>
        <p className="text-muted-foreground mb-10">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-lg max-w-none text-foreground space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p>
              These Terms of Service ("Terms") govern your access to and use of the FranchiseLeadsPro
              website, services and deliverables. By visiting our site, signing up, subscribing to a
              plan or engaging us in any commercial capacity, you ("Client", "you") agree to be
              bound by these Terms. If you do not agree, please do not use the services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. About Us</h2>
            <p>
              FranchiseLeadsPro is a B2B franchise marketing and lead generation consultancy
              registered in India. We provide services to franchise brands, franchisors,
              consultants, brokers and emerging franchise concepts across India, USA, UK, Canada,
              Australia, the UAE, Kuwait and other markets.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Eligibility</h2>
            <p>
              You must be at least 18 years old, legally capable of entering into a binding
              contract, and representing a legitimate business to use our services. By engaging us,
              you confirm that all information you provide is accurate and that you have the
              authority to bind the business you represent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Scope of Services</h2>
            <p>
              We provide franchise lead generation, brand-building, digital marketing, CRM support,
              application development, paid ads management and related consulting services. The
              exact scope, deliverables, timelines and KPIs of each engagement are defined in the
              proposal, statement of work or order confirmation shared with you prior to onboarding.
              Anything outside that scope is considered an add-on and may be billed separately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Subscription, Billing & Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All plans are billed on a recurring monthly basis unless otherwise stated.</li>
              <li>Payments are due in advance for the upcoming cycle and processed via secure third-party gateways.</li>
              <li>Late payments may result in suspension of services until the dues are cleared.</li>
              <li>Prices are exclusive of applicable taxes (GST, VAT, etc.) which will be added where required.</li>
              <li>We reserve the right to revise pricing with at least 30 days' written notice. Existing committed cycles remain unaffected.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Client Responsibilities</h2>
            <p>To deliver results, we need timely cooperation from your side, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing accurate brand details, FDD/franchise documents, creative assets and approvals.</li>
              <li>Granting access to relevant ad accounts, CRM systems, websites or analytics tools when needed.</li>
              <li>Assigning a single point of contact for quick decision-making.</li>
              <li>Responding to leads we deliver in a timely and professional manner.</li>
              <li>Ensuring your offers, claims and products comply with all applicable laws.</li>
            </ul>
            <p className="mt-3">
              Delays caused by missing inputs from your side are not the responsibility of
              FranchiseLeadsPro and may affect the timeline or performance of your campaigns.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Deliverables and Service Quality</h2>
            <p>
              We commit to executing every engagement with professional care, industry best
              practices and full transparency. While we work diligently to drive results, we do not
              guarantee specific outcomes such as number of franchises sold, revenue earned or
              return on investment, as these depend on many factors outside our control (your
              follow-up, sales process, pricing, market conditions, brand strength, etc.).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Intellectual Property</h2>
            <p>
              All content, copy, creative, code, strategies, frameworks, templates and tools created
              by FranchiseLeadsPro remain our intellectual property until full payment is received.
              On full payment, ownership of the final deliverables specifically created for your
              brand transfers to you, while we retain the right to use anonymized case learnings,
              templates and internal frameworks for our own business. Pre-existing tools and
              proprietary systems remain ours at all times.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential any non-public business, financial,
              operational or strategic information shared during the engagement, and to use it only
              for the purpose of delivering or receiving the services. Confidentiality survives the
              termination of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use our services for illegal, fraudulent, deceptive or harmful business activities.</li>
              <li>Misrepresent your brand, claims, pricing, FDD or offers.</li>
              <li>Reverse engineer, resell or sublicense our proprietary systems without written permission.</li>
              <li>Abuse, harass or threaten our team members in any communication channel.</li>
            </ul>
            <p className="mt-3">
              We reserve the right to suspend or terminate services immediately for any violation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">11. Cancellation and Refunds</h2>
            <p>
              Cancellations, billing disputes and refund eligibility are governed by our{" "}
              <a className="text-primary hover:underline" href="/legal-terms/refund-cancellation-policy">
                Refund &amp; Cancellation Policy
              </a>
              , which forms an integral part of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">12. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, FranchiseLeadsPro is not liable for indirect,
              incidental, consequential, special or punitive damages, including loss of revenue,
              profits, goodwill or data. Our total aggregate liability for any claim arising out of
              or related to the services is limited to the amount paid by you to us in the three
              (3) months immediately preceding the event that gave rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">13. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless FranchiseLeadsPro, its team, partners and
              affiliates from any claims, damages, losses or expenses arising out of your misuse of
              the services, violation of these Terms, or breach of any applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">14. Third-Party Platforms</h2>
            <p>
              Many of our services rely on third-party platforms such as Google Ads, Meta, LinkedIn,
              CRM tools, hosting providers and analytics services. We are not responsible for
              outages, policy changes, ad account suspensions or pricing changes imposed by those
              third parties, but we will work in good faith to mitigate any impact on your campaigns.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">15. Modifications to the Terms</h2>
            <p>
              We may update these Terms from time to time. The latest version will always be posted
              on this page with the "Last updated" date. Continued use of the services after a
              change constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">16. Governing Law and Jurisdiction</h2>
            <p>
              These Terms are governed by the laws of India. Any dispute arising out of or in
              connection with these Terms shall be subject to the exclusive jurisdiction of the
              competent courts located in India. Both parties agree to first attempt to resolve any
              dispute amicably through good-faith discussions before initiating legal proceedings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">17. Contact</h2>
            <p>
              For any questions about these Terms, please email{" "}
              <a className="text-primary hover:underline" href="mailto:support@franchiseleadspro.com">
                support@franchiseleadspro.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <IndiaFooter />
    </>
  );
};

export default TermsOfService;
