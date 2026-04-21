# Roadmap

**Scope:** Combined roadmap for PartyGem AI as an agency, the PartyGem product, and the broader Gems family. Mirrors (and links to) [`../../ARCHITECTURE.md`](../../ARCHITECTURE.md#7-roadmap-phases).

---

## Current focus (near term)

1. **PartyGem ticketing + RSVP + refund + QR check-in closure.** Build, test, document. This is the unblock before observability (see PartyGem PRD §12).
2. **Metric catalog (Phase B)** — real KPI series in analytics UI, replacing demo data.
3. **Government contracting hygiene** — complete SAM.gov renewal with updated tax documents; keep capability statement current.
4. **Marketing site alignment** — this rebrand cycle: `ARCHITECTURE.md`, `DESIGN.md`, and wiki.

---

## Phased plan

| Phase | Focus | State |
|-------|-------|-------|
| **A** — PartyGem alpha | Tier-gated analytics, entitlements, RSVP/ticket baseline | ✅ Done |
| **B** — Metric catalog | Named KPIs, real series in analytics UI | 🟡 In progress |
| **C** — Org collab | Rosters, picker, org-scoped analytics, subscription UX | 🟡 Partial |
| **D** — Vector enhancements | ROI hints, audited exports, refined RAG | 🔜 Planned |
| **E** — Async / scale | Job infrastructure, quotas, observability stack (Prometheus + Grafana or CloudWatch) | 🔜 Planned |
| **F** — Native clients | Thin iOS/Android clients on the same APIs | ⏳ Future |
| **G1** — Service Gem | Vendor / freelancer / caterer marketplace MVP | ⏳ Future |
| **G2** — Venue Gem | Venue matching MVP | ⏳ Future |
| **G3** — RoboGem | Research + first pilots of embodied concierge | ⏳ Long-term |
| **Gov** — Federal track | SAM.gov bids, SBIR submissions, teaming partnerships | 🟢 Active |

---

## Gems sequencing rationale

We ship the Gems in the order that **most increases the value of the ones already live**:

1. **PartyGem first** because it's the demand-aggregation layer (organizers and attendees).
2. **Service Gem next** because PartyGem's organizers need vendors immediately (caterers, freelancers, artists) — Service Gem turns PartyGem's traffic into marketplace liquidity.
3. **Venue Gem after** because once you have events and vendors, you can turn unused spaces into opportunities, and the matching quality compounds.
4. **RoboGem eventually** because embodied AI is easier when you already orchestrate the digital layer — RoboGem becomes the physical extension of an already-working software stack.

Each Gem plugs back into the **PartyGem AI orchestration layer** (see [`products/partygem-ai-platform.md`](products/partygem-ai-platform.md)).

---

## Agency track (parallel)

Consulting engagements and government contracts run in parallel with the product roadmap. Engagements are selected (roughly in priority order) by:

1. **Federal software contracts** (SAM.gov, SBIR) — strategic priority.
2. **AI/ML engagements** that exercise PartyGem AI platform capabilities (RAG, agentic, payments-adjacent).
3. **Full-stack engagements** where we own enough of the architecture to apply our pillars (server-authoritative trust, auditable flows, cloud-native).

Revenue from the agency track funds product development; product development produces reusable infrastructure for client work.

---

## What's explicitly **not** on the roadmap

- Consumer mobile-only strategies (we stay web-first until Phase F).
- Crypto-payment rails (Stripe Connect is enough).
- White-label event platforms (we sell PartyGem, not a reskin-as-a-service).
- Closed-ecosystem B2B directories that don't benefit PartyGem organizers.
- Paid SaaS observability vendors before free-tier Prometheus/Grafana or CloudWatch is exhausted.
