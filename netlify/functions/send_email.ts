import { Resend } from "resend";

// Initialize Resend with your API Key (Securely stored in Netlify environment variables)
const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event: any) => {
  // 1. Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    // 2. Parse the form data from the request body
    const { name, email, phone, company, message } = JSON.parse(event.body);

    // 3. Simple server-side validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error:
            "Missing required fields: name, email, and message are mandatory.",
        }),
      };
    }

    // 4. Send the email via Resend
    const data = await resend.emails.send({
      // Must be from your verified Resend subdomain
      from: "TACT Consulting <contact@send.tactconsulting.com.au>",
      // The company's current Gmail address
      to: ["your-company-email@gmail.com"],
      // Set Reply-To as the customer's email so replying is seamless
      replyTo: email,
      subject: `New Business Inquiry: ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #2563eb;">New Consulting Inquiry</h2>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <footer style="margin-top: 20px; font-size: 12px; color: #777;">
            Sent from the TACT Consulting website contact form.
          </footer>
        </div>
      `,
    });

    // 5. Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully", id: data.id }),
    };
  } catch (error: any) {
    console.error("Resend Error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Internal Server Error",
        details: error.message,
      }),
    };
  }
};
