import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

// Using fetch directly instead of Resend package to avoid version issues
const RESEND_API_URL = "https://api.resend.com/emails";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, phone, company, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact form email", { firstName, lastName, email });

    // Helper function to send emails via Resend API
    const sendEmail = async (emailData: any) => {
      const response = await fetch(RESEND_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
      });
      
      if (!response.ok) {
        const error = await response.text();
        throw new Error(`Resend API error: ${response.status} - ${error}`);
      }
      
      return response.json();
    };

    // Send notification email to your team
    const notificationResponse = await sendEmail({
      from: "FranchiseLeads HQ <support@franchiseleadshq.com>",
      to: ["iamsomnath@franchiseleadshq.com"], // Your team email
      reply_to: "support@franchiseleadshq.com",
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        
        <hr>
        <p><em>This email was sent from the FranchiseLeads HQ contact form.</em></p>
      `,
    });

    // Send confirmation email to the user
    const confirmationResponse = await sendEmail({
      from: "FranchiseLeads HQ <support@franchiseleadshq.com>",
      to: [email],
      reply_to: "support@franchiseleadshq.com",
      subject: "Thank you for contacting FranchiseLeads HQ",
      html: `
        <h1>Thank you for reaching out, ${firstName}!</h1>
        <p>We have received your message and will get back to you within 24 hours to discuss how we can help you generate high-quality franchise leads.</p>
        
        <h2>What happens next?</h2>
        <ul>
          <li>Our team will review your inquiry</li>
          <li>We'll prepare a customized strategy for your franchise</li>
          <li>One of our lead generation specialists will contact you</li>
        </ul>
        
        <p>In the meantime, feel free to explore our <a href="https://franchiseleadshq.com/services">services</a> and learn more about how we've helped other franchises grow.</p>
        
        <p>Best regards,<br>
        <strong>The FranchiseLeads HQ Team</strong><br>
        📧 support@franchiseleadshq.com<br>
        📞 +1 (555) 123-4567</p>
        
        <hr>
        <p><em>This is an automated response. Please reply to this email if you have any questions.</em></p>
      `,
    });

    console.log("Emails sent successfully:", { notificationResponse, confirmationResponse });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Email sent successfully",
        notificationId: notificationResponse.id,
        confirmationId: confirmationResponse.id
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);