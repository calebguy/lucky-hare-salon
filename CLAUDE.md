# CLAUDE.md — Lucky Hare Salon site

Quick-start context for Claude (and humans) working in this repo.

## What this is

The informational website for **Lucky Hare Salon** — a private hair studio
in Austin, TX run by stylists **Devon Williams** and **Neva Gregory**. It's an
intimate, one-on-one space: a single chair that Devon and Neva share by booking
clients at separate times (NOT a two-chair salon — don't describe it that way). It's a marketing
site (About, Services, Location, Contact), **not** a booking app: there is **no online
scheduler**. Clients book by **text, call, email (`info@luckyharesalon.com`), or Instagram
DM**, and the studio is **by appointment only** (no walk-ins, no posted business hours).

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript 5**
- **Tailwind CSS v4** (config-less; theme tokens live in `app/globals.css` via `@theme`)
- **Bun** as package manager (`bun.lock`)
- Hosting: **Vercel** · DNS: **Cloudflare** · Email: **Zoho** · domain `www.luckyharesalon.com`
- Analytics: Vercel **Web Analytics** + **Speed Insights** (mounted in `app/layout.tsx`)

## Commands

```bash
bun install      # install deps
bun run dev      # local dev server
bun run build    # production build — run this before committing UI changes
bun run lint     # eslint
```

## The one rule: content lives in `app/site.ts`

**`app/site.ts` is the single source of truth for all site content** — business info,
contact, location, availability, stylists, services, reviews. Pages read from it, so to
change an address, price, bio, phone, etc. you edit `site.ts`, **not** the JSX. Anything
marked `TODO_…` / `TODO:` is a placeholder awaiting real content.

Key shapes in `site.ts`:
- `business`, `contact` (shared `info@` email — booking is contact-only)
- `location` + `fullAddress`
- `availability` — `{ summary: "By appointment only", days: "" }`. We intentionally do
  **not** publish day-by-day hours (a private studio shouldn't invite walk-ins).
- `stylists[]` — each has `name` (full, used as heading), `firstName` (friendly CTAs),
  **its own `phone`** (Devon and Neva each take clients on their own number — there is no
  shared salon line), `specialties`, `bio`, `instagram`, `photo`, `bookingNote`.
- `services[]`, `reviews[]`

## Project layout

```
app/
  layout.tsx        # fonts, metadata, HairSalon JSON-LD, Nav/Footer, Analytics
  page.tsx          # home
  about|services|location|contact/page.tsx
  site.ts           # ← all content
  globals.css       # brand tokens (colors + fonts) and base styles
  sitemap.ts, robots.ts, icon.tsx, opengraph-image.png, twitter-image.png
components/
  Nav.tsx, Footer.tsx
  icons/            # brand SVGs: PrimaryLogo, Emblem, StarCharm, Illustration
fonts/              # TAYDreamboat.otf (+ Thin) — local display font
```

## Brand / design system

- **Type pairing:** `font-dreamboat` / `font-dreamboat-thin` (TAYDreamboat, an all-caps
  display face) is for the **logo and headings only**. Body copy uses **Nunito Sans**
  (the default `font-sans` / `--font-body`). Keep paragraphs in the body font — the
  display font is hard to read at small sizes, and long single words can overflow narrow
  cards (use short headings like "Booking", not "Appointments").
- **Color tokens** (in `app/globals.css`, used as Tailwind `bg-*`/`text-*`):
  `sage #EBECE2` · `blue #064E90` · `light-blue #ADC9E0` · `orange #F26425`
  · `brown #442110` · `green #509957`. The deep `blue` is the primary text/UI blue.
- Indentation is **tabs**.
- It's a **fixed light theme** — do not add a `prefers-color-scheme: dark` override
  (an old one was flipping body text near-white on the sage background).

## Conventions & guardrails

- **No fabricated content.** `reviews[]` stays empty until there are real reviews — do
  **not** invent any. Same for bios/services: leave `TODO` rather than make things up.
- **No secrets in the repo.** Use Vercel env vars if anything is ever needed.
- Publish **business numbers**, not personal cells; strip EXIF/GPS from photos before
  adding them to `/public/stylists/`.
- Run `bun run build` before committing UI changes; the build type-checks.

## Status / next steps

- Active work happens on the **`site-buildout`** branch (the polished multi-page site);
  `main` holds the original single-page landing. Launch = merge `site-buildout` → `main`.
- Before launch, fill the `TODO`s in `site.ts` (phones, address, parking, bios,
  services/pricing, Instagram handles, photos). Owners have a plain-language fill-in doc
  (kept on Alex's machine, outside the repo).
- After launch: redirect the old `.salon` domain → `.com`, then Google Business Profile
  and other listings.
