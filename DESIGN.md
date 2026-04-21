# PartyGem AI — DESIGN.md

**Brand:** PartyGem AI (consulting agency) · Maker of PartyGem
**Surface:** `partygemai.com` marketing site + (over time) the PartyGem product shell
**Format:** Stitch DESIGN.md (inspired by [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md))
**Last updated:** 2026-04-21

Drop this file into a project root and tell your AI agent: *"Build me a page that looks like the PartyGem AI design system."*

---

## 1. Visual Theme & Atmosphere

**One-line mood:** Warm editorial tech — a serious consulting agency that ships AI, with a confetti-bright product sparkle.

- **Philosophy:** "Conjure intelligent software." The system pairs a disciplined shadcn/slate neutral chassis with a four-color brand accent palette (**purple, mocha, red, aqua**) that nods at both confetti and gemstones.
- **Density:** Generous. Content is centered at `max-w-[1400px]` with 2rem container padding. Heroes clear `min-h-[90vh]`; sections breathe at `py-12 md:py-24`.
- **Motion:** Subtle `fade-in` + `translate-y` on scroll reveal, `pulse` and `confetti-fall` for product flourish, `translate-y-[-4px]` hover on cards. All motion respects `prefers-reduced-motion`.
- **Dual mode:** First-class light and dark (shadcn-style). Hero uses a warm radial + subtle grid overlay; dark mode swaps to a deep navy-slate backdrop (`222.2 84% 4.9%`).
- **Voice:** Confident, plural-first ("we ship"), technically specific (Go, Postgres, Stripe Connect, SAM.gov). Product copy is playful where appropriate ("Gems," "conjure"); agency + government copy stays crisp and declarative.

---

## 2. Color Palette & Roles

All tokens are declared as HSL triplets in `app/globals.css` and wired into Tailwind via `tailwind.config.ts`. Hex values below are rounded representations for reference.

### Brand accents

| Name | Token | HSL | ~Hex | Role |
|------|-------|-----|------|------|
| Brand Purple (primary) | `--brand-purple` / `--primary` | `262 52% 47%` | `#5A399B` | Primary CTA, links, focus ring, "Live" pill, active nav |
| Brand Mocha | `--brand-mocha` | `25 36% 38%` | `#7E5A40` | Hero grid lines, warmth, editorial depth |
| Brand Red | `--brand-red` | `356 76% 43%` | `#C1172A` | Confetti, alerts, phase labels (Pre-Event) |
| Brand Aqua | `--brand-aqua` | `178 100% 41%` | `#00D0C7` | Confetti, accents (government-contracting badge), fresh/hopeful moments |

### Semantic (light theme)

| Role | Token | HSL | ~Hex |
|------|-------|-----|------|
| Background | `--background` | `0 0% 100%` | `#FFFFFF` |
| Foreground (text) | `--foreground` | `222.2 84% 4.9%` | `#020817` |
| Card | `--card` | `0 0% 100%` | `#FFFFFF` |
| Muted | `--muted` | `210 40% 96.1%` | `#F1F5F9` |
| Muted foreground | `--muted-foreground` | `215.4 16.3% 46.9%` | `#64748B` |
| Border | `--border` | `214.3 31.8% 91.4%` | `#E2E8F0` |
| Input | `--input` | `214.3 31.8% 91.4%` | `#E2E8F0` |
| Ring (focus) | `--ring` | `262 52% 47%` | `#5A399B` |
| Destructive | `--destructive` | `0 84.2% 60.2%` | `#EF4444` |

### Semantic (dark theme)

| Role | Token | HSL | ~Hex |
|------|-------|-----|------|
| Background | `--background` | `222.2 84% 4.9%` | `#020817` |
| Foreground | `--foreground` | `210 40% 98%` | `#F8FAFC` |
| Muted | `--muted` | `217.2 32.6% 17.5%` | `#1E293B` |
| Muted foreground | `--muted-foreground` | `215 20.2% 65.1%` | `#94A3B8` |
| Border | `--border` | `217.2 32.6% 17.5%` | `#1E293B` |
| Destructive | `--destructive` | `0 62.8% 30.6%` | `#7F1D1D` |

