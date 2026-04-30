import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Comprehensive news sources covering franchise industry
const FRANCHISE_NEWS_SOURCES = [
  "https://www.franchising.com/rss/news.xml",
  "https://www.franchisedirect.com/blog/feed/",
  "https://www.entrepreneur.com/topic/franchises/feed",
  "https://www.forbes.com/franchise/feed/",
];

// Combined research topics: Marketing Tips + Industry News + Case Studies
const RESEARCH_TOPICS = [
  // MARKETING TIPS CATEGORY
  {
    category: "marketing-tips",
    topic: "franchise lead generation strategies that actually work in 2025",
    stats: "Top franchises generate 40% more leads using targeted digital campaigns vs broad marketing",
    angle: "actionable marketing tactics",
    hook: "Most franchises waste 60% of their marketing budget. Here's how to stop the bleeding."
  },
  {
    category: "marketing-tips",
    topic: "social media marketing secrets for franchise growth",
    stats: "Franchises with consistent social presence see 35% higher lead quality and 28% better engagement",
    angle: "platform-specific strategies",
    hook: "Your competitors are dominating Instagram while you're still figuring out hashtags."
  },
  {
    category: "marketing-tips",
    topic: "email marketing automation for franchise sales",
    stats: "Automated email sequences convert 3x better than manual outreach with 67% time savings",
    angle: "conversion optimization",
    hook: "That lead you ignored yesterday? Your competitor just closed them with one email."
  },
  {
    category: "marketing-tips",
    topic: "local SEO strategies for multi-location franchises",
    stats: "Optimized Google Business profiles drive 70% more foot traffic and 50% more calls",
    angle: "local visibility tactics",
    hook: "You're invisible on Google Maps. Here's how to fix it in 30 days."
  },
  {
    category: "marketing-tips",
    topic: "PPC advertising optimization for franchise leads",
    stats: "Well-optimized Google Ads campaigns achieve $45-85 cost per qualified lead vs $200+ industry average",
    angle: "ad spend efficiency",
    hook: "Stop burning cash on clicks that never convert. Here's the exact formula."
  },
  // INDUSTRY NEWS & TRENDS CATEGORY
  {
    category: "industry-news",
    topic: "franchise industry growth trends and market shifts 2025",
    stats: "Franchise industry projected to reach $860B by 2025, with 3.5% annual growth",
    angle: "market analysis and predictions",
    hook: "The franchise landscape just shifted. Are you positioned for what's coming?"
  },
  {
    category: "industry-news",
    topic: "emerging franchise sectors and investment opportunities",
    stats: "Health tech, senior care, and sustainable franchises growing 18-25% annually",
    angle: "sector analysis",
    hook: "The next billion-dollar franchise category is hiding in plain sight."
  },
  {
    category: "industry-news",
    topic: "franchise technology adoption and digital transformation",
    stats: "AI-powered franchises report 40% efficiency gains and 25% higher customer satisfaction",
    angle: "technology impact",
    hook: "Franchises stuck in 2019 are dying. Here's what the survivors are doing differently."
  },
  {
    category: "industry-news",
    topic: "franchise buyer demographics and investment patterns",
    stats: "Millennials now represent 35% of new franchisees, up from 18% in 2018",
    angle: "demographic shifts",
    hook: "The profile of your ideal franchisee just changed dramatically. Did you notice?"
  },
  {
    category: "industry-news",
    topic: "franchise regulation changes and compliance updates",
    stats: "FTC disclosure requirements and state regulations affecting 23% of franchise agreements",
    angle: "regulatory landscape",
    hook: "New franchise regulations could cost you $50,000 in fines. Here's what changed."
  },
  // CASE STUDIES & SUCCESS STORIES CATEGORY
  {
    category: "case-studies",
    topic: "franchise lead conversion strategies that doubled sales",
    stats: "Real case: Regional franchise went from 2% to 8% conversion rate in 90 days",
    angle: "conversion success story",
    hook: "They were drowning in leads but closing nothing. Then everything changed."
  },
  {
    category: "case-studies",
    topic: "multi-unit franchise expansion blueprint",
    stats: "Case study: Single-unit owner scaled to 12 locations in 4 years with strategic growth",
    angle: "expansion journey",
    hook: "He started with one location and a mountain of debt. Now he owns 12."
  },
  {
    category: "case-studies",
    topic: "franchise turnaround stories and recovery strategies",
    stats: "Struggling franchises that implemented proper marketing saw 180% revenue recovery",
    angle: "business recovery",
    hook: "This franchise was 30 days from closing. Here's how they became top performers."
  },
  {
    category: "case-studies",
    topic: "digital marketing transformation in traditional franchises",
    stats: "Legacy franchise doubled qualified leads by embracing digital-first approach",
    angle: "digital success story",
    hook: "They hadn't updated their marketing since 2015. Then they tried something radical."
  },
  {
    category: "case-studies",
    topic: "franchise discovery day optimization success",
    stats: "Optimized discovery process increased signing rate from 15% to 62%",
    angle: "sales process improvement",
    hook: "Their discovery days were a disaster. One change fixed everything."
  },
  // HIGH-PRIORITY TARGET KEYWORDS - Franchise Lead Generation USA
  {
    category: "marketing-tips",
    topic: "franchise lead generation services in USA - how to buy qualified franchise leads",
    stats: "US franchise lead gen market worth $2.1B, with top providers delivering 35% higher close rates",
    angle: "franchise lead buying guide for US market",
    hook: "You're paying $200 per lead. The smart franchisors pay $45. Here's their secret."
  },
  {
    category: "marketing-tips",
    topic: "buy franchise leads USA - complete guide to franchise lead providers and ROI",
    stats: "Franchises using specialized lead gen services see 4.2x ROI vs DIY methods",
    angle: "lead provider comparison and strategy",
    hook: "Not all franchise leads are created equal. Here's how to separate gold from garbage."
  },
  {
    category: "marketing-tips",
    topic: "best franchise lead generation companies USA 2025 - honest comparison",
    stats: "The top 5 franchise lead providers control 60% of qualified buyer traffic in the US",
    angle: "provider comparison with ROI data",
    hook: "We analyzed 15 franchise lead gen companies. Only 3 are worth your money."
  },
  // HIGH-PRIORITY TARGET KEYWORDS - LinkedIn Lead Generation
  {
    category: "marketing-tips",
    topic: "LinkedIn lead generation for franchise sales - the untapped goldmine",
    stats: "LinkedIn generates 3x more franchise buyer leads than Facebook with 80% lower cost per qualified lead",
    angle: "LinkedIn franchise prospecting strategy",
    hook: "Your next 10 franchisees are scrolling LinkedIn right now. Are you reaching them?"
  },
  {
    category: "marketing-tips",
    topic: "LinkedIn lead generation services for franchise development teams",
    stats: "Franchise brands using LinkedIn Sales Navigator close 47% more deals with 2.3x faster sales cycles",
    angle: "LinkedIn outreach automation and strategy",
    hook: "Cold calls are dead. LinkedIn InMails convert 300% better for franchise sales."
  },
  {
    category: "marketing-tips",
    topic: "how to generate franchise leads on LinkedIn without paid ads",
    stats: "Organic LinkedIn content strategy delivers 5-15 qualified franchise inquiries per month at zero ad cost",
    angle: "organic LinkedIn growth for franchisors",
    hook: "Zero ad budget. 12 qualified leads per month. All from LinkedIn. Here's the playbook."
  },
  {
    category: "marketing-tips",
    topic: "franchise development LinkedIn strategy - from connection to signed agreement",
    stats: "Top franchise developers close 1 in 8 LinkedIn conversations vs 1 in 50 from cold outreach",
    angle: "LinkedIn sales funnel for franchise development",
    hook: "Stop selling franchises on LinkedIn. Start this conversation instead."
  },
];

