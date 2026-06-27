# Ditronics — corporate website

A premium, editorial corporate site for **Ditronics**, a Tanzanian technology
company (software development, IoT systems, photography studio) based in
Kibada, Kigamboni, Dar es Salaam.

Built with **Next.js 16 (App Router) · TypeScript · Tailwind CSS v4**. Handcrafted
components — no UI kit, no template — to deliberately avoid a generic SaaS look.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

---

## 1. Design system

The site is designed as an **editorial publication for an engineering firm**, not a
SaaS landing page. The whole system is defined in `src/app/globals.css`.

### Colour — restraint is the point
| Token | Value | Use |
| --- | --- | --- |
| white | `#ffffff` | primary background |
| `paper` | `#f5f4f1` | warm off-white section bands |
| `ink` | `#1b1d1f` | charcoal body + headings |
| `ink-soft` / `ink-faint` | `#54585c` / `#8b8e92` | secondary + metadata text |
| `navy` | `#102a43` | **the single accent** — links, rules, buttons |
| `line` / `line-strong` | `#e6e4df` / `#d6d3cc` | hairline rules |

A single deep-navy accent, used sparingly. No gradients, no glassmorphism, no
neon, no blobs. Warm-neutral greys (not cold blue-greys) give a printed,
handcrafted feel. The brand logo keeps its own plum/cyan identity as a
self-contained mark.

### Typography — two roles, strong hierarchy
Following the Worley dialect: **bold sans-serif** carries the headlines.
- **Display + body** — *Inter*. Headings run heavy (700) with tight tracking;
  body is regular weight.
- **Mono labels** — *JetBrains Mono* for kickers, section indices and captions —
  the "technical" voice.
- **Coloured-word highlight** — a single key word per headline is set in the navy
  accent (Worley's signature), used only on light sections.

Loaded with `next/font` (self-hosted, zero layout shift).

### Motion — one behaviour only
A single `Reveal` primitive: a 14px rise + fade on scroll-in, once, via
`IntersectionObserver`. Fully disabled under `prefers-reduced-motion`. Nothing
else moves.

---

## 2. Layout decisions

- **Editorial shell** (`.shell`, max-width 80rem) with generous, responsive
  gutters and large vertical rhythm (`py-24`/`py-32`).
- **Asymmetric 12-column grids** — content rarely sits centred; headers take 7–8
  columns, supporting material 4–5, inspired by serious engineering-firm sites
  like Worley.
- **Hairline rules + numbered kickers** (`00`–`04`) carry structure instead of
  boxed feature cards. Cards appear only where genuinely tabular (process,
  principles, tech grid).
- **Full-bleed cinematic hero** — a dark photograph fills the frame with the
  headline bottom-left in white over a flat scrim (Worley pattern).
- **Alternating bands** of white, warm `paper` and a dark slate-teal `band`
  (the "industries" section) create sectioning without decoration.
- **Pill buttons** throughout; the single navy accent stays the only colour.
- **Figures are labelled placeholders** (`Figure` component) ready to receive
  real photography — no stock imagery or AI art ships by default.

---

## 3. Pages

| Route | Description |
| --- | --- |
| `/` | Hero · about intro · services (editorial blocks) · featured projects · industries · process · contact CTA |
| `/about` | Story, mission/vision/approach, and "why local expertise matters" |
| `/services` | Full editorial blocks per discipline + technologies grid + process |
| `/projects` | Long-form case studies (overview · problem · solution · stack · results · screenshots) for Kibondo Green Farm and the AI Conference Platform. Anchored by slug. |
| `/photography` | Masonry portfolio gallery, services offered, equipment, coverage types |
| `/contact` | Validated enquiry form, office details, office photos, Google Maps embed |

SEO: per-page metadata, Organization JSON-LD, `sitemap.xml`, `robots.txt`.

---

## 4. Component structure

```
src/
├─ app/
│  ├─ layout.tsx            # fonts, metadata, JSON-LD, header/footer shell
│  ├─ page.tsx              # home
│  ├─ about|services|projects|photography|contact/page.tsx
│  ├─ api/contact/route.ts  # form endpoint (wire an email provider here)
│  ├─ sitemap.ts · robots.ts · not-found.tsx
│  └─ globals.css           # the design system
├─ components/
│  ├─ layout/   site-header.tsx · site-footer.tsx
│  ├─ ui/       button · kicker · logo · figure · reveal · section-header · page-header
│  └─ sections/ hero · about-intro · services-editorial · featured-projects
│                industries · process · contact-cta · contact-form
├─ content/site.ts          # single source of truth (company, services, projects…)
└─ lib/cn.ts
```

All copy and data live in **`src/content/site.ts`** — edit there, not in
components.

---

## 5. What to replace before launch

- **Photography**: drop real images into `public/` and pass `src` to `Figure`.
- **Contact details**: phone/email placeholders and the map pin
  (`company.mapQuery`) in `src/content/site.ts`.
- **Email delivery**: wire a provider (Resend/Postmark/SMTP) in
  `src/app/api/contact/route.ts` — the form already posts there.
- **Domain**: update `company.url`.
