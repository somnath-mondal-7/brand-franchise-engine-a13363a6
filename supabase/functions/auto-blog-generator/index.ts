import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Multiple news sources for comprehensive research
const FRANCHISE_NEWS_SOURCES = [
  "https://www.franchising.com/rss/news.xml",
  "https://www.franchisedirect.com/blog/feed/",
  "https://www.entrepreneur.com/topic/franchises/feed",
];

// Research-backed trending topics with real industry data
const RESEARCH_TOPICS = [
  {
    topic: "franchise investment ROI",
    stats: "Average franchise ROI is 15-25% annually, with top performers reaching 30%+",
    angle: "financial analysis"
  },
  {
    topic: "franchise marketing costs",
    stats: "Franchises spend 2-5% of gross revenue on marketing, with digital now comprising 60%+",
    angle: "budget planning"
  },
  {
    topic: "franchise lead conversion rates",
    stats: "Industry average conversion is 2-5%, top franchises achieve 8-12% with proper nurturing",
    angle: "sales optimization"
  },
  {
    topic: "multi-unit franchise ownership trends",
    stats: "53% of franchise units are now owned by multi-unit operators, up from 40% in 2015",
    angle: "growth strategy"
  },
  {
    topic: "franchise discovery day strategies",
    stats: "80% of franchise agreements are signed within 30 days of Discovery Day",
    angle: "closing techniques"
  },
  {
    topic: "franchise social media marketing",
    stats: "Franchises with active social presence see 35% higher lead generation",
    angle: "digital presence"
  },
  {
    topic: "franchise territory rights",
    stats: "Exclusive territories command 15-20% higher franchise fees but improve retention by 40%",
    angle: "expansion planning"
  },
  {
    topic: "franchise buyer demographics",
    stats: "45% of new franchisees are 35-54, with corporate refugees comprising 30%+",
    angle: "target audience"
  },
  {
    topic: "franchise lead qualification",
    stats: "Pre-qualified leads close 3x faster with 60% less sales effort",
    angle: "pipeline efficiency"
  },
  {
    topic: "franchise brand recognition",
    stats: "Strong brand franchises achieve 25% faster unit growth and 15% lower franchisee turnover",
    angle: "brand building"
  },
  {
    topic: "emerging franchise industries 2025",
    stats: "Health & wellness, pet services, and senior care growing at 15-20% annually",
    angle: "market opportunity"
  },
  {
    topic: "franchise digital transformation",
    stats: "Digital-first franchises report 40% higher customer acquisition efficiency",
    angle: "technology adoption"
  },
];

async function fetchRSSFeed(url: string): Promise<string[]> {
  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "FranchiseLeadsHQ Blog Bot/1.0" },
    });
    if (!response.ok) return [];
    
    const xml = await response.text();
    const titles: string[] = [];
    const itemMatches = xml.matchAll(/<item>[\s\S]*?<title>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/title>[\s\S]*?<\/item>/gi);
    for (const match of itemMatches) {
      if (match[1]) titles.push(match[1].trim());
    }
    return titles.slice(0, 8);
  } catch (e) {
    console.log(`Failed to fetch ${url}:`, e);
    return [];
  }
}

async function getResearchContext(): Promise<{ context: string; topicData: typeof RESEARCH_TOPICS[0] }> {
  const allHeadlines: string[] = [];
  
  const feedPromises = FRANCHISE_NEWS_SOURCES.map(fetchRSSFeed);
  const results = await Promise.all(feedPromises);
  results.forEach(headlines => allHeadlines.push(...headlines));
  
  // Pick a research topic with real data
  const topicData = RESEARCH_TOPICS[Math.floor(Math.random() * RESEARCH_TOPICS.length)];
  
  const context = `
CURRENT FRANCHISE INDUSTRY NEWS (Use these for timely relevance):
${allHeadlines.slice(0, 12).map((h, i) => `${i + 1}. ${h}`).join('\n')}

TODAY'S FOCUS TOPIC: ${topicData.topic}
INDUSTRY DATA: ${topicData.stats}
CONTENT ANGLE: ${topicData.angle}

Write a blog post that connects current news to the focus topic with actionable insights.
  `.trim();

  return { context, topicData };
}