async function fetchRSSFeed(url: string): Promise<string[]> {
  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "FranchiseLeadsPro Research Bot/2.0" },
    });
    if (!response.ok) return [];
    
    const xml = await response.text();
    const titles: string[] = [];
    const itemMatches = xml.matchAll(/<item>[\s\S]*?<title>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/title>[\s\S]*?<\/item>/gi);
    for (const match of itemMatches) {
      if (match[1]) titles.push(match[1].trim());
    }
    return titles.slice(0, 10);
  } catch (e) {
    console.log(`Failed to fetch ${url}:`, e);
    return [];
  }
}

async function getResearchContext(): Promise<{ context: string; topicData: typeof RESEARCH_TOPICS[0] }> {
  const allHeadlines: string[] = [];
  
  // Fetch real-time news
  const feedPromises = FRANCHISE_NEWS_SOURCES.map(fetchRSSFeed);
  const results = await Promise.all(feedPromises);
  results.forEach(headlines => allHeadlines.push(...headlines));
  
  // Pick a random topic from our combined categories
  const topicData = RESEARCH_TOPICS[Math.floor(Math.random() * RESEARCH_TOPICS.length)];
  
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  
  const context = `
CURRENT DATE: ${currentDate}

LIVE FRANCHISE INDUSTRY NEWS (Reference these for timely relevance):
${allHeadlines.slice(0, 15).map((h, i) => `${i + 1}. ${h}`).join('\n')}

=== TODAY'S CONTENT ASSIGNMENT ===
CATEGORY: ${topicData.category.toUpperCase().replace('-', ' ')}
MAIN TOPIC: ${topicData.topic}
KEY DATA POINT: ${topicData.stats}
CONTENT ANGLE: ${topicData.angle}
OPENING HOOK: ${topicData.hook}

Write a blog post that combines current industry news with the assigned topic.
Make it feel like breaking insights that readers can't get anywhere else.
  `.trim();

  return { context, topicData };
}

