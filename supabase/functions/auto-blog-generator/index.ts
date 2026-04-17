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

// Build a Table of Contents from H2 headings in markdown
function buildTableOfContents(content: string): string {
  const lines = content.split("\n");
  const headings: { level: number; text: string; id: string }[] = [];

  for (const line of lines) {
    const m = line.match(/^(##|###)\s+(.+?)\s*$/);
    if (m) {
      headings.push({
        level: m[1].length,
        text: m[2].replace(/[*_`]/g, "").trim(),
        id: slugifyHeading(m[2]),
      });
    }
  }

  if (headings.length < 3) return "";

  const items = headings
    .filter((h) => h.level === 2)
    .map((h) => `- [${h.text}](#${h.id})`)
    .join("\n");

  return `\n\n> 📋 **Table of Contents**\n\n${items}\n\n---\n`;
}

// Insert inline images into the markdown content at strategic positions
function injectInlineImages(content: string, imageUrls: string[]): string {
  if (imageUrls.length === 0) return content;

  const lines = content.split("\n");
  const h2Indices: number[] = [];
  lines.forEach((line, i) => {
    if (/^##\s+/.test(line)) h2Indices.push(i);
  });

  // Insert images after the 2nd and 4th H2 headings
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

async function generateBlogWithAI(researchContext: string, topicData: typeof RESEARCH_TOPICS[0]): Promise<{ title: string; content: string; excerpt: string; slug: string; tags: string[]; coverImagePrompt?: string; inlineImagePrompts?: string[] }> {
  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

  const systemPrompt = `You are a real human blogger for FranchiseLeadsPro. You write like a friend texting another friend who runs a franchise business — warm, casual, helpful, never corporate.

=== YOUR VOICE (CRITICAL) ===
- Sound like a real human friend, NOT an AI bot
- Use contractions everywhere (don't, you're, it's, that's, here's, can't)
- Use simple everyday words. If a 10-year-old wouldn't get it, rewrite it.
- Throw in casual phrases: "Look,", "Honestly,", "Here's the thing,", "Real talk,", "No joke,"
- Ask the reader questions like you're chatting with them
- Tell tiny personal-sounding stories ("I was talking to a franchise owner last week...")
- It's okay to be a little messy. Real people don't talk in perfect bullet lists.
- Mix short punchy sentences. With longer ones too. Like this.

=== HUMAN VS AI — DO THIS ===
✅ "Look, most franchise marketing is broken. Here's why."
❌ "In the contemporary franchise landscape, marketing strategies face significant challenges."

✅ "I'll be honest — I almost gave up on LinkedIn last year."
❌ "LinkedIn presents both opportunities and challenges for franchise development teams."

✅ "Their phone wouldn't stop ringing. And they hated it."
❌ "The increased call volume created operational difficulties for the organization."

=== STRUCTURE (FOLLOW LOOSELY, NOT ROBOTICALLY) ===
1. **Opening hook** — 2-3 short paragraphs. Drop the reader straight into a story or surprising thought.
2. **The real problem** — What's actually going wrong. Be specific. Tell a quick story if you can.
3. **Main content** — 3-4 H2 sections (## headings). Mix paragraphs, short lists, and one quick story per section.
4. **What to actually do** — A short numbered list of 3-5 steps. Make each one feel like advice from a friend.
5. **A real-feeling example** — Tell a 4-5 sentence story about "a franchise owner I know" or "this brand we worked with"
6. **Bottom line** — Wrap up casually. Soft mention of how franchise lead gen help works. Not pushy.

=== FORMATTING RULES ===
- Use ## for main sections (3-4 of them — they'll become Table of Contents items)
- Headings should sound like real things people would say, not textbook chapters
  ✅ "Why Most Franchise Ads Flop"
  ❌ "Examination of Franchise Advertising Effectiveness"
- Short paragraphs — 1 to 3 sentences max
- Use **bold** to highlight one or two key phrases per section
- Bullet lists when you have 3+ quick items
- Drop in 1 short blockquote (>) somewhere — like a tip, warning, or pull-quote
- Total length: 1,100-1,500 words
- DON'T over-format. Real blog posts breathe.

=== ABSOLUTELY FORBIDDEN ===
- "In today's competitive market..." / "In the ever-evolving..." / "In the modern landscape..."
- "As we all know..." / "It goes without saying..." / "Needless to say..."
- "Furthermore" / "Moreover" / "Additionally" / "In conclusion"
- "Leverage" / "Utilize" / "Synergy" / "Robust solutions" / "Cutting-edge"
- Em dashes used 5+ times (use them sparingly, max 2-3)
- Listing benefits in a perfectly parallel structure (sounds like AI)
- Using a stat without context — always explain WHY it matters
- Generic phrases like "in this article we will explore"
- Hard sales pitches — be helpful, not pushy

=== IMAGE PROMPTS ===
You also need to suggest 3 images for this post:
- coverImagePrompt: A wide hero image (16:9) describing the article topic — modern, clean, photographic style
- inlineImagePrompts: 2 supporting images that visually support specific sections
Each image prompt should be 1-2 sentences, vivid and specific. Style: "modern professional photography, soft natural lighting, business setting" or "clean flat illustration, minimalist, blue and white palette"

=== OUTPUT FORMAT ===
Return ONLY valid JSON. No prose outside the JSON. No markdown code fences.
{
  "title": "Casual, friendly title under 70 chars (no clickbait)",
  "excerpt": "1 sentence hook that sounds human (max 160 chars)",
  "content": "Full markdown blog post following the human voice rules above",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "slug": "seo-friendly-url-slug",
  "coverImagePrompt": "Vivid description of the cover image",
  "inlineImagePrompts": ["First inline image description", "Second inline image description"]
}`;

  const userPrompt = `Write a ${topicData.category.replace('-', ' ')} blog post based on this research:

${researchContext}

IMPORTANT:
- Start with this hook (adapt it): "${topicData.hook}"
- Build around this stat: "${topicData.stats}"
- Take this angle: "${topicData.angle}"
- Reference current news when relevant

Make every sentence count. This should be the kind of article people screenshot and share.`;

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
      temperature: 0.8,
      max_tokens: 4000,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`AI generation failed: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  let content = data.choices[0].message.content;
  
  try {
    // Extract JSON from markdown code blocks if present
    const jsonMatch = content.match(/```json?\s*([\s\S]*?)\s*```/);
    if (jsonMatch) {
      content = jsonMatch[1];
    }
    content = content.trim();
    
    // Try to find JSON object boundaries
    const startIdx = content.indexOf('{');
    const endIdx = content.lastIndexOf('}');
    if (startIdx !== -1 && endIdx > startIdx) {
      content = content.substring(startIdx, endIdx + 1);
    }
    
    return JSON.parse(content);
  } catch (e) {
    console.error("JSON parse error, creating fallback:", e);
    
    // Create a structured fallback
    const titleMatch = content.match(/"title"\s*:\s*"([^"]+)"/);
    const excerptMatch = content.match(/"excerpt"\s*:\s*"([^"]+)"/);
    const contentMatch = content.match(/"content"\s*:\s*"([\s\S]*?)(?:"\s*,\s*"tags"|"\s*})/);
    
    const title = titleMatch?.[1] || `${topicData.topic.charAt(0).toUpperCase() + topicData.topic.slice(1)} - Expert Guide`;
    const excerpt = excerptMatch?.[1] || topicData.hook;
    const mainContent = contentMatch?.[1]?.replace(/\\n/g, '\n').replace(/\\"/g, '"') || content;
    
    const slug = title.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .slice(0, 50);
    
    return {
      title,
      content: mainContent,
      excerpt,
      slug: `${slug}-${Date.now().toString().slice(-6)}`,
      tags: [topicData.category, "franchise", "marketing", "lead-generation", topicData.angle.split(' ')[0]],
    };
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

    // === Build TOC + inject inline images into content ===
    const toc = buildTableOfContents(blogPost.content);
    let finalContent = blogPost.content;
    if (toc) {
      // Insert TOC after first paragraph
      const firstHeadingIdx = finalContent.search(/^##\s+/m);
      if (firstHeadingIdx > 0) {
        finalContent = finalContent.slice(0, firstHeadingIdx) + toc + finalContent.slice(firstHeadingIdx);
      } else {
        finalContent = toc + finalContent;
      }
    }
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
