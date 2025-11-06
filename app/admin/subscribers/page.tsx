"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trans } from "@/components/trans"
import { Mail, Users, Download, Eye, EyeOff } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface Subscriber {
  email: string
  name: string
  subject: string
  message: string
  subscribed_at: string
  status: string
  tags?: string[]
}

export default function SubscribersPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [password, setPassword] = useState("")
  const [authenticated, setAuthenticated] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const fetchSubscribers = async () => {
    if (!password) {
      setError("Password is required")
      return
    }

    setLoading(true)
    setError("")

    try {
      const response = await fetch(`/api/subscribers?password=${encodeURIComponent(password)}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch subscribers")
      }

      setSubscribers(data.subscribers || [])
      setAuthenticated(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch subscribers")
      setAuthenticated(false)
    } finally {
      setLoading(false)
    }
  }

  const exportSubscribers = () => {
    const csvContent = [
      ["Email", "Name", "Interest Area", "Subscribed Date", "Status", "Message"].join(","),
      ...subscribers.map((sub) =>
        [
          sub.email,
          sub.name,
          sub.subject,
          new Date(sub.subscribed_at).toLocaleDateString(),
          sub.status,
          `"${sub.message.replace(/"/g, '""')}"`,
        ].join(","),
      ),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `partygemai-subscribers-${new Date().toISOString().split("T")[0]}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  if (!authenticated) {
    return (
      <div className="container px-4 md:px-6 py-12 max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <Trans>Subscriber Admin</Trans>
            </CardTitle>
            <CardDescription>
              <Trans>Enter the admin password to view mailing list subscribers</Trans>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && fetchSubscribers()}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <Button onClick={fetchSubscribers} disabled={loading || !password} className="w-full">
              {loading ? <Trans>Loading...</Trans> : <Trans>Access Subscribers</Trans>}
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              <Trans>Default password: admin123 (change in production)</Trans>
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              <Trans>Mailing List Subscribers</Trans>
            </h1>
            <p className="text-muted-foreground">
              <Trans>Manage and view your PartyGem AI mailing list subscribers</Trans>
            </p>
          </div>
          <div className="flex gap-2">
            <Button onClick={fetchSubscribers} variant="outline" disabled={loading}>
              <Trans>Refresh</Trans>
            </Button>
            <Button onClick={exportSubscribers} disabled={subscribers.length === 0}>
              <Download className="mr-2 h-4 w-4" />
              <Trans>Export CSV</Trans>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    <Trans>Total Subscribers</Trans>
                  </p>
                  <p className="text-2xl font-bold">{subscribers.length}</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    <Trans>Active Subscribers</Trans>
                  </p>
                  <p className="text-2xl font-bold">
                    {subscribers.filter((sub) => sub.status === "subscribed").length}
                  </p>
                </div>
                <Mail className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    <Trans>This Month</Trans>
                  </p>
                  <p className="text-2xl font-bold">
                    {
                      subscribers.filter((sub) => {
                        const subDate = new Date(sub.subscribed_at)
                        const now = new Date()
                        return subDate.getMonth() === now.getMonth() && subDate.getFullYear() === now.getFullYear()
                      }).length
                    }
                  </p>
                </div>
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  +
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {subscribers.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">
                <Trans>No subscribers yet</Trans>
              </h3>
              <p className="text-muted-foreground">
                <Trans>Subscribers will appear here once people start signing up for your mailing list.</Trans>
              </p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>
                <Trans>Subscriber List</Trans>
              </CardTitle>
              <CardDescription>
                <Trans>All subscribers to your PartyGem AI mailing list</Trans>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {subscribers.map((subscriber, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium">{subscriber.name || "Anonymous"}</h4>
                        <Badge variant={subscriber.status === "subscribed" ? "default" : "secondary"}>
                          {subscriber.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{subscriber.email}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>
                          <Trans>Interest:</Trans> {subscriber.subject || "General"}
                        </span>
                        <span>
                          <Trans>Subscribed:</Trans> {new Date(subscriber.subscribed_at).toLocaleDateString()}
                        </span>
                      </div>
                      {subscriber.message && subscriber.message !== "N/A" && (
                        <p className="text-sm mt-2 p-2 bg-muted/50 rounded text-muted-foreground">
                          "{subscriber.message}"
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
