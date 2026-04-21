# Brand

## Naming — the one rule

| When you mean… | Use | Don't use |
|---|---|---|
| The company, the agency, the team, the orchestration layer | **PartyGem AI** | `PartyGem` alone, `partygem.ai`, `PartyGem.AI` |
| Our flagship event-management product | **PartyGem** | `PartyGem AI` (that's the company), `PartyGem App` |
| Roadmap marketplaces / services | **Service Gem**, **Venue Gem** | `ServiceGem`, `venue-gem`, `VenueGem` |
| Long-term embodied concierge | **RoboGem** | `Robo Gem`, `robo-gem` |
| The whole product family | **the Gems family** / **Gems** | "the apps", "the suite" |
| The overarching platform offering | **Events as a Service (EaaS)** | "the events platform" (too generic) |

**Domain:** `partygemai.com`. Email: `contact@partygemai.com`. Product app: `app.partygemai.com`.

**Why the split?** Because the agency is more than one product. "PartyGem AI" has to carry consulting, government contracting, and multiple future Gems. "PartyGem" is the event-management tool that made the company — we keep it, but we don't let it eat the parent brand.

## Voice & tone

- **Plural, active, technical.** "We ship", "we orchestrate", "we register with SAM.gov".
- **Specific.** Name the technology (Go, Postgres, Stripe Connect, RAG, SAM.gov) rather than hand-waving about "cutting-edge AI".
- **Confident, not breathless.** We say "production-grade" before we say "revolutionary".
- **Playful where it helps the product.** *"Gems"*, *"conjure"*, *"confetti"* — these are earned vocabulary for PartyGem, not the government practice.
- **Serious where it helps trust.** Government and security copy is crisp, declarative, and free of marketing fluff.

## Visual system

The full design system lives in [`../../DESIGN.md`](../../DESIGN.md). High-level:

- **Palette:** Four brand accents — Brand Purple (primary), Brand Mocha, Brand Red, Brand Aqua — over a neutral slate chassis (shadcn defaults). First-class light + dark.
- **Typography:** Inter, `tracking-tighter` for display, muted-foreground for body.
- **Motion:** Subtle fade + translate reveal, product-specific confetti, `prefers-reduced-motion` respected everywhere.
- **Component vocabulary:** shadcn/ui primitives. Cards with dashed borders for roadmap, solid for live. Live/Roadmap/Future pills signal status.

## Boilerplate (drop-in copy)

**One-liner (agency + product):**
> PartyGem AI is a consulting agency for AI/ML and full-stack software development. Our flagship product, PartyGem, is an intelligent event management service — the first of a growing family of Gems powering Events as a Service.

**One-liner (government contracting):**
> PartyGem AI is partnered with the U.S. federal government to bid on software-related contracts through SAM.gov, and we engage with non-dilutive funding vehicles such as the NSF SBIR program.

**One-liner (product, for pitch):**
> PartyGem is an intelligent event management service — planning, ticketing, check-in, sponsorships, and analytics, all in one AI-powered platform.

## Trademarks we reference

- NVIDIA, the NVIDIA logo, and NVIDIA Inception are trademarks or registered trademarks of NVIDIA Corporation in the U.S. and other countries. Always include the attribution footer where the NVIDIA badge is displayed (see `/about`).
- SAM.gov, NSF, and SBIR are U.S. government systems/programs; use them descriptively.
