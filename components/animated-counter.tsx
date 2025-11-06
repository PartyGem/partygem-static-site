"use client"

import { useState, useEffect, useRef } from "react"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  inView: boolean
}

export function AnimatedCounter({ value, suffix = "", prefix = "", duration = 2000, inView }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    if (!inView) {
      setCount(0)
      countRef.current = 0
      startTimeRef.current = null
      return
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setCount(value)
      return
    }

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp
      }

      const progress = timestamp - startTimeRef.current
      const percentage = Math.min(progress / duration, 1)

      // Use easeOutQuart easing function for a nice effect
      const easing = 1 - Math.pow(1 - percentage, 4)
      const currentCount = Math.floor(easing * value)

      if (currentCount !== countRef.current) {
        countRef.current = currentCount
        setCount(currentCount)
      }

      if (percentage < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [inView, value, duration])

  // Format the number with commas
  const formattedCount = count.toLocaleString()

  return (
    <div className="text-4xl md:text-5xl font-bold tabular-nums">
      {prefix}
      {formattedCount}
      {suffix}
    </div>
  )
}
