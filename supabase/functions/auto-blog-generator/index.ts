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
  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  if (!LOVABLE_API_KEY) return null;

  try {
    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-image",
        messages: [{ role: "user", content: prompt }],
        modalities: ["image", "text"],
      }),
    });

    if (!res.ok) {
      console.error("Image gen failed:", res.status, await res.text());
      return null;
    }

    const data = await res.json();
    const dataUrl = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;
    if (!dataUrl || !dataUrl.startsWith("data:image")) return null;
    return dataUrl;
  } catch (e) {
    console.error("Image gen error:", e);
    return null;
  }
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

async function generateBlogWithAI(researchContext: string, topicData: typeof RESEARCH_TOPICS[0]): Promise<{ title: string; content: string; excerpt: string; slug: string; tags: string[]; coverImagePrompt?: string; inlineImagePrompts?: string[] }> {
  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

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

=== CONTENT STRUCTURE (STRICT) ===
DO NOT include the title or any heading at the top of the content. The title is rendered separately.
DO NOT write "in this post" or "today we'll cover" intros — just dive in.

Start the content with the opening hook (a short story or surprising thought, 2-3 short paragraphs). Then follow this structure:

1. **The real problem** (no heading needed — flows from the hook)
2. **## Section 1** — main point #1 with a quick story
3. **## Section 2** — main point #2 with a tip
4. **## Section 3** — main point #3 with an example
5. **## Section 4** — actionable steps (numbered list of 3-5 steps)
6. **## A Real-Life Win** — short case-study style story (4-6 sentences)
7. **## FAQ** — exactly 5 H3 questions readers actually ask, each with a 2-3 sentence casual answer. Use ### for each question. CRITICAL: questions MUST end with a "?" and answers must sound like a friend explaining, not a textbook.
8. **## The Bottom Line** — wrap up casually in 2-3 sentences. Soft mention that we help franchise brands with leads. Not pushy.

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
- Bullet lists when you have 3+ quick items
- Drop in 1 short blockquote (>) somewhere — a tip or warning
- Total length: 1,200-1,600 words
- Real blog posts breathe. Don't over-format.

=== ABSOLUTELY FORBIDDEN ===
- Repeating the title at the top of the content
- "In today's competitive market..." / "In the ever-evolving..." / "In the modern landscape..."
- "As we all know..." / "It goes without saying..." / "Needless to say..."
- "Furthermore" / "Moreover" / "Additionally" / "In conclusion"
- "Leverage" / "Utilize" / "Synergy" / "Robust solutions" / "Cutting-edge" / "Game-changer"
- Em dashes used 5+ times (max 2-3 in the whole post)
- Listing benefits in perfectly parallel structure (screams AI)
- Hard sales pitches — be helpful, not pushy

=== IMAGE PROMPTS ===
- coverImagePrompt: Wide hero photo (16:9), modern professional, photographic style
- inlineImagePrompts: 2 supporting images for body sections
Each prompt: 1-2 vivid sentences. Style examples: "modern professional photography, soft natural lighting, business setting" or "clean flat illustration, minimalist, orange and white palette"`;

  const userPrompt = `Write a ${topicData.category.replace('-', ' ')} blog post based on this research:

${researchContext}

IMPORTANT:
- Start with this hook (adapt it naturally, don't quote it word-for-word): "${topicData.hook}"
- Reference this insight if it fits: "${topicData.stats}"
- Take this angle: "${topicData.angle}"
- Reference current news when relevant
- DO NOT put the title at the top of content — start with the hook directly
- Include a ## FAQ section with exactly 5 ### questions

Make every sentence sound human. This should feel like advice from a friend, not a corporate report.`;

  // Use tool-calling for GUARANTEED valid JSON output (fixes prior parsing bugs)
  const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "google/gemini-2.5-flash",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.85,
      max_tokens: 5000,
      tools: [
        {
          type: "function",
          function: {
            name: "publish_blog_post",
            description: "Publish a blog post with all required fields filled in.",
            parameters: {
              type: "object",
              properties: {
                title: { type: "string", description: "Casual, friendly title under 70 chars" },
                excerpt: { type: "string", description: "1 sentence hook, max 160 chars" },
                content: { type: "string", description: "Full markdown body. MUST NOT include the title or any H1. Start directly with the opening hook paragraph. Must include a ## FAQ section with 5 ### questions." },
                slug: { type: "string", description: "SEO-friendly URL slug, lowercase, dashes only" },
                tags: {
                  type: "array",
                  items: { type: "string" },
                  description: "5 relevant tags",
                },
                coverImagePrompt: { type: "string", description: "Vivid 1-2 sentence description for the cover image" },
                inlineImagePrompts: {
                  type: "array",
                  items: { type: "string" },
                  description: "Exactly 2 vivid descriptions for inline images",
                },
              },
              required: ["title", "excerpt", "content", "slug", "tags", "coverImagePrompt", "inlineImagePrompts"],
              additionalProperties: false,
            },
          },
        },
      ],
      tool_choice: { type: "function", function: { name: "publish_blog_post" } },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`AI generation failed: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
  if (!toolCall?.function?.arguments) {
    console.error("No tool call in response:", JSON.stringify(data).slice(0, 500));
    throw new Error("AI did not return a structured blog post");
  }

  try {
    const parsed = JSON.parse(toolCall.function.arguments);
    return parsed;
  } catch (e) {
    console.error("Tool args parse error:", e, toolCall.function.arguments?.slice(0, 500));
    throw new Error("Failed to parse AI tool call arguments");
  }
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

    const [coverDataUrl, ...inlineDataUrls] = await Promise.all([
      generateImageBase64(coverPrompt),
      ...inlinePrompts.map((p) => generateImageBase64(p)),
    ]);

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
    // 2. Inject inline images at strategic H2 positions (skipping FAQ)
    finalContent = injectInlineImages(finalContent, inlineUrls);
    // 3. Append internal-linking section before the bottom-line wrap-up
    //    We add it as its own section at the end (above auto-rendered Related Posts)
    finalContent = finalContent.trimEnd() + "\n" + buildInternalLinksSection();
    // NOTE: Table of Contents is now rendered by the React TableOfContents component
    //       (positioned in the middle of the article in BlogPost.tsx) — no markdown TOC injection needed.
    finalContent = injectInlineImages(finalContent, inlineUrls);

    const wordCount = finalContent.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);

    const { data: savedPost, error: saveError } = await supabase
      .from('blog_posts')
      .insert({
        title: blogPost.title,
        slug: blogPost.slug,
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
