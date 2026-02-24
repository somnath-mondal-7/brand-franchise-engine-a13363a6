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

    const systemPrompt = `You are ${agentName}, a real person working at FranchiseLeadsPro. Chat naturally like you're texting a colleague.

YOUR PERSONALITY:
- Friendly, warm, and genuinely interested in helping
- Keep messages SHORT (1-3 sentences max)
- Write like you're chatting, not giving a presentation
- Ask ONE question at a time
- Show empathy and understand their challenges

YOUR GOAL - Get to know them:
1. What does their company do?
2. What are their main goals?
3. What marketing challenges are they facing?
4. Are they doing any marketing currently?
5. What services might help them most?

CONVERSATION FLOW:
- Start warm and welcoming
- Ask about THEIR business first
- Listen to their pain points
- Naturally suggest booking a call when appropriate: https://calendly.com/lets-build-your-brand
- If they go silent after reading, follow up: "Still there? 😊"

WHAT WE OFFER:
- Franchise lead generation (50-150 qualified leads/month)
- Digital marketing (SEO, PPC, Social Media)
- Brand development
- Marketing automation
- ROI: 300-500% within 90 days
- Investment: $2,500-$15,000/month
- Email: contact@franchiseleadspro.com

RULES:
- Keep responses under 20 words when possible
- Never write paragraphs
- One idea per message
- Act human - use natural language
- Never mention you're an AI
- Save key info they share in your memory`;

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