**Usage rule:** use **semantic** tokens for everything structural (text, surfaces, borders) and **brand** tokens only for emphasis (CTAs, live badges, confetti, agency-vs-gem signals). Do not build whole components out of brand colors.

---

## 3. Typography Rules

**Family:** `Inter` via `next/font/google`, assigned to `--font-sans`. Tailwind's `font-sans` stack is `[var(--font-sans), ...system]`. Font feature settings: `"rlig" 1, "calt" 1` (ligatures + contextual alternates).

| Token / Use | Class pattern | Size / line-height | Weight | Tracking |
|-------------|---------------|--------------------|--------|----------|
| Display (Hero H1) | `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter` | ~36 → 60 px | 700 | `tracking-tighter` (−0.05em) |
| Section H2 | `text-3xl md:text-4xl font-bold tracking-tighter` | ~30 → 36 px | 700 | tight |
| Sub-hero lead | `text-xl md:text-2xl text-muted-foreground` | 20–24 px | 400 | normal |
| Card H3 | `text-xl font-bold` | 20 px | 700 | normal |
| Body | `text-base text-muted-foreground leading-relaxed` | 16 px / 1.625 | 400 | normal |
| Small / meta | `text-sm text-muted-foreground` | 14 px | 400 | normal |
| Micro / badge | `text-xs font-medium uppercase tracking-wide text-muted-foreground` | 12 px | 500 | `tracking-wide` (+0.025em) |
| Nano (pill caption) | `text-[10px] font-semibold uppercase tracking-wide` | 10 px | 600 | `tracking-wide` |

**Do:** Pair `tracking-tighter` with large display type; lean on `text-muted-foreground` for body to keep the neutral chassis calm.
**Don't:** Introduce additional type families or serif/mono on marketing pages — save those for product surfaces if ever needed.

---

## 4. Component Stylings

All components below live in `components/ui/*` (shadcn patterns) or top-level `components/*`.

### Buttons (`components/ui/button.tsx`)

- **Primary (default):** solid `bg-primary text-primary-foreground`, 0.5rem radius, subtle shadow. Hover darkens via `hover:bg-primary/90`. Used for top CTAs ("Try PartyGem", "Get in Touch").
- **Outline:** `border border-input bg-transparent text-foreground`, hover `bg-muted/70`. Used as the secondary CTA on every hero ("Work with our agency", "Talk to the agency").
- **Ghost / link:** For in-content affordances (e.g., "See Sample Dashboards" on features).
- **Sizes:** `sm`, `default`, `lg` (hero), `icon`. Hero pairings always use `size="lg"`.
- **Special brand buttons (Pricing):** `bg-brand-purple hover:bg-brand-purple/90` for the premium tier; `border-brand-purple text-brand-purple hover:bg-brand-purple/10` for free/business outlines. These are the **only** places brand colors override the primary token in buttons.

### Cards

- Base: `rounded-lg border border-border bg-background shadow-sm`.
- Hover (`.pricing-card`, feature cards): `hover:translate-y-[-4px] hover:shadow-md`, 300 ms ease.
- **Roadmap/future Gem cards:** `border-dashed border-primary/30` — signals "not yet shipped" without loud copy.
- **Live/flagship card:** solid `border-primary/30` plus a "Live" pill in `bg-primary/10 text-primary`.

### Pills / Badges

- **Status pills** (`Live`, `Roadmap`, `Future`): `rounded-full text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5`. Live uses `bg-primary/10 text-primary`; Roadmap/Future use `bg-muted text-muted-foreground`.
- **Section kickers** (above hero H1s): `inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground` with a small brand-color icon (`brand-purple` for agency, `brand-aqua` for government).

### Inputs

- `rounded-md border border-input bg-background`, focus ring uses `--ring` (brand purple). Shadcn defaults; no custom input style needed on marketing site beyond the toast container + server action form.

### Navigation (`components/navbar.tsx`)

- Sticky, `z-50`, transitions to `bg-background/80 backdrop-blur-md border-b` after 10 px scroll; transparent above.
- Logo is wordmark-only: `PartyGem AI` in `font-bold text-xl`.
- Active link gets `text-primary`; inactive is `text-muted-foreground`. Hover moves to `text-primary`.
- Primary CTA on the right is **always** "Try PartyGem" → `https://app.partygemai.com`.

