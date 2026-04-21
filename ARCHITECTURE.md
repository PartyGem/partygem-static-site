# PartyGem AI — Architecture

**Repository:** `partygem-static-site` (this repo — marketing / corporate site)
**Status:** Living document
**Last updated:** 2026-04-21

This file defines the intent, boundaries, and shared mental model for everything PartyGem AI builds. It's written to be read by humans, future teammates, and coding agents.

---

## 1. What PartyGem AI is

**PartyGem AI is a consulting agency** specializing in **AI/ML** and **full-stack software development**. We take on client engagements (private sector and U.S. federal) and we build our own product line — a family of **"Gems"** — in parallel.

**Our flagship product is PartyGem**, an intelligent event management service.

> PartyGem AI is the company. PartyGem is the product.
>
> Use "PartyGem AI" when referring to the agency, the team, the brand, or the orchestration layer.
> Use "PartyGem" when referring to the event management product specifically.

---

## 2. The Gems family

PartyGem AI orchestrates a portfolio of products — **Gems** — that together form an **Events as a Service** platform and a **new gig economy** anyone can participate in.

| Gem | Status | One-liner |
|-----|--------|-----------|
| **PartyGem** | **Live (alpha)** | Makes events happen. Organizer-first event management — tickets, RSVPs, check-in, sponsorships, analytics. |
| **Service Gem** | Roadmap | Hires freelancers, caterers, businesses, and artists to sell products/services into live events. |
| **Venue Gem** | Roadmap | Venue matching service. Ensures every event has a setting by connecting organizers with rentable spaces. |
| **RoboGem** | Future | Humanoid concierge to check guests in and guide them through physical spaces and events. |
| *Future Gems* | TBD | Additional Gems to be conjured as the platform matures. |

**PartyGem AI** sits above all Gems as the **orchestration layer** — the identity, payments, RBAC, AI, and policy plane that makes cross-Gem flows work (e.g., a PartyGem event booking a Venue Gem space, staffed by Service Gem vendors, with RoboGem on-site concierge).

---

## 3. Design pillars (shared across all Gems)

These pillars apply to PartyGem itself and to every future Gem, and they inform client engagements where we own the architecture.

| Pillar | Meaning |
|--------|---------|
| **Server-authoritative trust boundary** | AuthN/Z, money, and tier entitlements are enforced in the Go backend before HTMX, JSON, or AI services. Never a client-only gate. |
| **RDS / Postgres is canonical** | Identity, subscriptions, organizations, events, tickets, and future metric definitions live in migrated SQL. Vectors and LLM outputs are not the ledger. |
| **Tier + org RBAC compose** | Subscription tier = what you've paid for. Org role = what you can do inside a tenant. Both checked where relevant. |
| **Payments split** | PartyGem AI subscriptions vs. Stripe Connect ticket commerce are architecturally distinct; webhooks own truth. |
| **Web first, native later** | Responsive web + PWA until the product has traction; native iOS/Android clients come after APIs, auth, and entitlements stabilize. |
| **Deterministic Go + SQL own money & tier** | LLM/"agentic" features operate on curated context and structured tools. Non-determinism never owns the ledger. |

---

## 4. Reference architecture — PartyGem (flagship)

See [`../PartyGem/doc/architecture.md`](../PartyGem/doc/architecture.md) and [`../PartyGem/docs/PLATFORM_ARCHITECTURE_PRD.md`](../PartyGem/docs/PLATFORM_ARCHITECTURE_PRD.md) for the full, living PRD. Summary:

### 4.1 Stack

- **Frontend:** Go templates (SSR) + HTMX for interactivity, Alpine.js for local state, Tailwind CSS + FrankenUI for design tokens.
- **Primary backend (Go):** Gin/HTMX server, business logic, authZ, Stripe webhooks, WebSockets.
- **Databases:**
  - **PostgreSQL** — events, RSVPs, ticket data, analytics, organizations, roles.
  - **MySQL** — users, authentication, FULLTEXT search for profile/user lookup.
- **AI services (Python):** FastAPI + Celery for async ML tasks; **Pinecone** for event content embeddings, semantic search, and RAG.
- **Payments:** **Stripe Connect** for ticketing; standard Stripe Customer for PartyGem AI subscription tiers.
- **Packaging:** Docker Compose for local dev and deployment.

### 4.2 Data flow

- Client ↔ Go server: REST + HTMX + WebSocket.
- Client ↔ Python AI service: REST, behind the Go trust boundary (bearer-token service-to-service).
- Go ↔ Postgres / MySQL (direct).
- Python AI ↔ Pinecone for vectors.
- Celery workers for event vectorization and ML pipelines.

### 4.3 Tiered entitlements

Tiers are `Free`, `Premium`, `Business`. Organizer analytics is **Business-only** regardless of DB flag drift — see `analytics_entitlements.go` in the PartyGem repo.

| Capability | Free | Premium | Business |
|------------|------|---------|----------|
| Organizer analytics dashboard | No | No | Yes (when `analytics_enabled`) |
| Instant / vector refresh | No | No | Yes (when `instant_analytics_enabled`) |
| Future org portfolio / benchmarks | No | TBD | Primary |

