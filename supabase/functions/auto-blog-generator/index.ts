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

async function generateBlogWithAI(researchContext: string, topicData: typeof RESEARCH_TOPICS[0]): Promise<{ title: string; content: string; excerpt: string; slug: string; tags: string[] }> {
  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

  const systemPrompt = `You are a TOP-TIER franchise industry writer for FranchiseLeadsPro. You write like the best business journalists—clear, punchy, insightful.

=== YOUR VOICE ===
- Write like you're explaining to a smart friend over coffee
- Be direct. No corporate fluff. Every word earns its place.
- Sound like an insider sharing secrets, not a marketer selling
- Confident but never arrogant. Helpful, never preachy.

=== STRICT WRITING RULES ===

PARAGRAPHS:
- Maximum 2-3 sentences per paragraph
- One idea per paragraph
- White space is your friend—use it generously

STRUCTURE (MUST FOLLOW):
1. HOOK (First sentence): Bold claim, surprising stat, or provocative question
   - Never start with "In today's..." or "As businesses..."
   - Jump straight into the insight
   
2. THE PROBLEM (100-150 words): What's broken and why it matters
   - Use specific numbers
   - Make the reader feel the pain
   
3. THE INSIGHT (200-300 words): Your main value—what they don't know
   - Include 2-3 subheadings (## or ###)
   - Use bullet points for lists
   - Include at least 2 real statistics
   
4. ACTION STEPS (150-200 words): Exactly what to do
   - Numbered list of 3-5 specific actions
   - Each step must be concrete, not vague
   
5. REAL EXAMPLE (100-150 words): Mini case study or scenario
   - Make it feel real with specific details
   - Show before/after or results
   
6. THE BOTTOM LINE (75-100 words): Key takeaway + soft CTA
   - Summarize in 2-3 sentences
   - Natural mention of lead generation/marketing help

=== FORMATTING RULES ===
- Use ## for main sections, ### for subsections
- Use **bold** for emphasis (sparingly)
- Use bullet points (•) for lists of 3+ items
- Include 1-2 relevant quotes (can be hypothetical industry expert)
- Total length: 1,000-1,400 words

=== FORBIDDEN ===
- "In today's competitive market..."
- "As we all know..."
- "It goes without saying..."
- Passive voice
- Long sentences (max 20 words)
- Paragraphs over 4 lines
- Generic advice without specifics
- Salesy language or hard pitches

=== OUTPUT FORMAT ===
Return ONLY valid JSON:
{
  "title": "Compelling, specific title under 60 characters",
  "excerpt": "Punchy 1-sentence hook that creates curiosity (max 140 chars)",
  "content": "Full markdown blog post following exact structure above",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "slug": "seo-friendly-url-slug"
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

    const wordCount = blogPost.content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);

    const { data: savedPost, error: saveError } = await supabase
      .from('blog_posts')
      .insert({
        title: blogPost.title,
        slug: blogPost.slug,
        content: blogPost.content,
        excerpt: blogPost.excerpt,
        author_name: 'FranchiseLeadsPro Research Team',
        tags: blogPost.tags,
        is_published: !publishAsDraft,
        published_at: publishAsDraft ? null : new Date().toISOString(),
        read_time_minutes: readTime,
        seo_title: blogPost.title,
        seo_description: blogPost.excerpt,
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
              urlList: [postUrl],
            }),
          })
        );

        // Warm the post URL cache
        pingRequests.push(fetch(postUrl, { method: 'GET' }));

        const results = await Promise.allSettled(pingRequests);
        const ok = results.filter(r => r.status === 'fulfilled').length;
        console.log(`🔔 Search engine ping: ${ok}/${results.length} successful`);
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
