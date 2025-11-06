import type React from "react"

interface TransProps {
  children: React.ReactNode
}

export function Trans({ children }: TransProps) {
  // This is a placeholder component for future i18n implementation
  // For now, it just returns the children as-is
  return <>{children}</>
}