---

## 5. Reference architecture — `partygem-static-site` (this repo)

This is the **marketing and corporate site** for PartyGem AI the agency.

- **Framework:** Next.js 14 (App Router) + React + TypeScript.
- **Styling:** Tailwind CSS + shadcn/ui primitives, custom brand tokens (see `DESIGN.md`).
- **Hosting:** Netlify (see `netlify.toml`).
- **Content model:** JSX-per-route. Copy lives in-component today; long-form docs live in `/docs/wiki/`.
- **Forms:** Google Forms embed for early-access mailing list; server action stub in `app/actions/subscribe.ts`.
- **Analytics:** Client-side event tracker (`lib/analytics.ts`) — see `trackEvent("checkout_start", ...)`, etc.
- **External apps:**
  - `https://app.partygemai.com` — PartyGem web app (the Go + HTMX product).

**Routes:**
- `/` — Home. Positions the agency + Gems family + government contracting.
- `/about` — Mission, Gems family, government contracting, founders, values.
- `/features` — PartyGem product features (current + roadmap).
- `/pricing` — PartyGem subscription tiers.
- `/contact` — Early access / contact form (agency + product).
- `/privacy`, `/terms` — Legal.
- `/dashboards`, `/admin`, `/api`, `/events` — Internal / demo routes (see `app/`).

---

## 6. Consulting practice

Beyond the Gems product line, PartyGem AI takes on outside engagements:

- **AI/ML consulting:** Applied ML, RAG pipelines, agentic workflows, evals, production MLOps.
- **Full-stack software:** Go, Python, TypeScript, Next.js, Postgres, cloud-native infrastructure (AWS first).
- **Payments & compliance:** Stripe Connect, webhook hardening, auditable data flows, RBAC design.
- **Government contracting (federal focus):**
  - **SAM.gov:** Registered with the U.S. federal government to bid on software contracts; registration is currently being renewed with updated tax documentation.
  - **NSF SBIR:** Pursuing non-dilutive research and productization funding.
  - **Teaming:** Open to IDIQ / BPA / subcontracting arrangements with prime contractors.

Consulting engagements inform the Gems roadmap; lessons learned from client work flow back into PartyGem AI's core infrastructure (AuthZ patterns, observability, payment design, AI safety rails).

---

## 7. Roadmap (phases)

| Phase | Focus | State |
|-------|-------|-------|
| **A** | PartyGem alpha: tier-gated analytics, entitlements, core RSVP/ticket flows | **Done** |
| **B** | PartyGem Phase B: metric catalog, real analytics series, richer dashboards | In progress |
| **C** | Org collaboration (rosters, picker, org-scoped analytics), subscription purchase UX | Partial |
| **D** | Vector-backed ROI hints, audited exports, refined RAG | Planned |
| **E** | Async job infra, quotas, observability (Prometheus + Grafana or CloudWatch) | Planned |
| **F** | Native iOS / Android thin clients | Future |
| **G1** | **Service Gem** MVP (freelancer/vendor marketplace) | Future |
| **G2** | **Venue Gem** MVP (venue matching) | Future |
| **G3** | **RoboGem** research and pilots (embodied concierge) | Long-term |
| **Gov** | Active federal bids and SBIR submissions, teaming partnerships | In progress |

Observability work follows the current PartyGem ticketing / RSVP / refund / QR check-in closure (see PartyGem PRD §12).

---

## 8. Standards & conventions

- **Naming:** "PartyGem AI" = the agency. "PartyGem" = the product. Other Gems are proper-cased ("Service Gem", "Venue Gem", "RoboGem"). Never "partygem.ai" in copy; the domain is `partygemai.com`.
- **Code style:** Follow existing per-repo conventions (Go style in the PartyGem repo; ESLint/TS strictness in this repo).
- **Migrations:** Any schema change lands as a migration in `server/migrations/{mysql,postgres}/` (PartyGem). No ad-hoc production SQL.
- **Secrets:** Never in chat, never in repo. Use environment files / AWS Secrets Manager.
- **Design tokens:** See `DESIGN.md` in this repo. The marketing site and the PartyGem app should draw from the same token set over time.
- **Documentation:** Long-form docs go in `docs/wiki/` (this repo) or in `doc/` / `docs/` inside the PartyGem repo. Update `ARCHITECTURE.md` when pillars, stack boundaries, or Gem membership change.

---

## 9. Where to read next

- `DESIGN.md` — Brand and UI design system for `partygemai.com`.
- `docs/wiki/README.md` — Index of company/product wiki pages.
- `docs/wiki/products/partygem.md` — Flagship product overview.
- `docs/wiki/products/service-gem.md`, `venue-gem.md`, `robogem.md` — Roadmap Gems.
- `docs/wiki/government-contracting.md` — SAM.gov, SBIR, capabilities statement.
- `docs/wiki/roadmap.md` — Combined roadmap.
- PartyGem repo: `doc/architecture.md`, `docs/PLATFORM_ARCHITECTURE_PRD.md`.