### Footer (`components/footer.tsx`)

- `bg-muted/50 border-t`, 4-column grid on desktop.
- Brand tagline is required: `"AI/ML & full-stack consulting agency. Makers of PartyGem and a growing family of Gems powering Events as a Service."`
- Columns: **Product** (features, pricing, app link) · **Agency** (about, contact, privacy, terms).

### Hero surface (`.hero-gradient` in `globals.css`)

- Radial gradient blending brand-mocha, brand-aqua, brand-red at low opacity.
- Grid overlay in `rgba(122, 91, 71, 0.1)` 20-px steps — a warm architectural grid, not a sterile tech grid.
- Hosts animated confetti pieces on the homepage only.

### Confetti (`.confetti-piece`)

- 8×8 px squares on a 3-s fall animation, rotating 360°, rotated through brand purple / mocha / red / aqua.
- Pointer-events disabled; below z-10 content; paused (`animation: none`) under `prefers-reduced-motion`.

---

## 5. Layout Principles

- **Container:** Tailwind container with `center: true`, `padding: "2rem"`, `2xl: 1400px`. Apply via `className="container px-4 md:px-6"`.
- **Section rhythm:** `py-12 md:py-24` (standard), `py-12 md:py-24 lg:py-32` (big heroes). Alternate `bg-background` and `bg-muted/50` for visual separation — never three adjacent sections of the same background.
- **Grid defaults:**
  - Feature row: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`.
  - Gems family row: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`.
  - Hero 50/50: `grid-cols-1 lg:grid-cols-2 gap-12 items-center`.
- **Whitespace philosophy:** Every piece of copy under 800 px wide (`max-w-[800px]`), every page has at least one "breather" section (centered single column, 3xl H2 + muted lead).
- **Alignment:** Headings are center-aligned for marketing sections, left-aligned for dense two-column blocks (government contracting, mission).
- **Spacing scale:** Stick to Tailwind's default scale (`gap-4`, `gap-6`, `gap-8`, `gap-12`). Avoid arbitrary values.

---

## 6. Depth & Elevation

| Surface | Treatment |
|---------|-----------|
| Page body | Flat `bg-background`. No shadow. |
| Muted section | `bg-muted/50` with `border-t/b` implicit via section boundaries. |
| Card (default) | `border border-border shadow-sm`. |
| Card (hover) | `shadow-md` + `translate-y-[-4px]`. |
| Card (roadmap) | Dashed 1 px `border-dashed border-primary/30`, no shadow. |
| Sticky navbar (scrolled) | `bg-background/80 backdrop-blur-md border-b` (no shadow — backdrop blur carries the depth). |
| Pricing highlight | The Premium card adds `bg-brand-purple/20 border-brand-purple` — the *only* filled brand surface in the system. |

**Rule:** Depth comes from border + backdrop blur + small shadow. Avoid glow effects, avoid heavy `shadow-xl`.

---

## 7. Do's and Don'ts

### Do
- **Brand-name discipline:** "PartyGem AI" for the agency/orchestration layer; "PartyGem" for the product; other Gems are proper-cased ("Service Gem", "Venue Gem", "RoboGem").
- **Use `<Trans>` wrapping** for any user-visible string in this repo — it's how localization hooks into the site.
- **Pair dual CTAs** in every hero: one to the product (`Try PartyGem`), one to the agency (`Work with our agency` / `Talk to us`).
- **Signal roadmap vs live** with dashed borders and `Roadmap` / `Future` pills, never with grey text alone.
- **Respect reduced motion.** All transitions must be disableable via `@media (prefers-reduced-motion)`.
- **Use semantic HSL tokens** (`hsl(var(--primary))`) so dark mode "just works."

### Don't
- Don't introduce new brand colors. Four accents — purple, mocha, red, aqua — is the full palette.
- Don't ship raw hex in Tailwind classes; extend the config or use CSS variables.
- Don't use serif or monospace fonts on marketing pages.
- Don't put the wordmark "PartyGem" where you mean the agency — it dilutes the dual-identity system.
- Don't animate on hover without a corresponding `prefers-reduced-motion` reset.
- Don't fill large surfaces with brand purple; it's an accent, not a wallpaper (the Premium pricing card is the single sanctioned exception).

