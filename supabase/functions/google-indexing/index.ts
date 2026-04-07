// Google Indexing API - Submits URLs for instant crawling
// Requires a Google Service Account JSON key stored as GOOGLE_SERVICE_ACCOUNT_KEY secret

import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Generate JWT for Google Service Account auth
async function getAccessToken(serviceAccount: { client_email: string; private_key: string }): Promise<string> {
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: serviceAccount.client_email,
    scope: 'https://www.googleapis.com/auth/indexing',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  };

  const encoder = new TextEncoder();

  const base64url = (data: Uint8Array): string => {
    let binary = '';
    for (const byte of data) binary += String.fromCharCode(byte);
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  };

  const headerB64 = base64url(encoder.encode(JSON.stringify(header)));
  const claimB64 = base64url(encoder.encode(JSON.stringify(claim)));
  const unsignedToken = `${headerB64}.${claimB64}`;

  // Import the private key
  const pemContents = serviceAccount.private_key
    .replace(/-----BEGIN PRIVATE KEY-----/, '')
    .replace(/-----END PRIVATE KEY-----/, '')
    .replace(/\n/g, '');

  const binaryDer = Uint8Array.from(atob(pemContents), c => c.charCodeAt(0));

  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    binaryDer,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    cryptoKey,
    encoder.encode(unsignedToken)
  );

  const signatureB64 = base64url(new Uint8Array(signature));
  const jwt = `${unsignedToken}.${signatureB64}`;

  // Exchange JWT for access token
  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });

  const tokenData = await tokenRes.json();
  if (!tokenData.access_token) {
    throw new Error(`Token exchange failed: ${JSON.stringify(tokenData)}`);
  }
  return tokenData.access_token;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const { urls } = await req.json();

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return new Response(JSON.stringify({ error: 'URLs array required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const serviceAccountJson = Deno.env.get('GOOGLE_SERVICE_ACCOUNT_KEY');
    if (!serviceAccountJson) {
      console.warn('GOOGLE_SERVICE_ACCOUNT_KEY not configured - falling back to sitemap ping only');
      // Fallback: ping Google sitemap endpoint
      const pings = urls.map(() =>
        fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent('https://www.franchiseleadspro.com/sitemap-blog.xml')}`)
      );
      await Promise.allSettled(pings);
      return new Response(JSON.stringify({
        success: true,
        method: 'sitemap-ping-fallback',
        message: 'Used sitemap ping (add GOOGLE_SERVICE_ACCOUNT_KEY for Indexing API)',
        urls,
      }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const serviceAccount = JSON.parse(serviceAccountJson);
    const accessToken = await getAccessToken(serviceAccount);

    console.log(`📡 Submitting ${urls.length} URLs to Google Indexing API`);

    const results = await Promise.allSettled(
      urls.map(async (url: string) => {
        const fullUrl = url.startsWith('http') ? url : `https://www.franchiseleadspro.com${url.startsWith('/') ? url : '/' + url}`;
        const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            url: fullUrl,
            type: 'URL_UPDATED',
          }),
        });
        const data = await res.json();
        console.log(`  → ${fullUrl}: ${res.status}`, JSON.stringify(data));
        return { url: fullUrl, status: res.status, data };
      })
    );

    const successful = results.filter(r => r.status === 'fulfilled' && (r as any).value.status === 200).length;

    return new Response(JSON.stringify({
      success: true,
      method: 'google-indexing-api',
      submitted: urls.length,
      successful,
      results: results.map(r => r.status === 'fulfilled' ? (r as any).value : { error: (r as any).reason?.message }),
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
    });
  } catch (err) {
    console.error('Google Indexing API error:', err);
    return new Response(JSON.stringify({ success: false, error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
