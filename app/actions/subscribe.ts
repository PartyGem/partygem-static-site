"use server"

export async function subscribeToMailingList(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!name || !email) {
      throw new Error("Name and email are required")
    }

    // Call our API route
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/subscribe`, {
      method: "POST",
      body: formData,
    })

    const result = await response.json()

    if (!result.success) {
      throw new Error(result.message || "Failed to subscribe")
    }

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message: result.message,
    }
  } catch (error) {
    console.error("Error processing subscription:", error)
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to subscribe. Please try again.",
    }
  }
}
