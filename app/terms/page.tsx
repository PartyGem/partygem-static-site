import { Trans } from "@/components/trans"

export default function TermsPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 max-w-4xl mx-auto">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <Trans>Terms & Conditions</Trans>
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
                By using PartyGem AI, you agree to these Terms & Conditions. If you do not agree, please do not use our
                platform.
              </Trans>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              <Trans>Use of the Service</Trans>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <Trans>You may use PartyGem AI for personal or business event planning. You must:</Trans>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <Trans>Provide accurate account information.</Trans>
              </li>
              <li>
                <Trans>Not misuse the platform for unauthorized purposes.</Trans>
              </li>
              <li>
                <Trans>Comply with all applicable laws.</Trans>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              <Trans>AI-Generated Content & Recommendations</Trans>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              <Trans>
                Our platform provides AI-driven event insights. While we strive for accuracy, we do not guarantee
                error-free AI-generated content.
              </Trans>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              <Trans>User Data & Privacy</Trans>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              <Trans>
                By using PartyGem AI, you agree to our data collection practices outlined in our Privacy Policy.
              </Trans>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              <Trans>Limitation of Liability</Trans>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <Trans>PartyGem AI is not responsible for:</Trans>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <Trans>Third-party services integrated into the platform.</Trans>
              </li>
              <li>
                <Trans>Event outcomes, attendance levels, or engagement.</Trans>
              </li>
              <li>
                <Trans>Any losses resulting from errors, outages, or misuse of the service.</Trans>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              <Trans>Changes to the Terms</Trans>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              <Trans>
                We may update these Terms at any time. Continued use of PartyGem AI signifies acceptance of the latest
                version.
              </Trans>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              <Trans>Governing Law</Trans>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              <Trans>
                These Terms shall be governed and construed in accordance with the laws of USA, without regard to its
                conflict of law provisions.
              </Trans>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              <Trans>Contact Us</Trans>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              <Trans>If you have any questions about these Terms, please contact us at:</Trans>{" "}
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
