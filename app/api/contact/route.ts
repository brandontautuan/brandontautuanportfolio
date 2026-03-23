import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
const YOUR_EMAIL = process.env.CONTACT_EMAIL || "btau4135@gmail.com"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, message, website } = body

    // Honeypot: bots fill this, humans don't see it. Return fake success.
    if (website) {
      return NextResponse.json({ success: true })
    }

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required" },
        { status: 400 }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set")
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || "Portfolio Contact <onboarding@resend.dev>",
      to: [YOUR_EMAIL],
      replyTo: [email],
      subject: `Portfolio contact from ${email}`,
      html: `
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error("Contact form error:", err)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
