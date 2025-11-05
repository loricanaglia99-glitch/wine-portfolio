import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Log the contact form submission
    console.log("Contact form submission:", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    // Send email with Resend
    const emailResult = await sendEmailWithResend({ name, email, message });
    console.log("Email send result:", emailResult);

    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully. We'll get back to you soon!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process your request. Please try again later." },
      { status: 500 }
    );
  }
}

async function sendEmailWithResend({ name, email, message }: { name: string; email: string; message: string }) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  console.log("Attempting to send email with config:", {
    from: 'Lorenzo Canaglia <contact@lorenzocanaglia.com>',
    to: process.env.CONTACT_EMAIL || 'loricanaglia99@gmail.com',
    hasApiKey: !!process.env.RESEND_API_KEY,
  });

  const result = await resend.emails.send({
    from: 'Lorenzo Canaglia <contact@lorenzocanaglia.com>',
    to: process.env.CONTACT_EMAIL || 'loricanaglia99@gmail.com',
    subject: `New Contact: ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #722F37; border-bottom: 2px solid #722F37; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        <div style="margin: 20px 0;">
          <p><strong style="color: #722F37;">Name:</strong> ${name}</p>
          <p><strong style="color: #722F37;">Email:</strong> ${email}</p>
          <p><strong style="color: #722F37;">Message:</strong></p>
          <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #722F37; margin-top: 10px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 30px;">
          You can reply directly to this email to respond to ${name}.
        </p>
      </div>
    `,
    replyTo: email,
  });

  console.log("Resend API response:", result);
  return result;
}