---

## 8. Responsive Behavior

- **Breakpoints (Tailwind defaults):** `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280 · `2xl` 1536 (container caps at 1400 px).
- **Navbar collapse:** Primary links collapse to a `Menu` icon ≤ `md` (`768 px`). Mobile menu drops from below the sticky header with the same active-state semantics.
- **Hero CTAs:** `flex-col sm:flex-row gap-4` — single-column stack on phones, side-by-side at ≥ 640 px.
- **Grid reflow:** 4-column Gems row → 2-column at `md`, 1-column on phones. 3-column feature grid → 2-column at `md`, 1-column under 640 px.
- **Touch targets:** Buttons `lg` = 44 px tall; mobile menu links use `py-2` minimum. No sub-40-px hit targets.
- **Typography:** Display text uses `text-4xl md:text-5xl lg:text-6xl` — never set a single giant size without breakpoint variants.
- **Images:** Lean on `next/image` with explicit `width`/`height`; preserve aspect ratios with `aspect-square` / `aspect-video` containers.

---

## 9. Agent Prompt Guide

### 9.1 Quick color reference

```text
Primary / Brand Purple : hsl(var(--primary)) / hsl(var(--brand-purple))  (~#5A399B)
Brand Mocha            : hsl(var(--brand-mocha))                         (~#7E5A40)
Brand Red              : hsl(var(--brand-red))                           (~#C1172A)
Brand Aqua             : hsl(var(--brand-aqua))                          (~#00D0C7)
Background             : hsl(var(--background))
Foreground             : hsl(var(--foreground))
Muted surface          : hsl(var(--muted))        /  bg-muted/50 for sections
Muted text             : hsl(var(--muted-foreground))
Border                 : hsl(var(--border))
Focus ring             : hsl(var(--ring))                                 (= brand purple)
```

### 9.2 Ready-to-use prompts

**Build a marketing section ("Why us") in the PartyGem AI design system:**

> Build a full-width section with `bg-muted/50`, container padding `px-4 md:px-6` and `py-16 md:py-24`. Center a `text-3xl md:text-4xl font-bold` heading and a `text-xl text-muted-foreground max-w-[800px]` lead beneath it. Below, render a 4-column grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`) of cards. Each card: `rounded-lg border border-border bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md`. Use `lucide-react` icons inside a `h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center` circle. Wrap copy in `<Trans>…</Trans>`.

**Build a dual-CTA hero for the agency:**

> Full-width `min-h-[90vh]` section with the `.hero-gradient` class. Centered stack: a `rounded-full border bg-background/60 backdrop-blur` kicker with a `Sparkles` icon, then a `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter` H1, then an `text-xl md:text-2xl text-muted-foreground max-w-[800px]` subhead. Two CTAs: primary `Button size="lg"` linking to `https://app.partygemai.com` (external), and an outline `Button size="lg"` linking to `/contact`. Respect `prefers-reduced-motion`.

**Flag a roadmap item vs a live product:**

> For a roadmap/future item, use `border-dashed border-primary/30` on the card and append a `Roadmap` or `Future` pill: `rounded-full bg-muted text-muted-foreground text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5`. For a live item, use solid `border-primary/30` and a `Live` pill with `bg-primary/10 text-primary`.

**Name things correctly:**

> "PartyGem AI" is the consulting agency and orchestration layer. "PartyGem" is the event management product. Use "Service Gem", "Venue Gem", and "RoboGem" for roadmap products. Never call the agency "PartyGem" alone.

### 9.3 File map for agents

- Design tokens: `app/globals.css`, `tailwind.config.ts`.
- Components: `components/*` (top-level feature components), `components/ui/*` (shadcn primitives).
- Pages: `app/*/page.tsx` (App Router).
- Long-form docs: `ARCHITECTURE.md`, `docs/wiki/*`.

---

*This file is the single source of truth for how `partygemai.com` looks and feels. Update it whenever a brand token, layout rule, or naming convention changes.*
