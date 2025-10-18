import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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

    const emailResponse = await resend.emails.send({
      from: "FranchiseLeads HQ <onboarding@resend.dev>",
      to: ["your-email@example.com"], // IMPORTANT: Replace this with your actual email address
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
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
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
