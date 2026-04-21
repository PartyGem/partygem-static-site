# PartyGem (flagship)

**Status:** 🟢 Live (alpha)
**Repo:** [`syedwshah/PartyGem`](https://github.com/syedwshah/PartyGem)
**App:** [`app.partygemai.com`](https://app.partygemai.com)

PartyGem **makes the event happen by managing your event**. It's our flagship product — an intelligent event management service — and the reason PartyGem AI the agency exists.

---

## What PartyGem does

- **Event creation and management** — SSR pages (Go + HTMX) for organizer-first authoring.
- **RSVP workflows** — organizer-aware gating, status transitions, guest vs member paths.
- **Ticketing** — tiered tickets, inventory, availability checks, purchase flows.
- **Payments** — Stripe Checkout + Stripe Connect; free tiers bypass Stripe entirely and complete immediately.
- **Check-in** — QR-based ticket verification (per PartyGem PRD §12 roadmap).
- **Sponsorships & donations** — revenue primitives beyond tickets.
- **Analytics (Business tier)** — real-time KPIs, custom dashboards, sentiment and engagement tracking.
- **AI-powered features** — semantic search over event content (Pinecone), RAG-assisted discovery, unified query over event data.

See the live features page at [`/features`](https://partygemai.com/features) and the pricing tiers at [`/pricing`](https://partygemai.com/pricing).

---

## Architecture (summary)

See [`ARCHITECTURE.md`](../../../ARCHITECTURE.md#4-reference-architecture--partygem-flagship) for the canonical version, and the PartyGem repo's [`doc/architecture.md`](https://github.com/syedwshah/PartyGem/blob/main/doc/architecture.md) + [`docs/PLATFORM_ARCHITECTURE_PRD.md`](https://github.com/syedwshah/PartyGem/blob/main/docs/PLATFORM_ARCHITECTURE_PRD.md) for the full PRD.

**Stack (short):**

- **Frontend:** Go templates + HTMX + Alpine.js + Tailwind (FrankenUI).
- **Backend:** Go (Gin) — business logic, AuthN/Z, Stripe webhooks, WebSockets.
- **Databases:** PostgreSQL (events, RSVPs, tickets, analytics, orgs) + MySQL (users, auth, FULLTEXT search).
- **AI services:** FastAPI + Celery in Python; Pinecone for embeddings / RAG.
- **Payments:** Stripe + Stripe Connect.
- **Packaging:** Docker Compose.

---

## Tiers and entitlements

| Capability | Free | Premium | Business |
|------------|------|---------|----------|
| In-person event creation | ✅ | ✅ | ✅ |
| All event types (virtual/hybrid) | — | ✅ | ✅ |
| Basic ticketing + payments | ✅ | ✅ | ✅ |
| Advanced ticketing, messaging | — | ✅ | ✅ |
| Organizer analytics dashboard | — | — | ✅ (when `analytics_enabled`) |
| Instant / vector refresh | — | — | ✅ (when `instant_analytics_enabled`) |
| Sponsor ROI frameworks | — | ✅ | ✅ (deep) |
| AI concierge in forum | — | — | ✅ |
| Centralized multimedia storage | — | ✅ | ✅ (branded) |

**Rule:** Organizer analytics is **Business-only** regardless of DB flag drift. Server checks in `analytics_entitlements.go`.

---

## Roadmap (PartyGem-specific)

Tracked in full at [`../roadmap.md`](../roadmap.md); PartyGem-specific items:

- **Phase B** — Metric catalog and real analytics series (replacing demo data).
- **Phase C** — Org collaboration: roster-based picker, org-scoped analytics, subscription purchase UX polish.
- **§12 Ticketing closure** — End-to-end purchase lifecycle, RSVP↔ticket gating, refund rules, QR check-in (organizer + collaborator scan), test coverage. Observability build-out is sequenced after this.
- **Phase D** — Vector-backed ROI hints, audited exports.
- **Phase E** — Async job infra, quotas, observability stack.
- **Phase F** — Native iOS/Android thin clients on the same APIs.

---

## How PartyGem plugs into the Gems family

PartyGem is the **demand side** of Events as a Service. Each future Gem plugs into it:

- **Service Gem** will staff PartyGem events (caterers, artists, freelancers).
- **Venue Gem** will supply spaces for PartyGem events.
- **RoboGem** will physically assist PartyGem attendees at venues.
- **PartyGem AI** (the platform) will orchestrate all of the above — identity, payments, entitlements, AI.

See [`partygem-ai-platform.md`](partygem-ai-platform.md).

---

## FAQ lifted from the site

- **Is PartyGem free to use?** Yes — the Free Plan includes essential event creation and automated reminders. Premium and Business unlock analytics, advanced messaging, and sponsorship tracking.
- **What integrations exist?** Google Calendar, Zoom, cloud storage for photos/videos, analytics tools. More coming, especially sponsorship outreach automation and social-media event promotion.
- **How is PartyGem different from Eventbrite or Meetup?** Traditional platforms monetize tickets and ads. PartyGem is AI-first, privacy-first, and is part of a broader Gems ecosystem — vendors (Service Gem), venues (Venue Gem), and on-site concierge (RoboGem).
