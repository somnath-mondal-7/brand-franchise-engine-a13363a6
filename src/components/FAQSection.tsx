import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services do you offer for franchise lead generation?",
      answer: "We offer three core services: LinkedIn marketing (targeted outreach, Sales Navigator campaigns, thought leadership), social media marketing (paid ads + organic content on Facebook, Instagram, LinkedIn), and franchise website development & design (high-converting, SEO-optimized franchise portals with lead capture)."
    },
    {
      question: "How does LinkedIn marketing work for franchise lead generation?",
      answer: "We use LinkedIn Sales Navigator to identify high-net-worth individuals and business owners who match your ideal franchisee profile. We then run targeted connection campaigns, personalized messaging sequences, and thought leadership content to build trust and book discovery calls with serious investors."
    },
    {
      question: "Do you work with franchise consultants or franchisors?",
      answer: "Both. If you're a franchisor looking for qualified investors to grow your franchise network, we fill your pipeline. If you're a franchise consultant matching investors to brands, we bring you the buyers. Either way, you get pre-qualified leads ready to move."
    },
    {
      question: "How fast will I see my first franchise leads?",
      answer: "Most clients receive their first qualified leads within 30 days. We launch LinkedIn campaigns, social media ads, and your franchise website within the first week — so you're generating momentum immediately, not waiting months."
    },
    {
      question: "What's included in your social media marketing service?",
      answer: "We handle everything: paid ad campaigns on Facebook, Instagram, and LinkedIn with targeted franchise buyer audiences, organic content creation and posting, retargeting campaigns, A/B testing, and full performance reporting. Both paid and organic working together to maximize your lead flow."
    },
    {
      question: "Do you build franchise websites?",
      answer: "Yes. We design and develop professional franchise websites built to convert visitors into investor inquiries. Every site is mobile-first, SEO-optimized, and includes lead capture forms, territory information, investment details, and trust-building elements that serious investors look for."
    },
    {
      question: "What kind of ROI can I expect?",
      answer: "Our clients typically see 3-5x ROI within 90 days. With average franchise fees of $25,000-$50,000+, even one closed deal per month covers your marketing investment many times over. We track every lead from first touch to signed agreement."
    },
    {
      question: "What if it doesn't work for me?",
      answer: "We offer a 7-day money-back guarantee and 1-month satisfaction promise. If you're not seeing qualified franchise leads, we'll either fix it or refund you. We've worked with 500+ franchise brands — we know what works."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Got Questions?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Common questions about our LinkedIn marketing, social media, and franchise web development services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
                  aria-expanded={openFAQ === index}
                >
                  <span className="text-lg font-semibold text-card-foreground">
                    {faq.question}
                  </span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-8 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
