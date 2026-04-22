# Venue Gem

**Status:** 🟡 Roadmap
**One-liner:** Venue Gem will make sure the events have a setting. With our venue matching service.

---

## Why Venue Gem

Every event needs somewhere to happen. For organizers — especially first-timers — the **venue** is often the hardest and most expensive decision. Meanwhile, enormous amounts of usable space sit idle: restaurants between shifts, galleries between shows, co-working spaces on weekends, community halls nine nights out of ten.

Venue Gem turns unused spaces into event opportunities, and gives every PartyGem event a great place to land.

---

## Proposed scope (MVP)

- **Venue profiles** — capacity, layout, amenities, photos, neighborhood, accessibility, typical uses.
- **Availability calendars** — host-owned, synced when possible.
- **Matching** — brief-to-venue matching via semantic search + hard filters (capacity, catering, price ceiling, accessibility).
- **Booking** — hold → quote → confirm → deposit → day-of access instructions.
- **Payments** — Stripe Connect escrow-style; refund rules mirror PartyGem's non-refundable ticket framework but applied to venue deposits.
- **PartyGem integration** — organizers search Venue Gem from the event creation flow; the selected venue auto-populates event details.

## Proposed architecture (sketch)

- **Postgres-first** catalog (venues, amenities, calendars).
- **Pinecone embeddings** on venue descriptions for "find me a loft-style space with natural light and a grand piano" queries.
- **Calendar sync** via iCal ingestion to start; native Google/Outlook later.
- Shares identity and trust boundary with PartyGem via the orchestration layer ([`partygem-ai-platform.md`](partygem-ai-platform.md)).

## Dependencies before we start

- **Service Gem payments model** — we want consistent escrow mechanics across Gems.
- **PartyGem org + role system** — venue managers are orgs.
- **Observability (Phase E)** — so we can monitor booking flows reliably.

## Open questions

- **Host onboarding quality bar.** What's the minimum listing quality (photos, amenities, rules) before a venue can go live?
- **Pricing transparency.** Fixed prices vs request-a-quote? How do we handle tiered pricing for different days / hours?
- **Safety & liability.** Insurance and indemnity model for venue hosts and event organizers.
- **Hybrid with Service Gem.** Do venue packages bundle recommended vendors (catering, AV) automatically?

## Naming note

"Venue Gem" — two words, proper-cased. Not `VenueGem`.
