import { Helmet } from "react-helmet-async";

interface FaqSchemaProps {
  content: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Extracts FAQ pairs from a blog markdown body.
 * Looks for an "## FAQ" or "## Frequently Asked Questions" section,
 * then parses ### Q? followed by paragraph answer.
 */
export const extractFaqs = (markdown: string): FaqItem[] => {
  if (!markdown) return [];
  const lines = markdown.split("\n");
  let inFaq = false;
  let currentQ = "";
  let currentA: string[] = [];
  const items: FaqItem[] = [];

  const flush = () => {
    if (currentQ && currentA.length > 0) {
      items.push({
        question: currentQ.replace(/[*_`]/g, "").trim(),
        answer: currentA.join(" ").replace(/[*_`]/g, "").replace(/\s+/g, " ").trim(),
      });
    }
    currentQ = "";
    currentA = [];
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    const h2 = line.match(/^##\s+(.+)$/);
    const h3 = line.match(/^###\s+(.+)$/);

    if (h2) {
      flush();
      inFaq = /faq|frequently asked|questions/i.test(h2[1]);
      continue;
    }

    if (!inFaq) continue;

    if (h3) {
      flush();
      currentQ = h3[1];
      continue;
    }

    if (currentQ && line.trim()) {
      currentA.push(line.trim());
    }
  }
  flush();
  return items.slice(0, 10);
};

const FaqSchema = ({ content }: FaqSchemaProps) => {
  const faqs = extractFaqs(content);
  if (faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default FaqSchema;
