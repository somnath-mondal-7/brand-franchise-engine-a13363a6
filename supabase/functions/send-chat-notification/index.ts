import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

// Note: Resend requires API key setup. For now, we'll just log and return success.
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ChatNotificationRequest {
  conversationId: string;
  visitorName?: string;
  visitorEmail?: string;
  messages: Array<{
    message: string;
    sender_type: string;
    created_at: string;
  }>;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { conversationId, visitorName, visitorEmail, messages }: ChatNotificationRequest = await req.json();

    // Format conversation history
    const conversationHistory = messages.map(msg => 
      `<div style="margin-bottom: 10px; padding: 10px; background: ${msg.sender_type === 'visitor' ? '#f0f0f0' : '#e3f2fd'}; border-radius: 5px;">
        <strong>${msg.sender_type === 'visitor' ? (visitorName || 'Visitor') : 'Bot'}:</strong>
        <p style="margin: 5px 0 0 0;">${msg.message}</p>
        <small style="color: #666;">${new Date(msg.created_at).toLocaleString()}</small>
      </div>`
    ).join('');

    // Simple email sending without npm package dependency
    if (!RESEND_API_KEY) {
      console.log("RESEND_API_KEY not configured. Logging chat notification instead.");
      console.log("Chat notification:", { conversationId, visitorName, visitorEmail, messageCount: messages.length });
      return new Response(JSON.stringify({ success: true, message: "Logged (email not configured)" }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "FranchiseLeads HQ <onboarding@resend.dev>",
        to: ["your-email@example.com"],
        subject: `New Chat Conversation${visitorName ? ` from ${visitorName}` : ''}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Chat Conversation</h2>
            
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Conversation ID:</strong> ${conversationId}</p>
              ${visitorName ? `<p><strong>Visitor Name:</strong> ${visitorName}</p>` : ''}
              ${visitorEmail ? `<p><strong>Visitor Email:</strong> ${visitorEmail}</p>` : ''}
              <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
            </div>

            <h3 style="color: #333;">Conversation History:</h3>
            <div style="margin-top: 20px;">
              ${conversationHistory}
            </div>

            <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
            
            <p style="color: #666; font-size: 12px;">
              This notification was sent from your FranchiseLeads HQ website chat system.
            </p>
          </div>
        `,
      }),
    });

    const emailData = await emailResponse.json();

    console.log("Email sent successfully:", emailData);

    return new Response(JSON.stringify(emailData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-chat-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
