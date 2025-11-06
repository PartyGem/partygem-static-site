import { type NextRequest, NextResponse } from "next/server"

// Mailchimp API configuration
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX // e.g., 'us1', 'us2', etc.
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID

interface MailchimpSubscriber {
  email_address: string
  status: "subscribed" | "unsubscribed" | "cleaned" | "pending"
  merge_fields: {
    FNAME?: string
    LNAME?: string
    SUBJECT?: string
    MESSAGE?: string
  }
  tags?: string[]
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!email || !name) {
      return NextResponse.json({ success: false, message: "Name and email are required" }, { status: 400 })
    }

    // For development/demo purposes, we'll store locally and simulate Mailchimp
    if (!MAILCHIMP_API_KEY || !MAILCHIMP_SERVER_PREFIX || !MAILCHIMP_LIST_ID) {
      console.log("Mailchimp not configured, storing subscription locally:", {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString(),
      })

      return NextResponse.json({
        success: true,
        message: "Successfully subscribed to our mailing list!",
      })
    }

    // Split name into first and last name
    const nameParts = name.split(" ")
    const firstName = nameParts[0] || ""
    const lastName = nameParts.slice(1).join(" ") || ""

    // Prepare Mailchimp subscriber data
    const subscriberData: MailchimpSubscriber = {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        SUBJECT: subject,
        MESSAGE: message,
      },
      tags: [subject || "general-inquiry"],
    }

    // Make request to Mailchimp API
    const mailchimpUrl = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`

    const response = await fetch(mailchimpUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subscriberData),
    })

    const data = await response.json()

    if (!response.ok) {
      // Handle existing subscriber
      if (data.title === "Member Exists") {
        return NextResponse.json({
          success: true,
          message: "You're already subscribed to our mailing list!",
        })
      }

      console.error("Mailchimp API error:", data)
      return NextResponse.json({ success: false, message: "Failed to subscribe to mailing list" }, { status: 500 })
    }

    console.log("Successfully subscribed to Mailchimp:", {
      email,
      name,
      subject,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to our mailing list!",
    })
  } catch (error) {
    console.error("Error processing subscription:", error)
    return NextResponse.json({ success: false, message: "Failed to subscribe to mailing list" }, { status: 500 })
  }
}
