import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Trans } from "@/components/trans"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-medium mb-6">
        <Trans>Page Not Found</Trans>
      </h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        <Trans>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </Trans>
      </p>
      <Button asChild>
        <Link href="/">
          <Trans>Return Home</Trans>
        </Link>
      </Button>
    </div>
  )
}
