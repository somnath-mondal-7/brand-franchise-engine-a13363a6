import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How fast will I see my first leads?",
      answer: "Most clients receive their first qualified leads within 30 days of launch. We set up your campaigns, landing pages, and follow-up systems immediately—so you're not waiting months to see traction."
    },
    {
      question: "What makes your leads different from other agencies?",
      answer: "We pre-qualify every lead before you see them. That means verified investment capacity ($50K–$500K), confirmed timeline (ready within 90 days), and genuine interest in franchising. You're not buying a list—you're getting warm introductions to serious investors."
    },
    {
      question: "Do you work with franchise consultants or franchisors?",
      answer: "Both. If you're a franchisor looking for qualified investors, we fill your pipeline. If you're a franchise consultant matching investors to brands, we bring you the buyers. Either way, you get pre-qualified leads ready to move."
    },
    {
      question: "What's included in the service?",
      answer: "Everything you need to close deals: targeted ad campaigns, landing page optimization, lead nurturing emails, CRM setup with automated follow-ups, conversion tracking, and ongoing optimization. You focus on closing—we handle the rest."
    },
    {
      question: "How do you ensure lead quality?",
      answer: "Three-stage qualification: First, we target based on financial capacity, industry interest, and location. Second, every inquiry goes through a screening questionnaire. Third, our team verifies key details before passing leads to you. Only 12% of inquiries make the cut."
    },
    {
      question: "What kind of ROI can I expect?",
      answer: "Our clients typically see 3–5x ROI within 90 days. With average franchise fees of $45,000+, even one closed deal per month covers your investment many times over. And most clients close multiple deals."
    },
    {
      question: "What if it doesn't work for me?",
      answer: "We offer a 7-day money-back guarantee and 1-month satisfaction promise. If you're not seeing results, we'll either fix it or refund you. We've worked with 500+ brands—this isn't our first rodeo."
    },
    {
      question: "How do you nurture leads who aren't ready to buy today?",
      answer: "Our multi-touch system keeps prospects warm: automated email sequences, retargeting ads, educational content, and timely check-ins. When they're ready to move (and 60% eventually are), you're the first call they make."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-muted/30">
      {/* FAQ Schema Markup */}
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
            Real answers to the questions franchisors ask before working with us.
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
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
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