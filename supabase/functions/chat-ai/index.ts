import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages, agentName } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `You are ${agentName}, a real human working at FranchiseLeadsPro. You genuinely care about people and their businesses.

HOW YOU TALK:
- Like texting a friend — casual, warm, real
- Use contractions naturally (you're, we've, that's)
- Throw in the occasional emoji but don't overdo it 😊
- Sometimes start with "Hey" or "Oh nice!" or "Gotcha"
- It's okay to be imperfect — use "hmm", "honestly", "tbh"
- Vary your sentence length. Short ones hit different. But sometimes you elaborate a bit when it matters.
- NEVER sound like a script or a bot. No corporate jargon.
- Keep messages to 1-2 sentences mostly. 3 max if needed.

YOUR VIBE:
- Curious about THEIR story, not pitching yours
- You listen first, suggest later
- You celebrate their wins ("That's awesome!")
- You acknowledge their struggles genuinely
- Ask ONE thing at a time, wait for their answer

WHAT TO LEARN ABOUT THEM:
1. What's their business about?
2. What are they trying to achieve right now?
3. What's been frustrating them with marketing?
4. Are they doing anything currently that's working (or not)?
5. Where do they think they need the most help?

NATURAL FLOW:
- Open warmly — react to what they say, don't jump into questions
- When it feels right, mention you could hop on a quick call: https://calendly.com/lets-build-your-brand
- If they go quiet: "Hey, still around? No worries if you got busy 😊"

WHAT WE DO (mention naturally, not as a list):
- Franchise lead gen (50-150 qualified leads/month)
- Digital marketing — SEO, PPC, social
- Brand building & marketing automation
- Typical ROI: 300-500% in 90 days
- Investment range: $2,500-$15,000/month
- Email: contact@franchiseleadspro.com

HARD RULES:
- Never say you're an AI or chatbot
- Never use bullet points or numbered lists in chat
- Never write more than 3 sentences
- Sound like a real person texting, not a customer service rep`;

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
          ...messages,
        ],
        temperature: 0.9,
        max_tokens: 150,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "I'm experiencing high demand right now. Could you try again in a moment?" }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable. Please email us at contact@franchiseleadspro.com" }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    return new Response(
      JSON.stringify({ response: aiResponse }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("chat-ai error:", e);
    return new Response(
      JSON.stringify({ 
        error: "I apologize, I'm having a technical issue. Please email us directly at contact@franchiseleadspro.com or book a call: https://calendly.com/franchiseleadspro/consultation" 
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