async function generateBlogWithAI(researchContext: string, topicData: typeof RESEARCH_TOPICS[0]): Promise<{ title: string; content: string; excerpt: string; slug: string; tags: string[] }> {
  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

  const systemPrompt = `You are a senior franchise industry journalist and marketing strategist writing for FranchiseLeads HQ, the premier franchise lead generation platform.

YOUR WRITING STYLE:
- Write like you're having a coffee chat with a smart franchise executive
- Use SHORT paragraphs (2-3 sentences max)
- Include real numbers, percentages, and data points
- Tell mini-stories and use relatable examples
- Be direct and actionable—no fluff or filler
- Sound confident but not salesy

STRICT FORMATTING RULES:
1. HOOK: Start with a bold statement, surprising stat, or provocative question (NO generic intros)
2. STRUCTURE: Use clear H2 (##) and H3 (###) headings every 150-200 words
3. PARAGRAPHS: Never more than 3 sentences. White space is your friend.
4. BULLETS: Use bullet points for lists, tips, and key takeaways
5. DATA: Include at least 3 specific statistics or percentages
6. EXAMPLES: Include at least 2 real-world scenarios or case studies
7. QUOTES: Add 1-2 fictional but realistic industry quotes
8. CTA: End with a clear, value-focused call-to-action

CONTENT REQUIREMENTS:
- Length: 900-1,200 words
- Include a "Key Takeaways" or "Action Steps" section
- Add a "The Bottom Line" conclusion section
- Reference current trends and timely insights
- Naturally mention lead generation challenges and solutions

FORBIDDEN:
- Generic openings like "In today's competitive market..."
- Vague statements without specifics
- Long-winded explanations
- Passive voice
- Corporate jargon without explanation

IMPORTANT: Return ONLY valid JSON in this exact format:
{
  "title": "Compelling, Specific Title (Under 60 chars)",
  "excerpt": "Punchy 1-sentence summary that makes people want to read more (140 chars max)",
  "content": "Full blog post in markdown with proper ## and ### headings, bullet points, and formatting",
  "tags": ["tag1", "tag2", "tag3", "tag4"],
  "slug": "url-friendly-slug-with-keywords"
}`;

  const userPrompt = `Write a high-impact blog post based on this research:

${researchContext}

Remember:
- This is about ${topicData.topic}
- Key stat to build around: ${topicData.stats}
- Angle to take: ${topicData.angle}

Make it scannable, insightful, and impossible to stop reading. Every sentence must earn its place.`;

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
      temperature: 0.7,
      max_tokens: 3000,
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
    // Clean up any leading/trailing whitespace
    content = content.trim();
    return JSON.parse(content);
  } catch (e) {
    console.error("JSON parse error, attempting extraction:", e);
    // Try to extract JSON object from the content
    const jsonObjectMatch = content.match(/\{[\s\S]*"title"[\s\S]*"content"[\s\S]*\}/);
    if (jsonObjectMatch) {
      try {
        return JSON.parse(jsonObjectMatch[0]);
      } catch (e2) {
        console.error("Second parse attempt failed:", e2);
      }
    }
    
    // Final fallback
    const lines = content.split('\n');
    const title = lines[0].replace(/^#\s*/, '').replace(/["\*]/g, '').trim() || `Franchise ${topicData.topic} Insights`;
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 50);
    
    return {
      title,
      content,
      excerpt: `Expert insights on ${topicData.topic} with actionable strategies for franchise growth.`,
      slug: `${slug}-${Date.now()}`,
      tags: ["franchise", "lead generation", topicData.angle.replace(' ', '-'), "marketing"],
    };
  }
}

async function getLastPostTime(supabase: any): Promise<Date | null> {
  const { data: lastPost } = await supabase
    .from('blog_posts')
    .select('created_at')
    .eq('author_name', 'FranchiseLeads HQ Research Team')
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

    // Parse request body with flexible options
    const body = await req.json().catch(() => ({}));
    const { 
      force = false, 
      intervalHours = 24,  // Default 24 hours, can be 12, 24, 48, etc.
      publishAsDraft = false 
    } = body;

    console.log(`Auto-blog request: force=${force}, interval=${intervalHours}h, draft=${publishAsDraft}`);

    if (!force) {
      const canPublish = await shouldPublish(supabase, intervalHours);
      if (!canPublish) {
        const lastPost = await getLastPostTime(supabase);
        const nextTime = lastPost ? new Date(lastPost.getTime() + intervalHours * 60 * 60 * 1000) : new Date();
        
        return new Response(
          JSON.stringify({ 
            success: false, 
            message: `Next post scheduled for ${nextTime.toISOString()}. Use force=true to override.`,
            nextScheduled: nextTime.toISOString(),
            intervalHours
          }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    console.log("Starting research and content generation...");

    // Step 1: Research current trends
    const { context: researchContext, topicData } = await getResearchContext();
    console.log("Research gathered for topic:", topicData.topic);

    // Step 2: Generate high-quality blog post
    const blogPost = await generateBlogWithAI(researchContext, topicData);
    console.log("Generated:", blogPost.title);

    // Step 3: Save to database
    const { data: savedPost, error: saveError } = await supabase
      .from('blog_posts')
      .insert({
        title: blogPost.title,
        slug: blogPost.slug,
        content: blogPost.content,
        excerpt: blogPost.excerpt,
        author_name: 'FranchiseLeads HQ Research Team',
        tags: blogPost.tags,
        is_published: !publishAsDraft,
        published_at: publishAsDraft ? null : new Date().toISOString(),
        read_time_minutes: Math.ceil(blogPost.content.split(/\s+/).length / 200),
        seo_title: blogPost.title,
        seo_description: blogPost.excerpt,
      })
      .select()
      .single();

    if (saveError) {
      throw new Error(`Failed to save: ${saveError.message}`);
    }

    console.log("Saved successfully:", savedPost.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: publishAsDraft ? "Blog post saved as draft!" : "Blog post published!",
        post: {
          id: savedPost.id,
          title: savedPost.title,
          slug: savedPost.slug,
          isDraft: publishAsDraft
        },
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