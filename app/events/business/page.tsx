"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

export default function BusinessEventsPage() {
  const router = useRouter()

  useEffect(() => {
    // Temporarily redirect to home page as this page is under construction
    router.push("/")
  }, [router])

  const chartRef = useRef<HTMLDivElement>(null)
  const chartInView = useInView(chartRef, { threshold: 0.3 })

  return null
}
