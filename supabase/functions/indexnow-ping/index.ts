// Supabase Edge Function: indexnow-ping
// Pings IndexNow API (Bing, Yandex, Seznam) for instant URL indexing

import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

// IndexNow key - in production, store this in environment variable
const INDEXNOW_KEY = "8c9d4e5f6a7b8c9d0e1f2a3b4c5d6e7f"; // Replace with your key

serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { urls } = await req.json();
    
    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return new Response(JSON.stringify({ error: 'URLs array required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // IndexNow API endpoint (shared by Bing, Yandex, Seznam)
    const indexNowUrl = 'https://api.indexnow.org/indexnow';
    
    // Prepare request payload
    const payload = {
      host: "www.franchiseleadshq.com",
      key: INDEXNOW_KEY,
      keyLocation: `https://www.franchiseleadshq.com/${INDEXNOW_KEY}.txt`,
      urlList: urls.map(url => {
        // Ensure full URLs
        if (!url.startsWith('http')) {
          return `https://www.franchiseleadshq.com${url.startsWith('/') ? url : '/' + url}`;
        }
        return url;
      })
    };

    // Submit to IndexNow
    const response = await fetch(indexNowUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    
    // IndexNow returns 200 for success, 202 for accepted
    if (response.status === 200 || response.status === 202) {
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'URLs submitted to IndexNow successfully',
        urls: payload.urlList,
        status: response.status
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ 
        success: false, 
        error: `IndexNow API returned status ${response.status}`,
        response: responseText
      }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

  } catch (err) {
    console.error('IndexNow ping error:', err);
    return new Response(JSON.stringify({ 
      success: false, 
      error: String(err) 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
});
