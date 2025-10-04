// Supabase Edge Function: sitemap-ping
// Pings search engines to re-fetch the sitemap(s) after publishing a post

import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { slug } = await req.json().catch(() => ({ slug: null }));

    const sitemapUrls = [
      'https://www.franchiseleadshq.com/sitemap.xml',
      'https://www.franchiseleadshq.com/sitemap-blog.xml',
    ];

    const pingEndpoints = (sitemapUrl: string) => ([
      `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
      `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
    ]);

    const requests: Promise<Response>[] = [];
    for (const sm of sitemapUrls) {
      for (const url of pingEndpoints(sm)) {
        requests.push(fetch(url, { method: 'GET' }));
      }
    }

    // Optionally: also hit the post URL to warm caches
    if (slug) {
      requests.push(fetch(`https://www.franchiseleadshq.com/blog/${slug}`, { method: 'GET' }));
    }

    const results = await Promise.allSettled(requests);

    const ok = results.filter(r => r.status === 'fulfilled' && (r as PromiseFulfilledResult<Response>).value.ok).length;
    const total = results.length;

    return new Response(JSON.stringify({ success: true, ok, total }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
});
