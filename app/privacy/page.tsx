import { Trans } from "@/components/trans"

export default function PrivacyPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 max-w-4xl mx-auto">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <Trans>Privacy Policy</Trans>
          </h1>
          <p className="text-muted-foreground mt-4">
            <Trans>Last updated: {new Date().toLocaleDateString()}</Trans>
          </p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">
              <Trans>Introduction</Trans>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              <Trans>
                Welcome to PartyGem AI ("we," "our," or "us"). Your privacy is important to us. This Privacy Policy
                explains how we collect, use, and protect your information when you use our AI-powered event management
                platform.
              </Trans>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              <Trans>Information We Collect</Trans>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <Trans>We collect the following types of data:</Trans>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Personal Information:</strong>{" "}
                <Trans>Name, email, phone number, and account details when you sign up.</Trans>
              </li>
              <li>
                <strong>Event Data:</strong>{" "}
                <Trans>Details about events you create, including attendance and feedback.</Trans>
              </li>
              <li>
                <strong>Usage Data:</strong>{" "}
                <Trans>Interaction with our platform, including cookies, analytics, and device information.</Trans>
              </li>
              <li>
                <strong>Feedback & Sentiment Analysis:</strong>{" "}
                <Trans>Data collected after an event to improve experiences.</Trans>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              <Trans>How We Use Your Information</Trans>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <Trans>We use your data to:</Trans>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <Trans>Provide and enhance event management services.</Trans>
              </li>
              <li>
                <Trans>Offer AI-driven recommendations for event planning and attendee engagement.</Trans>
              </li>
              <li>
                <Trans>Automate event outreach via email, SMS, and notifications.</Trans>
              </li>
              <li>
                <Trans>Conduct sentiment analysis and post-event insights.</Trans>
              </li>
              <li>
                <Trans>Improve our platform based on user interactions.</Trans>
              </li>
              <li>
                <Trans>Comply with legal obligations and protect our platform from misuse.</Trans>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              <Trans>How We Share Your Data</Trans>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <Trans>We do not sell your personal data. However, we may share information with:</Trans>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Service Providers:</strong>{" "}
                <Trans>Third-party tools (e.g., email/SMS providers, analytics platforms) to improve services.</Trans>
              </li>
              <li>
                <strong>Business Partners:</strong>{" "}
                <Trans>
                  Integrated API services such as payment processors, calendar sync, or venue recommendations.
                </Trans>
              </li>
              <li>
                <strong>Legal Compliance:</strong>{" "}
                <Trans>When required by law or to protect our users and platform.</Trans>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              <Trans>Cookies and Tracking Data</Trans>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <Trans>We use cookies and similar tracking technologies to:</Trans>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <Trans>Remember user preferences.</Trans>
              </li>
              <li>
                <Trans>Analyze platform performance and improve user experience.</Trans>
              </li>
              <li>
                <Trans>Enable personalized event recommendations.</Trans>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <Trans>You can control cookie preferences through your browser settings.</Trans>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              <Trans>Data Security</Trans>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              <Trans>
                We implement industry-standard security measures to protect user data from unauthorized access,
                alteration, or loss.
              </Trans>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              <Trans>Your Data Protection Rights</Trans>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <Trans>
                Depending on your location, you may have the following rights regarding your personal information:
              </Trans>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <Trans>Access, update, or delete your data by contacting us.</Trans>
              </li>
              <li>
                <Trans>Opt-out of marketing communications at any time.</Trans>
              </li>
              <li>
                <Trans>Request a copy of your stored data.</Trans>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              <Trans>Changes to This Privacy Policy</Trans>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              <Trans>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page.
              </Trans>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              <Trans>Contact Us</Trans>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              <Trans>For privacy related inquiries, email us at:</Trans>{" "}
              <a href="mailto:contact@partygemai.com" className="text-primary hover:underline">
                contact@partygemai.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
