import { type NextRequest, NextResponse } from "next/server"

// Mailchimp API configuration
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID

// Simple authentication - in production, use proper auth
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123"

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  try {
    // Simple password protection
    const { searchParams } = new URL(request.url)
    const password = searchParams.get("password")

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // For development/demo purposes
    if (!MAILCHIMP_API_KEY || !MAILCHIMP_SERVER_PREFIX || !MAILCHIMP_LIST_ID) {
      return NextResponse.json({
        success: true,
        message: "Mailchimp not configured - this would show your subscriber list",
        subscribers: [
          {
            email: "demo@example.com",
            name: "Demo User",
            subject: "general",
            subscribed_at: new Date().toISOString(),
            status: "subscribed",
          },
        ],
        total: 1,
      })
    }

    // Fetch subscribers from Mailchimp
    const mailchimpUrl = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members?count=1000&status=subscribed`

    const response = await fetch(mailchimpUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      const error = await response.json()
      console.error("Mailchimp API error:", error)
      return NextResponse.json({ success: false, message: "Failed to fetch subscribers" }, { status: 500 })
    }

    const data = await response.json()

    // Format subscriber data
    const subscribers = data.members.map((member: any) => ({
      email: member.email_address,
      name: `${member.merge_fields.FNAME || ""} ${member.merge_fields.LNAME || ""}`.trim(),
      subject: member.merge_fields.SUBJECT || "N/A",
      message: member.merge_fields.MESSAGE || "N/A",
      subscribed_at: member.timestamp_signup,
      status: member.status,
      tags: member.tags?.map((tag: any) => tag.name) || [],
    }))

    return NextResponse.json({
      success: true,
      subscribers,
      total: data.total_items,
    })
  } catch (error) {
    console.error("Error fetching subscribers:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch subscribers" }, { status: 500 })
  }
}
