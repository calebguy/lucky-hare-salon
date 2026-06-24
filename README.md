# Lucky Hare Salon — website

The marketing/informational site for **Lucky Hare Salon**, a private, by-appointment
hair studio in Austin, TX run by stylists **Devon Williams** and **Neva Gregory**. It's a
single-chair studio they share by booking clients at separate times — an intimate,
one-on-one space (not a two-chair salon).

This is a **content site** (Home, About, Services, Gallery, Location, Contact) — **not** a
booking app. There is no online scheduler. Clients book by **text, call, email
(`info@luckyharesalon.com`), or Instagram DM**, by appointment only.

🌐 Live at **https://www.luckyharesalon.com**

---

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript 5**
- **Tailwind CSS v4** (config-less; theme tokens live in `app/globals.css` via `@theme`)
- **Bun** as package manager (`bun.lock`)
- **Static export** (`output: "export"` in `next.config.ts` → emits `out/`)
- Hosted on **Cloudflare Pages** · DNS on **Cloudflare** · Email via **Zoho**

## The one rule: content lives in `app/site.ts`

**`app/site.ts` is the single source of truth for all site content** — business info,
contact, location, stylists, service menus (pricing), and the photo gallery. Every page
reads from it, so to change a **price, bio, address, phone, Instagram handle, or photo**,
you edit `site.ts` — **not** the JSX. Anything marked `TODO:` is a placeholder.

## Local development

```bash
bun install
bun run dev      # http://localhost:3000 — live local preview while you edit
bun run build    # production build (static export → out/); run before committing UI changes
bun run lint
```

## Making a change

1. Branch off `main` and make your edits (usually just `app/site.ts`).
2. `bun run build` to type-check it.
3. **Push the branch to the deploy fork** for a live preview URL (see **Previews**).
4. **Push the same branch to this canonical repo** and open a **pull request into `main`**.
5. Review the preview, then merge. It deploys automatically (see **Architecture**).

> The fork and this repo share history but are **not** linked as a GitHub fork, so you push
> each working branch to **both**: the fork (for the Cloudflare preview) and this repo (for
> the PR). Two remotes, one branch.

## Previews

Push any branch to the **deploy fork** (`therealalexschwartz/lucky-hare-salon`) and
Cloudflare Pages automatically builds a preview at:

```
https://<branch-name>.lucky-hare-salon.pages.dev
```

No login required — safe to share with the owners for sign-off before merging.

```bash
git push <fork-remote> my-branch     # e.g. the remote pointing at the fork
# → https://my-branch.lucky-hare-salon.pages.dev builds in ~1 min
```

## Architecture: two repos + auto-sync deploy

Cloudflare Pages builds from a **fork**, because Cloudflare's GitHub app needs
repo-**admin** to connect a repo, which we only have on the fork. So there are two repos:

- **`calebguy/lucky-hare-salon` (this repo), branch `main`** — the **canonical source of
  truth**. All work lands here via PR.
- **`therealalexschwartz/lucky-hare-salon` (the fork)** — what **Cloudflare Pages builds
  and serves**. Its `site-buildout` branch is the production deploy branch.
- A scheduled **GitHub Action** in the fork
  (`.github/workflows/sync-canonical.yml`) mirrors canonical `main` → the fork's
  `site-buildout` every ~10 minutes (and on manual trigger). **`site-buildout` is
  robot-managed — never hand-edit it.**

So the deploy chain is:

```
edit → PR → merge to main (canonical) → sync robot mirrors to fork/site-buildout
     → Cloudflare Pages rebuilds → live at www.luckyharesalon.com  (~10 min)
```

For an **instant** deploy after a merge (instead of waiting for the ~10-min poll):

```bash
gh workflow run sync-canonical.yml --repo therealalexschwartz/lucky-hare-salon --ref main
```

## Hosting & infrastructure (high level)

| Piece | Where |
|-------|-------|
| Website | **Cloudflare Pages** (static export), serves `www.luckyharesalon.com` |
| DNS | **Cloudflare** — apex `luckyharesalon.com` 301-redirects to `www` |
| Email | **Zoho** — `info@luckyharesalon.com` reaches both stylists (`devon@` / `neva@` too) |
| Old domain | `luckyhare.salon` 301-redirects to the `.com` |
| Phone | a studio call-line routes callers to each stylist (used for listings; the site itself shows each stylist's own number) |

> **Note:** sensitive operational details — which accounts hold the DNS/hosting/email,
> who has access, and the phone setup — are **intentionally not in this public repo**.
> They live in a private owner doc kept by the owners. Ask Devon, Alex, or Caleb.

## Project structure

```
app/
  layout.tsx        # fonts, metadata, HairSalon JSON-LD, Nav/Footer
  page.tsx          # home
  about|services|gallery|location|contact/page.tsx
  site.ts           # ← ALL content (edit this)
  globals.css       # brand color/font tokens + base styles
  sitemap.ts, robots.ts, icon.tsx, opengraph-image.png, twitter-image.png
components/
  Nav.tsx, Footer.tsx, icons/   # brand SVGs
fonts/              # TAYDreamboat display font (.otf)
public/
  stylists/         # stylist portraits  (EXIF/GPS-stripped WebP)
  gallery/          # work photos        (EXIF/GPS-stripped WebP)
```

## Brand / design

- **Fonts:** `font-dreamboat` (TAYDreamboat, an all-caps display face) is for the **logo and
  headings only**; body copy uses **Nunito Sans**. Keep paragraphs in the body font.
- **Color tokens** (in `app/globals.css`): `sage` · `blue` (primary) · `light-blue` ·
  `orange` · `brown` · `green`.
- It's a **fixed light theme** (no dark mode). Indentation is **tabs**.

## Conventions & guardrails

- **No fabricated content.** `reviews[]` stays empty until there are real reviews — don't
  invent any. Same for bios/prices: leave a `TODO` rather than make something up.
- **Strip EXIF/GPS from photos** before adding them to `/public` and convert to WebP.
  Use `cwebp -metadata none` — `sips` alone does **not** remove GPS. Client photos
  especially must be scrubbed before publishing.
- **No secrets in the repo** (it's public).
- Run `bun run build` before committing UI changes — it type-checks.
- See **`CLAUDE.md`** for additional working notes and the brand system in more depth.