// ============================================================
// IMAGE GENERATION + UPLOAD HELPERS
// ============================================================

async function generateImageBase64(prompt: string): Promise<string | null> {
  // Use Pollinations.ai — free, no API key, with timeout + retry handling.
  const enhancedPrompt = `professional photorealistic 16:9 blog cover, ${prompt}, clean modern vibrant business marketing photography, no text no watermarks no logos`;
  const seed = Math.floor(Math.random() * 1_000_000);
  const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(enhancedPrompt)}?width=1280&height=720&seed=${seed}&nologo=true&model=flux&enhance=true`;

  const MAX_ATTEMPTS = 3;
  const TIMEOUT_MS = 45_000;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timer);
      if (!res.ok) {
        console.error(`Pollinations attempt ${attempt} failed: ${res.status}`);
        continue;
      }
      const buf = new Uint8Array(await res.arrayBuffer());
      if (buf.byteLength < 1000) {
        console.error(`Pollinations attempt ${attempt}: response too small (${buf.byteLength}b)`);
        continue;
      }
      // Convert to base64 data URL (chunked to avoid stack overflow)
      let binary = "";
      const CHUNK = 0x8000;
      for (let i = 0; i < buf.length; i += CHUNK) {
        binary += String.fromCharCode.apply(null, buf.subarray(i, i + CHUNK) as unknown as number[]);
      }
      const b64 = btoa(binary);
      console.log(`✅ Pollinations image ok (attempt ${attempt}, ${buf.byteLength} bytes)`);
      return `data:image/jpeg;base64,${b64}`;
    } catch (e) {
      clearTimeout(timer);
      console.error(`Pollinations attempt ${attempt} error:`, (e as Error).message);
    }
  }
  console.error("All Pollinations attempts exhausted — skipping image");
  return null;
}

function dataUrlToBytes(dataUrl: string): { bytes: Uint8Array; contentType: string } {
  const match = dataUrl.match(/^data:(image\/[a-z]+);base64,(.+)$/);
  if (!match) throw new Error("Invalid data URL");
  const contentType = match[1];
  const b64 = match[2];
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return { bytes, contentType };
}

async function uploadImageToStorage(
  supabase: any,
  dataUrl: string,
  fileName: string,
): Promise<string | null> {
  try {
    const { bytes, contentType } = dataUrlToBytes(dataUrl);
    const ext = contentType.split("/")[1] || "png";
    const path = `auto/${fileName}.${ext}`;

    const { error } = await supabase.storage
      .from("blog-images")
      .upload(path, bytes, { contentType, upsert: true });

    if (error) {
      console.error("Upload error:", error);
      return null;
    }

    const { data } = supabase.storage.from("blog-images").getPublicUrl(path);
    return data.publicUrl;
  } catch (e) {
    console.error("Upload exception:", e);
    return null;
  }
}

function slugifyHeading(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

// Strip a leading H1 / duplicate title from the model's content (we render the title separately)
function stripDuplicateTitle(content: string, title: string): string {
  let c = content.trimStart();
  // Remove leading "# Title" or "## Title"
  c = c.replace(/^#{1,3}\s+.+\n+/, "");
  // Remove a first line that's literally the title
  const firstLine = c.split("\n")[0]?.replace(/[*_#`>\s]+/g, " ").trim().toLowerCase();
  const t = title.replace(/[*_#`>\s]+/g, " ").trim().toLowerCase();
  if (firstLine && t && (firstLine === t || firstLine.startsWith(t))) {
    c = c.split("\n").slice(1).join("\n").trimStart();
  }
  // Remove generic intro fluff lines
  const fluffPatterns = [
    /^in this (article|post|blog).*\n/i,
    /^today,?\s+(we|i)('| wi)?ll.*\n/i,
    /^let'?s (dive|jump|get).*\n/i,
  ];
  for (const re of fluffPatterns) c = c.replace(re, "");
  return c.trimStart();
}

// Insert inline images after specific H2 headings (skipping FAQ section)
function injectInlineImages(content: string, imageUrls: string[]): string {
  if (imageUrls.length === 0) return content;

  const lines = content.split("\n");
  const h2Indices: number[] = [];
  lines.forEach((line, i) => {
    if (/^##\s+/.test(line) && !/faq|frequently asked/i.test(line)) {
      h2Indices.push(i);
    }
  });

  // Insert images after the 2nd and 4th content H2 headings
  const insertAfter: number[] = [];
  if (h2Indices[1] !== undefined) insertAfter.push(h2Indices[1]);
  if (h2Indices[3] !== undefined) insertAfter.push(h2Indices[3]);

  let imgIdx = 0;
  const result: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    result.push(lines[i]);
    if (insertAfter.includes(i) && imgIdx < imageUrls.length) {
      result.push("");
      result.push(`![Visual illustration](${imageUrls[imgIdx]})`);
      result.push("");
      imgIdx++;
    }
  }

  return result.join("\n");
}

// Append an internal-linking section pointing to other useful pages on the site
function buildInternalLinksSection(): string {
  return `

## Want To Dig Deeper?

If this got you thinking, here are a few more spots on the site that might help:

- [Read more posts on the FranchiseLeadsPro blog](/blog) — fresh stuff on franchise growth weekly.
- [See our franchise lead generation services](/services) — what we actually do for franchise brands.
- [Buy qualified franchise leads](/buy-franchise-leads) — if you'd rather skip the DIY grind.
- [Look at real client case studies](/case-studies) — the wins, the numbers, the stories.
- [Get in touch directly](/contact) — happy to chat, no pitch deck required.
`;
}

// Ensure a FAQ section exists. If the model skipped it, generate a topical fallback.
async function ensureFaqSection(content: string, topic: string): Promise<string> {
  if (/^##\s+(faq|frequently asked)/im.test(content)) {
    return content;
  }
  console.log("⚠️  FAQ section missing — generating fallback");

  const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY");
  if (!GEMINI_API_KEY) return content;

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: "You write blog FAQs in a casual, friendly, human voice. Use contractions. Sound like a friend giving advice, not a corporate FAQ." }] },
          contents: [{
            role: "user",
            parts: [{ text: `Generate a markdown FAQ section for a blog post about: "${topic}".

Return EXACTLY this format (5 questions, no preamble, no closing):

## FAQ

### Question one ending in a question mark?
Casual 2-3 sentence answer here. Use contractions and a friendly tone.

### Question two ending in a question mark?
Casual 2-3 sentence answer.

### Question three ending in a question mark?
Casual 2-3 sentence answer.

### Question four ending in a question mark?
Casual 2-3 sentence answer.

### Question five ending in a question mark?
Casual 2-3 sentence answer.` }],
          }],
          generationConfig: { temperature: 0.8, maxOutputTokens: 1500 },
        }),
      }
    );
    if (!res.ok) return content;
    const data = await res.json();
    const faq = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    if (!faq || !/^##\s+FAQ/im.test(faq)) return content;
    return content.trimEnd() + "\n\n" + faq + "\n";
  } catch (e) {
    console.error("FAQ fallback failed:", e);
    return content;
  }
}


