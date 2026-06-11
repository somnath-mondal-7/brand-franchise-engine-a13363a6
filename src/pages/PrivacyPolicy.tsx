import { Helmet } from "react-helmet-async";
import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";
import SEOBreadcrumbs from "@/components/SEOBreadcrumbs";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | FranchiseLeadsPro</title>
        <meta
          name="description"
          content="Detailed Privacy Policy for FranchiseLeadsPro — how we collect, store, use, share and protect your personal and business information."
        />
        <link rel="canonical" href="https://www.franchiseleadspro.com/legal-terms/privacy-policy" />
      </Helmet>

      <IndiaNav />
      <SEOBreadcrumbs />

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Privacy Policy</h1>
        <p className="text-muted-foreground mb-10">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-lg max-w-none text-foreground space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
            <p>
              FranchiseLeadsPro ("we", "us", "our") is a B2B franchise marketing and lead generation
              service. We respect your privacy and are committed to safeguarding the personal and
              business information you share with us. This Privacy Policy explains what information
              we collect, why we collect it, how we use and protect it, and the rights you have over
              your data. By using our website, services or communicating with our team, you agree to
              the practices described here.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
            <p>We collect information in three primary ways:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Information you provide directly:</strong> name, business name, email
                address, phone number, country, franchise brand details, budget range, marketing
                goals, and any messages you send through our contact forms, WhatsApp, email or chat
                widget.
              </li>
              <li>
                <strong>Information collected automatically:</strong> IP address, device and browser
                type, operating system, referring URL, pages visited, time on page, and general
                location (city/country) inferred from your IP. This is collected through cookies and
                similar technologies.
              </li>
              <li>
                <strong>Information from third parties:</strong> publicly available business
                information (e.g. LinkedIn, company websites), analytics platforms (e.g. Google
                Analytics, Search Console), and our advertising partners when you interact with our
                ads.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
            <p>Your information is used strictly to operate and improve our services, including to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to inquiries, schedule discovery calls and send proposals.</li>
              <li>Deliver lead generation, marketing, CRM and advertising services you've subscribed to.</li>
              <li>Send service updates, performance reports, invoices and onboarding instructions.</li>
              <li>Send occasional educational content, case studies and franchise marketing insights — you can opt out anytime.</li>
              <li>Improve our website, content and campaigns through analytics.</li>
              <li>Detect, prevent and address fraud, abuse, spam and security issues.</li>
              <li>Comply with legal obligations under applicable Indian and international laws.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Legal Basis for Processing</h2>
            <p>
              We process your information based on (a) your consent when you submit a form or
              subscribe, (b) the performance of a contract when you become a client, (c) our
              legitimate business interests in operating and growing our service, and (d) compliance
              with legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Cookies and Tracking Technologies</h2>
            <p>
              We use first-party and third-party cookies for essential site functionality, analytics
              and remarketing. You can disable cookies in your browser settings; however, some parts
              of the site may not function correctly. We may use tools such as Google Analytics,
              Google Tag Manager, Meta Pixel, LinkedIn Insight Tag and similar platforms to measure
              campaign performance and audience engagement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. How We Share Information</h2>
            <p>
              We do not sell, rent or trade your personal information. We only share data with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service providers</strong> (hosting, email, CRM, analytics, payment processors) under strict confidentiality.</li>
              <li><strong>Advertising platforms</strong> (Google, Meta, LinkedIn) — only for campaign delivery and measurement, never for resale.</li>
              <li><strong>Legal authorities</strong> when required by law, court order or to protect our rights.</li>
              <li><strong>Successors</strong> in the event of a merger, acquisition or asset sale, subject to this policy.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Data Storage, Security and Retention</h2>
            <p>
              Your data is stored on secure servers (Supabase, Vercel, Cloudflare) with encryption in
              transit (HTTPS/TLS) and access controls. Only authorized team members can access client
              information. We retain personal information for as long as necessary to provide our
              services, comply with legal obligations and resolve disputes — typically up to 36
              months after the last interaction, after which it is securely deleted or anonymized.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. International Data Transfers</h2>
            <p>
              FranchiseLeadsPro is registered in India and serves clients globally (USA, UK, Canada,
              Australia, UAE, Kuwait, India and others). Your data may be processed in countries
              outside your own. Wherever data is stored, we apply the same level of protection
              described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you.</li>
              <li>Request correction of inaccurate or outdated data.</li>
              <li>Request deletion of your personal information ("right to be forgotten").</li>
              <li>Withdraw consent for marketing communications at any time.</li>
              <li>Object to or restrict certain processing activities.</li>
              <li>Request a copy of your data in a portable format.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email{" "}
              <a className="text-primary hover:underline" href="mailto:support@franchiseleadspro.com">
                support@franchiseleadspro.com
              </a>
              . We respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Children's Privacy</h2>
            <p>
              Our services are intended for business professionals aged 18 and above. We do not
              knowingly collect personal information from minors. If you believe a minor has provided
              us with data, please contact us and we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">11. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party sites. We are not responsible for the
              privacy practices of those sites and encourage you to review their policies separately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">12. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices
              or legal requirements. The "Last updated" date at the top will always show when the
              latest revision took effect. Material changes will be communicated via email or a
              notice on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">13. Contact Us</h2>
            <p>
              For any privacy-related questions, complaints or requests, please contact:
            </p>
            <p className="mt-2">
              <strong>FranchiseLeadsPro</strong><br />
              Email:{" "}
              <a className="text-primary hover:underline" href="mailto:support@franchiseleadspro.com">
                support@franchiseleadspro.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <IndiaFooter />
    </>
  );
};

export default PrivacyPolicy;
