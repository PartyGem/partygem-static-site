# PartyGem AI — The Orchestration Layer

**Status:** 🧩 Platform (cross-cutting)
**One-liner:** PartyGem AI is the layer orchestrating communication between all our Gems to create a new gig economy anyone can participate in through Events as a Service.

---

## Why an orchestration layer

Each Gem is valuable on its own:

- **PartyGem** knows events, tickets, and attendees.
- **Service Gem** knows vendors and service offers.
- **Venue Gem** knows spaces and availability.
- **RoboGem** knows guests, arrivals, and physical space.

But the real unlock is **cross-Gem flows**: a PartyGem organizer books a Venue Gem space, hires Service Gem vendors, and a RoboGem concierge greets ticketed guests — all transacted on shared payments rails, under shared identity, with shared trust rules.

That requires a **single orchestration layer**. That's PartyGem AI.

---

## Responsibilities

1. **Identity & SSO.** One PartyGem AI account that works across every Gem. Organizers, vendors, venue managers, and attendees live in one graph.
2. **Authorization model.** Tier + role composition that each Gem consumes:
   - **Tier** = what you've paid for (Free / Premium / Business / Enterprise-TBD).
   - **Role** = what you can do inside an org (owner, admin, collaborator, pending, invited).
   - Cross-Gem permissions are checked in the Go trust boundary, never in a client.
3. **Payments plane.** Stripe Connect for all commerce (tickets, vendor bookings, venue deposits). PartyGem AI subscriptions live separately as a standard Stripe customer. Webhooks own truth.
4. **AI plane.** Semantic search, RAG, and agentic workflows are centralized so every Gem benefits from the same embedding quality, prompt versioning, and eval pipeline.
5. **Policy plane.** Refund rules, non-refundable flags, consent flows, and privacy defaults cascade from the platform down to each Gem.
6. **Observability.** A shared metrics + logs stack (Prometheus + Grafana self-hosted or CloudWatch to start) so each Gem reports the same shape of telemetry.

---

## What belongs in the platform vs in a Gem

| Belongs in PartyGem AI (platform) | Belongs in a specific Gem |
|---|---|
| Identity, SSO, accounts | Domain-specific profile data (vendor catalog, venue photos, event schedule) |
| Tier + role model | Gem-specific business logic |
| Stripe Connect rails, subscription billing | Offer types (ticket tiers, vendor packages, venue bookings) |
| Shared embeddings + RAG infrastructure | Gem-specific prompts, retrieval corpora |
| Policy primitives (refundable flag, consent defaults) | How policy is surfaced and enforced in that Gem's UX |
| Service-to-service auth (bearer tokens between Go + Python AI) | HTMX/React views, Gem-specific UI |
| Audit log, eventing backbone | Gem-specific write models |

**Rule of thumb:** if more than one Gem needs it, it belongs in the platform. If it's UX or domain-specific, it stays in the Gem.

---

## How this maps to code today

Right now, PartyGem (the flagship) *is* where most of the platform primitives live — because PartyGem is the first and only live Gem. As Service Gem, Venue Gem, and RoboGem come online, we'll **extract** the platform pieces into shared modules / services. That means:

- `users`, `subscription_tiers`, `user_subscriptions`, `org_members` migrations become platform-owned.
- `analytics_entitlements.go` (tier gating) becomes a reusable package.
- Stripe Connect webhook handling becomes a shared service.
- The Pinecone + FastAPI AI layer becomes the shared AI plane with per-Gem namespaces.

See [`../../../ARCHITECTURE.md`](../../../ARCHITECTURE.md) for the canonical pillars, and PartyGem's [`PLATFORM_ARCHITECTURE_PRD.md`](https://github.com/syedwshah/PartyGem/blob/main/docs/PLATFORM_ARCHITECTURE_PRD.md) for the active, detailed PRD.

---

## The "gig economy" angle

PartyGem AI's orchestration layer makes it possible for **any participant** — organizer, vendor, artist, host, concierge operator — to plug in through a shared identity, shared payments rails, and shared trust rules.

An individual photographer can:

- Log in with a single PartyGem AI account.
- List availability on **Service Gem**.
- Get discovered via **PartyGem** event briefs.
- Be dispatched to a **Venue Gem** location.
- Be greeted and routed by **RoboGem** on arrival.

That's Events as a Service — and it's only possible because one platform orchestrates the whole loop.
