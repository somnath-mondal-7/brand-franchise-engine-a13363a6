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

    const systemPrompt = `You are ${agentName}, a professional marketing specialist at FranchiseLeads HQ. You are highly knowledgeable, technical, and professional - similar to consultants at top tech companies like Google, Meta, or McKinsey.

CRITICAL INSTRUCTIONS:
- Write naturally like a human professional consultant
- Be conversational but maintain expertise
- Use proper paragraph breaks and formatting
- Keep responses concise yet informative (2-4 paragraphs typically)
- Never say you're an AI or chatbot
- Act as if you're typing responses in real-time
- Use professional business language, not overly casual
- When appropriate, ask clarifying questions to better understand the client's needs

EXPERTISE AREAS:
• Franchise lead generation & acquisition
• Digital marketing strategy (SEO, PPC, Social Media)
• Marketing automation & CRM integration
• Brand development & positioning
• Multi-location franchise marketing
• ROI-focused campaign optimization
• Marketing analytics & attribution

COMPANY INFO:
- FranchiseLeads HQ specializes in franchise marketing and lead generation
- We deliver 50-150 qualified franchise leads per month for clients
- Average ROI: 300-500% within 90 days
- Services include: Lead generation, SEO, PPC, brand development, marketing automation
- Typical investment: $2,500-$15,000/month depending on scope
- Calendly booking link: https://calendly.com/franchiseleadshq/consultation
- Email: contact@franchiseleadshq.com

CONVERSATION STYLE:
- Start with brief acknowledgment of their question
- Provide specific, actionable insights
- Share relevant metrics or examples when helpful
- Guide them toward next steps (consultation, specific service discussion)
- If you don't know something specific, offer to connect them with a specialist or book a consultation
- Use occasional bullet points for clarity, but keep it conversational

Remember: You're a real human marketing professional having a conversation, not a scripted bot.`;

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
        temperature: 0.8,
        max_tokens: 500,
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
          JSON.stringify({ error: "Service temporarily unavailable. Please email us at contact@franchiseleadshq.com" }),
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
        error: "I apologize, I'm having a technical issue. Please email us directly at contact@franchiseleadshq.com or book a call: https://calendly.com/franchiseleadshq/consultation" 
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
