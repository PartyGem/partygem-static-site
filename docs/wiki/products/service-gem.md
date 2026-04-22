# Service Gem

**Status:** 🟡 Roadmap
**One-liner:** Hires freelancers, caterers, businesses, and artists to sell their products or services into live events.

---

## Why Service Gem

PartyGem organizers need **people and things** beyond software: food, drinks, photographers, DJs, decorators, security, artists, merch. Today, organizers solve this with scattered vendor lists, group chats, and luck. Service Gem is the missing supply-side marketplace.

If PartyGem aggregates **demand** (events + organizers + attendees), Service Gem aggregates **supply** (services + goods) — and together they unlock the first real "Events as a Service" economy on the PartyGem AI platform.

---

## Proposed scope (MVP)

- **Vendor profiles** — categories, portfolios, rate cards, availability calendars.
- **Offer types** — hourly services, package deals, physical goods (catering + sale items).
- **Matching** — AI-assisted matching from an event brief to a ranked vendor shortlist.
- **Contracting** — in-app quote, accept, deposit, delivery confirmation.
- **Payments** — Stripe Connect (same rails as PartyGem ticketing). Payouts on milestones.
- **Reviews** — bi-directional ratings tied to completed events.
- **PartyGem integration** — organizers browse Service Gem directly from an event management view.

## Proposed architecture (sketch)

- Reuses the PartyGem AI **trust boundary**: all money and tier logic in Go + SQL.
- Vendor catalog is **Postgres-first** with Pinecone embeddings for semantic search ("a Punjabi wedding caterer in Queens under $8k").
- Booking contracts modeled as explicit state machines; Stripe Connect handles escrow-like payment flows.
- Shares identity and entitlements with PartyGem via the orchestration layer ([`partygem-ai-platform.md`](partygem-ai-platform.md)).

## Dependencies before we start

- **PartyGem §12 closure** (ticketing lifecycle + QR check-in) — we want a stable payments path.
- **Org + role system** (Phase C) — vendors are effectively orgs with a different role set.
- **Metric catalog (Phase B)** — so Service Gem analytics share the same KPI plumbing.

## Open questions

- **Take-rate model.** Percentage of GMV? Subscription for vendors? Platform fee on top of Stripe?
- **Trust & safety.** What's the minimum KYC / insurance requirement to list?
- **Exclusivity with PartyGem.** Do we allow vendors to be listed without PartyGem adoption, or is Service Gem initially a PartyGem-only amenity?
- **Geographic rollout.** Which cities first (hint: where PartyGem already has density)?

## Naming note

"Service Gem" — two words, proper-cased. See [`../brand.md`](../brand.md).
