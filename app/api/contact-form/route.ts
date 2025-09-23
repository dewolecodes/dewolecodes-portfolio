import { Resend } from "resend";
import { ContactFormEmail } from "@/email/templates/contact-form-email";
import { contactSchema } from "@/email/validations/contact";
import { NextResponse } from "next/server";
import * as z from "zod";

// Define response types
type SuccessResponse = {
  status: number;
  message: string;
};

// Define error response types
type ErrorResponse = {
  error: string;
  status: number;
};

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    // Dev-only fallback: if the API key is missing during development, log the
    // contact form submission and return a success response so dev flows work
    // without sending emails. In production we still return an error.
    if (!apiKey) {
      if (process.env.NODE_ENV !== "production") {
        const bodyPreview = await req.text();
        // Log the submission server-side for local development inspection
        // (do not log sensitive data in production)
        // eslint-disable-next-line no-console
        console.log("[DEV] Contact form submission (not sent):", bodyPreview);

        return NextResponse.json(
          { status: 200, message: "DEV: Email logged (not sent)" },
          { status: 200 },
        );
      }

      // In production, explicit error if the API key isn't configured
      return NextResponse.json(
        { error: "Missing RESEND_API_KEY environment variable", status: 500 },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    const body = await req.json();
    const { name, email, message } = contactSchema.parse(body);

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "hassanhauda@gmail.com",
      subject: `Message from ${name} via Portfolio Contact Form`,
      replyTo: email,
      react: ContactFormEmail({
        message,
        senderEmail: email,
        senderName: name,
      }),
    });

    return NextResponse.json<SuccessResponse>(
      {
        status: 200,
        message: "Email sent successfully!",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json<ErrorResponse>(
        {
          error: "Invalid form data",
          status: 400,
        },
        { status: 400 },
      );
    }

    if (error instanceof Error) {
      return NextResponse.json<ErrorResponse>(
        {
          error: error.message,
          status: 400,
        },
        { status: 400 },
      );
    }

    return NextResponse.json<ErrorResponse>(
      {
        error: "Internal server error",
        status: 500,
      },
      { status: 500 },
    );
  }
}
