import { Resend } from "resend";

// Initialize Resend with your API Key
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
    const { name, email, phone, company, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error:
            "Missing required fields: name, email, and message are mandatory.",
        }),
      };
    }

    // 1. Prepare the email to the Business (You)
    const adminEmailPromise = resend.emails.send({
      from: "TACT Consulting <contact@contact.tactconsulting.com.au>",
      to: ["tulshi.tact@gmail.com"],
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
        </div>
      `,
    });

    // 2. Prepare the confirmation email to the Client
    const clientEmailPromise = resend.emails.send({
      from: "TACT Consulting <contact@contact.tactconsulting.com.au>",
      to: [email], // Using the email they typed into the form
      subject: "We received your inquiry - TACT Consulting",
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px;">
          <h2 style="color: #2563eb;">Thank you for reaching out, ${name}!</h2>
          <p>This is an automated message to confirm that we have successfully received your inquiry.</p>
          <p>Our team will review your project details and get back to you shortly to discuss how our civil engineering expertise can support your needs.</p>
          
          <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />
          
          <p style="font-size: 14px; color: #555;"><strong>For your records, here is a copy of your message:</strong></p>
          <div style="margin-top: 10px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #2563eb; border-radius: 4px;">
            <p style="white-space: pre-wrap; font-style: italic; color: #444;">${message}</p>
          </div>
          
          <p style="margin-top: 30px; color: #555;">
            Best regards,<br>
            <strong>The TACT Consulting Team</strong>
          </p>
        </div>
      `,
    });

    // 3. Fire both emails simultaneously!
    const [adminResponse, clientResponse] = await Promise.all([
      adminEmailPromise,
      clientEmailPromise,
    ]);

    // Check if EITHER email failed to send
    if (adminResponse.error || clientResponse.error) {
      console.error(
        "Resend API Error:",
        adminResponse.error || clientResponse.error,
      );
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: adminResponse.error?.message || clientResponse.error?.message,
        }),
      };
    }

    // 4. Return success to the frontend
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Emails sent successfully",
      }),
    };
  } catch (error: any) {
    // This now strictly catches network crashes or JSON parsing failures
    console.error("Server Error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Internal Server Error",
        details: error.message,
      }),
    };
  }
};