async function generateBlogWithAI(researchContext: string, topicData: typeof RESEARCH_TOPICS[0]): Promise<{ title: string; content: string; excerpt: string; slug: string; tags: string[]; coverImagePrompt?: string; inlineImagePrompts?: string[] }> {
  const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY");
  if (!GEMINI_API_KEY) throw new Error("GEMINI_API_KEY not configured");

  const systemPrompt = `You are a real human blogger for FranchiseLeadsPro who has been in franchise marketing for over a decade. You're writing like you're texting a friend who runs a franchise — warm, casual, helpful, never corporate.

=== YOUR VOICE (NON-NEGOTIABLE) ===
- Sound like a real human friend, NOT an AI bot
- Use contractions everywhere (don't, you're, it's, that's, here's, can't, gonna, wanna)
- Use simple everyday words. If a 10-year-old wouldn't get it, rewrite it.
- Throw in casual openers: "Look,", "Honestly,", "Here's the thing,", "Real talk,", "No joke,", "Okay so,"
- Ask the reader questions like you're chatting with them
- Tell tiny personal-sounding stories ("Last month I was on a call with a franchise owner who...")
- Be a little messy. Real people don't talk in perfect bullet lists.
- Mix short punchy sentences. With longer flowing ones too. Like this.
- Drop in a tiny opinion or hot take occasionally — that's what humans do

=== HUMAN VS AI EXAMPLES ===
✅ "Look, most franchise marketing is broken. Here's why."
❌ "In the contemporary franchise landscape, marketing strategies face significant challenges."

✅ "I almost gave up on LinkedIn last year. Glad I didn't."
❌ "LinkedIn presents both opportunities and challenges for franchise development teams."

=== CONTENT STRUCTURE (STRICT - LONG, DEEP, VALUE-PACKED) ===
DO NOT include the title or any heading at the top of the content. The title is rendered separately.
DO NOT write "in this post" or "today we'll cover" intros — just dive in.

This needs to be a LONG, DEEP, value-packed post — minimum 2,200 words, target 2,500-2,800 words. Readers should walk away thinking "wow, that was the most useful franchise post I've read in months." Every section needs MULTIPLE specific points, not one shallow takeaway.

Follow this structure (every section must be substantive — minimum word counts enforced):

1. **Opening hook** (no heading — flows from the title): 3-4 short paragraphs (~180 words) that grab attention with a story, stat, or contrarian take.

2. **## The Real Problem (Why This Matters Right Now)** — ~250 words. Lay out exactly what's broken in the industry today. Use 2-3 specific data points. Mention current dynamics (rising ad costs, AI shifts, buyer behavior changes).

3. **## What Most Franchises Get Wrong** — ~280 words. Walk through 3-4 SPECIFIC mistakes (use a sub-bullet structure or mini H3s for each). For each mistake, explain WHY it fails and what it costs them. Use **<mark>highlight</mark>** HTML around 2 key phrases.

4. **## The Framework That Actually Works** — ~350 words. Lay out a clear 4-5 step framework or system. Each step gets its own paragraph with a concrete tool or platform example (e.g., "a CRM like HubSpot or Zoho", "a scheduler like Calendly", "review software like Birdeye"). Don't just name-drop — explain HOW to use it.

5. **## Tools, Platforms & Tactics Worth Your Time** — ~250 words. Break this into a clear list of 5-7 specific tools/tactics with a 1-2 sentence explanation of when and why to use each. Be opinionated — say which ones are worth it and which aren't.

6. **## Your Action Plan (Do This In The Next 30 Days)** — ~280 words. A numbered list of 5-7 SPECIFIC steps the reader can do this week and this month. Each step needs a concrete output ("by Friday, you should have X"). Include time estimates.

7. **## A Real-Life Win** — ~220 words. A detailed case-study story showing how a franchise applied this. Use names (made-up is fine), city, specific numbers (before/after), what they did week by week, and what the outcome looked like. Make it feel real, not abstract.

8. **## Common Mistakes To Sidestep** — ~180 words. List 4-5 traps and pitfalls with a quick fix for each. Bullet format works here.

9. **## FAQ** — ~350 words. Exactly 6-7 H3 questions readers actually ask. Each answer must be 3-4 SUBSTANTIVE sentences (not 1-2). Use ### for each question. Questions MUST end with "?" and answers must sound like a friend explaining, with concrete numbers or examples where possible.

10. **## The Bottom Line** — ~150 words. Wrap up in 3-4 paragraphs. Recap the 3 biggest takeaways. Soft mention that we help franchise brands with leads. Not pushy. End with one provocative question or call-to-action sentence.

CRITICAL — COMPLETENESS:
- Every section must have a complete thought. NEVER cut a paragraph or sentence in the middle.
- The final FAQ answer and the Bottom Line MUST both end with a complete sentence and a period.
- If you're running out of space, shorten earlier sections — but never leave a half-finished sentence.
- Concrete examples > abstract concepts. Always show, then tell.

=== INTERNAL LINKING (IMPORTANT) ===
Sprinkle 2-3 of these contextual links naturally throughout the body where it actually makes sense:
- [franchise lead generation services](/services)
- [buy qualified franchise leads](/buy-franchise-leads)
- [our blog](/blog)
- [client case studies](/case-studies)
- [contact us](/contact)
- [LinkedIn lead generation](/services)
Don't dump them all in one place. Weave them into sentences naturally.

=== FORMATTING RULES ===
- ## for main sections, ### for FAQ questions only
- Headings sound like things people would actually say:
  ✅ "Why Most Franchise Ads Flop"
  ❌ "Examination of Franchise Advertising Effectiveness"
- Short paragraphs — 1 to 3 sentences max
- Use **bold** for one or two key phrases per section
- Use <mark>...</mark> (literal HTML) for 2-3 short phrases across the post that you want visually highlighted — pick the most quotable insights
- Bullet lists when you have 3+ quick items
- Drop in 2-3 short blockquotes (>) at different points — tips, warnings, or quotable lines
- **Total length: 2,200-2,800 words MINIMUM. Posts shorter than 2,000 words will be rejected.**
- Real blog posts breathe. Don't over-format, but DO go deep on every section.
- Include specific numbers, percentages, dollar amounts, and timeframes throughout — vague advice is forbidden
- ABSOLUTELY NO emojis anywhere in the content.

=== ABSOLUTELY FORBIDDEN ===
- Repeating the title at the top of the content
- ANY emoji characters (😀, 🚀, ✅, 💡, etc.) — strictly text only
- "In today's competitive market..." / "In the ever-evolving..." / "In the modern landscape..."
- "As we all know..." / "It goes without saying..." / "Needless to say..."
- "Furthermore" / "Moreover" / "Additionally" / "In conclusion"
- "Leverage" / "Utilize" / "Synergy" / "Robust solutions" / "Cutting-edge" / "Game-changer"
- Em dashes used 5+ times (max 2-3 in the whole post)
- Listing benefits in perfectly parallel structure (screams AI)
- Hard sales pitches — be helpful, not pushy
- Cutting off mid-thought or trailing off — every section ends cleanly

=== IMAGE PROMPTS ===
- coverImagePrompt: Wide hero photo (16:9), modern professional, photographic style
- inlineImagePrompts: 2 supporting images for body sections
Each prompt: 1-2 vivid sentences. Style examples: "modern professional photography, soft natural lighting, business setting" or "clean flat illustration, minimalist, orange and white palette"`;

  const userPrompt = `Write a ${topicData.category.replace('-', ' ')} blog post based on this research:

${researchContext}

CRITICAL REQUIREMENTS (your post will be REJECTED if any of these are missing):
- Length: **2,200-2,800 words MINIMUM**. Anything shorter gets rejected. Go DEEP on every section.
- Every section must have MULTIPLE specific points, examples, numbers, or tactics — never a single shallow takeaway.
- Include real numbers, percentages, dollar amounts, and timeframes throughout the post.
- Start with the hook (adapt it naturally): "${topicData.hook}"
- Reference this insight if it fits: "${topicData.stats}"
- Angle: "${topicData.angle}"
- DO NOT put the title at the top of content — start with the hook paragraph directly
- Sprinkle 2-3 internal links naturally: [services](/services), [buy franchise leads](/buy-franchise-leads), [our blog](/blog), [case studies](/case-studies), [contact](/contact)
- MANDATORY: Include a "## FAQ" section near the end with EXACTLY 5 ### questions. Each question must end with "?". Each answer 2-3 casual sentences. Example format:
  ## FAQ
  ### How much should I spend on franchise lead gen?
  Honestly, it depends. But most brands see solid results...
  ### What's the difference between MQLs and SQLs?
  Okay so MQLs are basically warm. SQLs are ready to talk money...

Every sentence must sound human, like a friend giving advice — not a corporate report.`;

  // Try preferred model first, then fallback to lite if rate-limit/quota errors hit
  const modelChain = ["gemini-2.5-flash", "gemini-2.5-flash-lite"];
  let lastError = "";

  // Gemini structured output via responseSchema
  const responseSchema = {
    type: "object",
    properties: {
      title: { type: "string", description: "Casual, friendly title under 70 chars" },
      excerpt: { type: "string", description: "1 sentence hook, max 160 chars" },
      content: { type: "string", description: "Full markdown body, 2,200-2,800 words. MUST NOT include the title or any H1. Start directly with the opening hook paragraph. Must include a ## FAQ section with 6-7 ### questions." },
      slug: { type: "string", description: "SEO-friendly URL slug, lowercase, dashes only" },
      tags: { type: "array", items: { type: "string" }, description: "5 relevant tags" },
      coverImagePrompt: { type: "string", description: "Vivid 1-2 sentence description for the cover image" },
      inlineImagePrompts: { type: "array", items: { type: "string" }, description: "Exactly 2 vivid descriptions for inline images" },
    },
    required: ["title", "excerpt", "content", "slug", "tags", "coverImagePrompt", "inlineImagePrompts"],
  };

  for (const model of modelChain) {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemPrompt }] },
          contents: [{ role: "user", parts: [{ text: userPrompt }] }],
          generationConfig: {
            temperature: 0.85,
            maxOutputTokens: 16000,
            responseMimeType: "application/json",
            responseSchema,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      lastError = `${response.status} - ${errorText}`;
      console.error(`Model ${model} failed: ${lastError}`);
      // 429 = rate limit / quota -> try fallback model
      if (response.status === 429 || response.status === 503) continue;
      throw new Error(`Gemini generation failed: ${lastError}`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      console.error(`Model ${model} returned no text:`, JSON.stringify(data).slice(0, 500));
      lastError = "Gemini did not return content";
      continue;
    }

    try {
      const parsed = JSON.parse(text);
      console.log(`✅ Generated with Gemini model: ${model}`);
      return parsed;
    } catch (e) {
      console.error("JSON parse error:", e, text?.slice(0, 500));
      lastError = "Failed to parse Gemini JSON output";
      continue;
    }
  }

  throw new Error(`Gemini generation failed across all models. Last error: ${lastError}. If this is a 429 quota error, you've hit the free-tier daily limit (1500 req/day on flash, 1500 on flash-lite) — wait until midnight Pacific or upgrade your Google AI key.`);
}

