# partygemai.com — PartyGem AI marketing site

Next.js 14 + Tailwind marketing and corporate site for **PartyGem AI**, an AI/ML and full-stack consulting agency and the makers of the **PartyGem** event management product.

Live at **[partygemai.com](https://partygemai.com)**. App at **[app.partygemai.com](https://app.partygemai.com)**.

---

## Branding quick reference

- **PartyGem AI** — the consulting agency and the orchestration layer uniting every Gem.
- **PartyGem** — our flagship product (event management).
- **Gems family** — PartyGem (live) + Service Gem, Venue Gem, RoboGem (roadmap / future).

See [`docs/wiki/brand.md`](docs/wiki/brand.md) for the full naming rules.

---

## Documentation

| File | Purpose |
|------|---------|
| [`ARCHITECTURE.md`](ARCHITECTURE.md) | Shared architecture and design pillars across PartyGem AI + all Gems. |
| [`DESIGN.md`](DESIGN.md) | Visual design system for `partygemai.com` (Stitch / VoltAgent format). |
| [`docs/wiki/README.md`](docs/wiki/README.md) | Company wiki — overview, per-Gem pages, roadmap, consulting, government contracting. |

---

## Development

```bash
nvm use              # reads .nvmrc
npm install
npm run dev          # http://localhost:3000
```

Build and deploy via Netlify (see `netlify.toml`).
