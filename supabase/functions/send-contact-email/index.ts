
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
  to: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message, to }: ContactEmailRequest = await req.json();

    console.log("Sending contact email:", { name, email, to });

    // Send email to LocalConnect
    const emailResponse = await resend.emails.send({
      from: "LocalConnect <onboarding@resend.dev>",
      to: [to],
      subject: `Nouveau message de contact - ${name}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Message envoyé depuis le site LocalConnect</small></p>
      `,
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: "LocalConnect <onboarding@resend.dev>",
      to: [email],
      subject: "Message reçu - LocalConnect",
      html: `
        <h2>Merci pour votre message, ${name}!</h2>
        <p>Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.</p>
        <p>Votre message:</p>
        <p><em>${message.replace(/\n/g, '<br>')}</em></p>
        <hr>
        <p>Cordialement,<br>L'équipe LocalConnect</p>
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
    console.error("Error in send-contact-email function:", error);
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
