import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const RESEND_API_URL = "https://api.resend.com/emails";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const ContactSchema = z.object({
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(1).max(30),
  company: z.string().trim().max(200).optional().default(''),
  message: z.string().trim().max(5000).optional().default(''),
});

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const parsed = ContactSchema.safeParse(body);

    if (!parsed.success) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid input" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { firstName, lastName, email, phone, company, message } = parsed.data;

    console.log("Sending contact form email for submission");

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
        throw new Error(`Resend API error: ${response.status}`);
      }
      
      return response.json();
    };

    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeCompany = escapeHtml(company);
    const safeMessage = escapeHtml(message);

    const notificationResponse = await sendEmail({
      from: "FranchiseLeadsPro <support@franchiseleadspro.com>",
      to: ["iamsomnath@franchiseleadspro.com"],
      cc: ["support@franchiseleadspro.com"],
      reply_to: "support@franchiseleadspro.com",
      subject: `New Contact Form Submission from ${safeFirstName} ${safeLastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeFirstName} ${safeLastName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        ${safeCompany ? `<p><strong>Company:</strong> ${safeCompany}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${safeMessage.replace(/\n/g, '<br>')}</p>
        
        <hr>
        <p><em>This email was sent from the FranchiseLeadsPro contact form.</em></p>
      `,
    });

    const confirmationResponse = await sendEmail({
      from: "FranchiseLeadsPro <support@franchiseleadspro.com>",
      to: [email],
      reply_to: "support@franchiseleadspro.com",
      subject: "Thank you for contacting FranchiseLeadsPro",
      html: `
        <h1>Thank you for reaching out, ${safeFirstName}!</h1>
        <p>We have received your message and will get back to you within 24 hours to discuss how we can help you generate high-quality franchise leads.</p>
        
        <h2>What happens next?</h2>
        <ul>
          <li>Our team will review your inquiry</li>
          <li>We'll prepare a customized strategy for your franchise</li>
          <li>One of our lead generation specialists will contact you</li>
        </ul>
        
        <p>In the meantime, feel free to explore our <a href="https://franchiseleadspro.com/services">services</a> and learn more about how we've helped other franchises grow.</p>
        
        <p>Best regards,<br>
        <strong>The FranchiseLeadsPro Team</strong><br>
        📧 support@franchiseleadspro.com</p>
        
        <hr>
        <p><em>This is an automated message — please do not reply directly to this email. If you have any questions, reach out to us at <a href="mailto:support@franchiseleadspro.com">support@franchiseleadspro.com</a>.</em></p>
      `,
    });

    console.log("Emails sent successfully");

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
    console.error("Error in send-contact-email function");
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "An error occurred processing your request" 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