async function getLastPostTime(supabase: any): Promise<Date | null> {
  const { data: lastPost } = await supabase
    .from('blog_posts')
    .select('created_at')
    .eq('author_name', 'FranchiseLeadsPro Research Team')
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  return lastPost ? new Date(lastPost.created_at) : null;
}

async function shouldPublish(supabase: any, intervalHours: number): Promise<boolean> {
  const lastPostTime = await getLastPostTime(supabase);
  if (!lastPostTime) return true;

  const now = new Date();
  const hoursDiff = (now.getTime() - lastPostTime.getTime()) / (1000 * 60 * 60);
  
  return hoursDiff >= intervalHours;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const body = await req.json().catch(() => ({}));
    const { 
      force = false, 
      intervalHours = 24,
      publishAsDraft = false 
    } = body;

    console.log(`Auto-blog v2: force=${force}, interval=${intervalHours}h, draft=${publishAsDraft}`);

    if (!force) {
      const canPublish = await shouldPublish(supabase, intervalHours);
      if (!canPublish) {
        const lastPost = await getLastPostTime(supabase);
        const nextTime = lastPost ? new Date(lastPost.getTime() + intervalHours * 60 * 60 * 1000) : new Date();
        
        return new Response(
          JSON.stringify({ 
            success: false, 
            message: `Next post in ${Math.ceil((nextTime.getTime() - Date.now()) / (1000 * 60 * 60))} hours. Use force=true to override.`,
            nextScheduled: nextTime.toISOString(),
            intervalHours
          }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    console.log("Researching current franchise news and trends...");
    const { context: researchContext, topicData } = await getResearchContext();
    console.log(`Topic selected: [${topicData.category}] ${topicData.topic}`);

    console.log("Generating human-centric blog content...");
    const blogPost = await generateBlogWithAI(researchContext, topicData);
    console.log(`Generated: "${blogPost.title}"`);

    // === Generate images in parallel ===
    console.log("🎨 Generating cover + inline images...");
    const safeSlug = blogPost.slug.replace(/[^a-z0-9-]/gi, "").slice(0, 40);
    const ts = Date.now();

    const coverPrompt = blogPost.coverImagePrompt
      || `Wide hero photograph for a blog post titled "${blogPost.title}". Modern professional business photography, soft natural lighting, clean composition, photorealistic.`;
    const inlinePrompts = (blogPost.inlineImagePrompts && blogPost.inlineImagePrompts.length > 0)
      ? blogPost.inlineImagePrompts.slice(0, 2)
      : [
          `Clean modern flat illustration supporting the topic: ${blogPost.title}. Minimalist, blue and white palette, professional business style.`,
          `Photograph of business professionals in a modern office discussing strategy related to: ${topicData.angle}. Bright, natural light, candid feel.`,
        ];

    // Sequential generation to avoid Pollinations rate-limits (429s when parallel)
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    const coverDataUrl = await generateImageBase64(coverPrompt);
    const inlineDataUrls: (string | null)[] = [];
    for (const p of inlinePrompts) {
      await sleep(2500); // breathing room between requests
      inlineDataUrls.push(await generateImageBase64(p));
    }

    let coverUrl: string | null = null;
    if (coverDataUrl) {
      coverUrl = await uploadImageToStorage(supabase, coverDataUrl, `${safeSlug}-cover-${ts}`);
    }

    const inlineUrls: string[] = [];
    for (let i = 0; i < inlineDataUrls.length; i++) {
      const dUrl = inlineDataUrls[i];
      if (!dUrl) continue;
      const url = await uploadImageToStorage(supabase, dUrl, `${safeSlug}-inline-${i + 1}-${ts}`);
      if (url) inlineUrls.push(url);
    }

    console.log(`🖼️  Cover: ${coverUrl ? "✅" : "❌"}, Inline: ${inlineUrls.length}/2`);

    // === Assemble final content ===
    // 1. Strip any duplicate title the model accidentally added at the top
    let finalContent = stripDuplicateTitle(blogPost.content, blogPost.title);
    // 2. Ensure a FAQ section exists (generate fallback if model skipped it)
    finalContent = await ensureFaqSection(finalContent, blogPost.title);
    // 3. Inject inline images at strategic H2 positions (skipping FAQ)
    finalContent = injectInlineImages(finalContent, inlineUrls);
    // 4. Append internal-linking section at the end (above auto-rendered Related Posts)
    finalContent = finalContent.trimEnd() + "\n" + buildInternalLinksSection();
    // NOTE: Table of Contents is rendered by the React TableOfContents component
    //       (positioned in the middle of the article in BlogPost.tsx) — no markdown TOC needed.

    const wordCount = finalContent.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);

    // Ensure unique slug — append short timestamp suffix if it already exists
    let finalSlug = blogPost.slug;
    const { data: existing } = await supabase
      .from('blog_posts')
      .select('id')
      .eq('slug', finalSlug)
      .maybeSingle();
    if (existing) {
      finalSlug = `${blogPost.slug}-${Date.now().toString(36).slice(-5)}`;
    }

    const { data: savedPost, error: saveError } = await supabase
      .from('blog_posts')
      .insert({
        title: blogPost.title,
        slug: finalSlug,
        content: finalContent,
        excerpt: blogPost.excerpt,
        author_name: 'FranchiseLeadsPro Research Team',
        tags: blogPost.tags,
        is_published: !publishAsDraft,
        published_at: publishAsDraft ? null : new Date().toISOString(),
        read_time_minutes: readTime,
        seo_title: blogPost.title,
        seo_description: blogPost.excerpt,
        featured_image_url: coverUrl,
      })
      .select()
      .single();

    if (saveError) {
      throw new Error(`Database save failed: ${saveError.message}`);
    }

    console.log(`✅ Saved: ${savedPost.id} (${wordCount} words, ${readTime} min read)`);

    // Auto-ping search engines after publishing
    if (!publishAsDraft) {
      try {
        const postUrl = `https://www.franchiseleadspro.com/blog/${blogPost.slug}`;
        const sitemapUrls = [
          'https://www.franchiseleadspro.com/sitemap.xml',
          'https://www.franchiseleadspro.com/sitemap-blog.xml',
        ];

        const pingRequests: Promise<Response>[] = [];

        // Ping Google & Bing for sitemap re-crawl
        for (const sm of sitemapUrls) {
          pingRequests.push(fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(sm)}`));
          pingRequests.push(fetch(`https://www.bing.com/ping?sitemap=${encodeURIComponent(sm)}`));
        }

        // IndexNow ping to Bing/Yandex for instant discovery
        const indexNowKey = '8c9d4e5f6a7b8c9d0e1f2a3b4c5d6e7f';
        pingRequests.push(
          fetch('https://api.indexnow.org/indexnow', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              host: 'www.franchiseleadspro.com',
              key: indexNowKey,
              keyLocation: `https://www.franchiseleadspro.com/${indexNowKey}.txt`,
              urlList: [postUrl, 'https://www.franchiseleadspro.com/blog'],
            }),
          })
        );

        // Google Indexing API - submit for instant crawl
        const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
        const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
        pingRequests.push(
          fetch(`${supabaseUrl}/functions/v1/google-indexing`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${supabaseKey}`,
            },
            body: JSON.stringify({
              urls: [postUrl, 'https://www.franchiseleadspro.com/blog'],
            }),
          })
        );

        // Warm the post URL cache
        pingRequests.push(fetch(postUrl, { method: 'GET' }));

        const results = await Promise.allSettled(pingRequests);
        const ok = results.filter(r => r.status === 'fulfilled').length;
        console.log(`🔔 Search engine ping: ${ok}/${results.length} successful (includes Google Indexing API)`);
      } catch (pingErr) {
        console.error('Ping failed (non-fatal):', pingErr);
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: publishAsDraft ? "Draft saved!" : "Blog published!",
        post: {
          id: savedPost.id,
          title: savedPost.title,
          slug: savedPost.slug,
          wordCount,
          readTime,
          isDraft: publishAsDraft
        },
        category: topicData.category,
        topic: topicData.topic,
        intervalHours
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Auto-blog error:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
