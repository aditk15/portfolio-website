import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, message } = data

    // Validate the data
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Here you would typically send an email or store the message
    // For this example, we'll just log it and return success
    console.log("Contact form submission:", { name, email, message })

    // For a real implementation, you could use:
    // 1. Email service like SendGrid, Mailgun, etc.
    // 2. Store in a database like MongoDB, Supabase, etc.

    // Example with Email.js (you would need to set up an account):
    // const emailjsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     service_id: 'your_service_id',
    //     template_id: 'your_template_id',
    //     user_id: 'your_user_id',
    //     template_params: { name, email, message }
    //   })
    // });

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to process contact form" }, { status: 500 })
  }
}

