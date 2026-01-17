import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Free RSS feeds and news sources for franchise industry
const FRANCHISE_NEWS_SOURCES = [
  "https://www.franchising.com/rss/news.xml",
  "https://www.franchisedirect.com/blog/feed/",
  "https://www.entrepreneur.com/topic/franchises/feed",
];

// Trending franchise topics to research
const TRENDING_TOPICS = [
  "franchise investment trends 2025",
  "fastest growing franchise industries",
  "franchise marketing strategies",
  "franchise lead generation tips",
  "franchise expansion strategies",
  "low cost franchise opportunities",
  "franchise buyer behavior",
  "franchise digital marketing",
  "franchise social media marketing",
  "franchise SEO strategies",
  "franchise PPC advertising",
  "franchise content marketing",
  "franchise email marketing",
  "franchise brand development",
  "franchise territory expansion",
  "multi-unit franchise ownership",
  "franchise financing options",
  "franchise disclosure document tips",
  "franchise sales funnel optimization",
  "franchise lead qualification",
];

async function fetchRSSFeed(url: string): Promise<string[]> {
  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "FranchiseLeadsHQ Blog Bot/1.0" },
    });
    if (!response.ok) return [];
    
    const xml = await response.text();
    // Extract titles from RSS items
    const titles: string[] = [];
    const itemMatches = xml.matchAll(/<item>[\s\S]*?<title>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/title>[\s\S]*?<\/item>/gi);
    for (const match of itemMatches) {
      if (match[1]) titles.push(match[1].trim());
    }
    return titles.slice(0, 5);
  } catch (e) {
    console.log(`Failed to fetch ${url}:`, e);
    return [];
  }
}

async function getResearchContext(): Promise<string> {
  const allHeadlines: string[] = [];
  
  // Fetch from multiple RSS sources in parallel
  const feedPromises = FRANCHISE_NEWS_SOURCES.map(fetchRSSFeed);
  const results = await Promise.all(feedPromises);
  results.forEach(headlines => allHeadlines.push(...headlines));
  
  // Pick a random trending topic
  const randomTopic = TRENDING_TOPICS[Math.floor(Math.random() * TRENDING_TOPICS.length)];
  
  return `
Current Franchise Industry Headlines:
${allHeadlines.slice(0, 10).map((h, i) => `${i + 1}. ${h}`).join('\n')}

Focus Topic for Today: ${randomTopic}

Use these headlines and the focus topic to write a relevant, timely blog post about the franchise industry.
  `.trim();
}

async function generateBlogWithAI(researchContext: string): Promise<{ title: string; content: string; excerpt: string; slug: string; tags: string[] }> {
  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

  const systemPrompt = `You are an expert franchise industry content writer for FranchiseLeads HQ, a leading franchise lead generation company.

Write a comprehensive, SEO-optimized blog post that:
1. Is 800-1200 words
2. Includes actionable insights for franchise brands
3. Naturally mentions lead generation and marketing strategies
4. Has a compelling headline
5. Includes subheadings (use ## for H2, ### for H3)
6. Is written in a professional but engaging tone
7. Ends with a call-to-action about getting qualified franchise leads

IMPORTANT: Return your response in this exact JSON format:
{
  "title": "Your Blog Post Title Here",
  "excerpt": "A compelling 150-character excerpt summarizing the post",
  "content": "The full blog post content in markdown format...",
  "tags": ["tag1", "tag2", "tag3"],
  "slug": "url-friendly-slug-here"
}`;

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
        { role: "user", content: `Based on the following research, write a fresh blog post:\n\n${researchContext}` },
      ],
      temperature: 0.8,
      max_tokens: 2000,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`AI generation failed: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  let content = data.choices[0].message.content;
  
  // Parse JSON from the response
  try {
    // Try to extract JSON from markdown code blocks if present
    const jsonMatch = content.match(/```json?\s*([\s\S]*?)\s*```/);
    if (jsonMatch) {
      content = jsonMatch[1];
    }
    return JSON.parse(content);
  } catch (e) {
    // Fallback: generate structured data from raw content
    const lines = content.split('\n');
    const title = lines[0].replace(/^#\s*/, '').trim() || "Franchise Industry Insights";
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 60);
    
    return {
      title,
      content,
      excerpt: content.substring(0, 150).replace(/[#*_]/g, '').trim() + "...",
      slug: `${slug}-${Date.now()}`,
      tags: ["franchise", "lead generation", "marketing"],
    };
  }
}

async function shouldPublishToday(supabase: any): Promise<boolean> {
  // Check when the last auto-generated post was published
  const { data: lastPost } = await supabase
    .from('blog_posts')
    .select('created_at')
    .eq('author_name', 'FranchiseLeads HQ Research Team')
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  if (!lastPost) return true; // No posts yet, publish!

  const lastPostDate = new Date(lastPost.created_at);
  const now = new Date();
  const hoursDiff = (now.getTime() - lastPostDate.getTime()) / (1000 * 60 * 60);
  
  // Publish if more than 24 hours since last post
  return hoursDiff >= 24;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Check if we should publish today
    const { force } = await req.json().catch(() => ({ force: false }));
    
    if (!force) {
      const shouldPublish = await shouldPublishToday(supabase);
      if (!shouldPublish) {
        return new Response(
          JSON.stringify({ 
            success: false, 
            message: "Already published today. Next post in 24 hours." 
          }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    console.log("Starting blog research and generation...");

    // Step 1: Research current franchise industry news
    const researchContext = await getResearchContext();
    console.log("Research context gathered:", researchContext.substring(0, 200));

    // Step 2: Generate blog post with AI
    const blogPost = await generateBlogWithAI(researchContext);
    console.log("Blog generated:", blogPost.title);

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
        is_published: true,
        published_at: new Date().toISOString(),
        read_time_minutes: Math.ceil(blogPost.content.split(' ').length / 200),
        seo_title: blogPost.title,
        seo_description: blogPost.excerpt,
      })
      .select()
      .single();

    if (saveError) {
      throw new Error(`Failed to save blog post: ${saveError.message}`);
    }

    console.log("Blog post saved successfully:", savedPost.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Blog post generated and published!",
        post: {
          id: savedPost.id,
          title: savedPost.title,
          slug: savedPost.slug,
        }
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Auto-blog generator error:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
