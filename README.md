# Madani Strategies (mdn-st)

Marketing website for **Madani Strategies** — a strategic impact consultancy bridging corporate strategy with community impact.

> _Connecting Growth to Community Impact_

🌍 **Live:** https://ronggothelast.github.io/mdn-st/

---

## Main Points

- **27 pages** of static-rendered marketing content (Home, Services, Impact, About, Contact, 10 Company Profile variants, 10 Design System pages, Profile Gallery, Styleguide Index)
- **Bilingual EN/ID** ready — English + Bahasa Indonesia copy
- **Brand identity:** navy `#1A2E4A` + teal `#3D8F8A` + warm tan `#C9A876`, Georgia Serif + Inter Sans pairing
- **10 Company Profile design variants** with toggle switcher — Editorial Report, Modern Minimalist, Magazine Cover, Heritage Cream, Sustainability Teal, Strategic Brief, etc.
- **Per-style design system** at `/styleguide/[id]` — full token reference (colors, typography, buttons, cards, forms, spacing) with light/dark mode toggle
- **SEO complete:** Open Graph, Twitter Card, JSON-LD Organization schema, custom 1200×630 OG banner
- **Smooth UX:** Astro View Transitions (no white flash on nav), scroll-triggered fade-in animations, mobile-first responsive nav
- **Optimized:** all images converted to WebP (7.9 MB → 612 KB, 92% smaller), lazy-loading, hero `fetchpriority=high`

## Tech Stack

- **Astro 6** — multi-page static site generator + View Transitions
- **Tailwind CSS 4** (`@tailwindcss/vite`) — utility-first styling, mobile-first
- **React 19** — for interactive islands (lang switcher, etc.)
- **TypeScript strict** — full type safety
- **GitHub Pages** — hosting + CI/CD via GitHub Actions on every push to `main`

## Project Structure

```
src/
├── components/        Nav, Footer, LangSwitcher, ProfileLayout, etc.
├── data/              styleguides.ts (10 token sets), profiles, content
├── layouts/           BaseLayout (SEO, transitions, animations), ProfileLayout
├── pages/
│   ├── index.astro    Home
│   ├── services.astro
│   ├── impact.astro
│   ├── about.astro
│   ├── contact.astro
│   ├── profile/       index + style-1..10
│   └── styleguide/    index + [id] dynamic route (light/dark toggle, copy-to-clipboard)
├── styles/global.css  Tailwind + base tokens
└── i18n/              EN/ID dictionaries
public/
├── assets/og-banner.png  1200×630 social share banner (navy + gold)
└── assets/images/        Hero, services, team — all WebP
```

## Local Development

```bash
npm install
npm run dev    # http://localhost:4321/mdn-st/
npm run build  # static build → dist/
npm run preview
```

## Deploy

Pushes to `main` auto-deploy via GitHub Actions to GitHub Pages.
Base path: `/mdn-st/`. Build time: ~7 seconds for 27 pages.

---

Built by [@ronggothelast](https://github.com/ronggothelast) · Designed for clarity, performance, and brand integrity.
