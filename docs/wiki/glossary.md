# Glossary

Shared vocabulary for everyone reading this wiki or writing copy for PartyGem AI.

## Agency / brand

- **PartyGem AI** — The consulting agency. Also the name of the orchestration layer uniting every Gem.
- **PartyGem** — The flagship product. An intelligent event management service.
- **Gem** — Any product in the PartyGem AI portfolio. Proper-cased and spaced: `Service Gem`, `Venue Gem`, `RoboGem`.
- **Gems family** — The full portfolio: PartyGem + Service Gem + Venue Gem + RoboGem + future Gems.
- **Events as a Service (EaaS)** — The overall offering PartyGem AI delivers by orchestrating the Gems family.

## Product architecture

- **Trust boundary** — The point in the stack where authZ, money, and tier checks are enforced. For PartyGem, that's the Go backend. See [`../../ARCHITECTURE.md`](../../ARCHITECTURE.md).
- **Entitlement** — A capability unlocked by a subscription tier. Example: `analytics_enabled`, `instant_analytics_enabled` (Business tier only).
- **Tier** — A PartyGem subscription level: `Free`, `Premium`, `Business`.
- **Org** — A PartyGem organization (tenant). Events can be linked to an org via `organization_id`. Members have roles (`active`, `pending`, `invited`).
- **Stripe Connect** — Stripe's marketplace product; PartyGem uses it for ticket commerce. Distinct from the PartyGem AI subscription customer.
- **Webhook-authoritative** — The rule that server-side webhooks are the source of truth for payment and refund state.

## Consulting & government

- **SAM.gov** — System for Award Management; the U.S. federal registration system required to bid on federal contracts. PartyGem AI is registered; renewal with updated tax documentation is in progress.
- **NSF SBIR** — National Science Foundation Small Business Innovation Research program. A non-dilutive funding vehicle for early-stage R&D with commercialization potential.
- **IDIQ** — Indefinite-Delivery / Indefinite-Quantity contract. A common federal contracting vehicle.
- **BPA** — Blanket Purchase Agreement. A simplified method of filling repetitive federal needs.
- **Teaming** — Partnering with another firm (often a prime contractor) to pursue federal work jointly.
- **Capability statement** — A one-pager (typical format) summarizing a firm's differentiators, past performance, NAICS codes, certifications, and contact info for federal opportunities.

## AI/ML vocabulary we lean on

- **RAG** — Retrieval-Augmented Generation. Grounding LLM outputs on retrieved context (e.g., from Pinecone).
- **Agentic workflow** — An AI system that plans and executes multi-step tool use; we treat these as **deterministic Go + SQL-owned** when money or tier is in the loop.
- **Embeddings** — Vector representations used by PartyGem for semantic search over event content.
- **MLOps** — The operational practice of shipping, monitoring, and iterating ML systems in production.
