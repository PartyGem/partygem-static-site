# PartyGem AI — Wiki

**Scope:** Internal-ish, long-form documentation for the agency, the product line, the brand, and the operating context. Lives in the marketing repo so the brand, copy, and positioning stay aligned with what the world sees at `partygemai.com`.

> If it's customer-facing copy, it probably also lives on the marketing site (`/about`, `/features`, etc.). If it's strategy, product reasoning, or "what do we actually mean by X," it lives here.

---

## Table of contents

### Foundation

- [`company-overview.md`](company-overview.md) — What PartyGem AI is, what we build, how we're organized.
- [`brand.md`](brand.md) — Naming, voice, and where to look for visual design (`DESIGN.md`).
- [`roadmap.md`](roadmap.md) — Phased roadmap across the agency and Gems.
- [`glossary.md`](glossary.md) — Shared vocabulary (Gem, Event-as-a-Service, SBIR, SAM.gov, etc.).

### Products — the Gems

- [`products/partygem.md`](products/partygem.md) — Flagship: event management. **Live.**
- [`products/service-gem.md`](products/service-gem.md) — Freelancer/vendor marketplace. Roadmap.
- [`products/venue-gem.md`](products/venue-gem.md) — Venue matching. Roadmap.
- [`products/robogem.md`](products/robogem.md) — Humanoid event concierge. Future.
- [`products/partygem-ai-platform.md`](products/partygem-ai-platform.md) — The orchestration layer that makes all Gems one system.

### Agency & go-to-market

- [`consulting-practice.md`](consulting-practice.md) — What we take on for clients and how we scope it.
- [`government-contracting.md`](government-contracting.md) — SAM.gov, NSF SBIR, teaming posture, capability statement.

---

## How to use this wiki

1. **Name-check first.** If you're writing copy, confirm you're using the right name — "PartyGem AI" (agency / orchestration layer) vs "PartyGem" (the product). See `brand.md`.
2. **Update the source of truth.** If the Gems family, roadmap, or government posture changes, update the page here **before** you update marketing copy. The site should reflect the wiki.
3. **Link, don't duplicate.** If a section exists in [`../../ARCHITECTURE.md`](../../ARCHITECTURE.md) or [`../../DESIGN.md`](../../DESIGN.md), link to it rather than restating it.
4. **PartyGem product internals** (Go server, Postgres migrations, Stripe webhooks) live in the [`PartyGem`](https://github.com/syedwshah/PartyGem) repo. This wiki references them but does not duplicate them.

---

## Related files in this repo

- [`../../ARCHITECTURE.md`](../../ARCHITECTURE.md) — Architectural pillars and stack boundaries.
- [`../../DESIGN.md`](../../DESIGN.md) — Visual design system (Stitch / VoltAgent style).
- [`../../README.md`](../../README.md) — Repo README.
