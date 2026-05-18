# Madani Strategies (mdn-st)

Marketing website for **Madani Strategies** — a strategic impact consultancy.

> _Connecting Growth to Community Impact_

🌍 Live: https://ronggothelast.github.io/mdn-st/

## Tech Stack

- **Astro 6** — multi-page static site generator
- **Tailwind CSS 4** — utility-first styling
- **React 19** — for interactive islands (when needed)
- **TypeScript strict** — full type safety
- **GitHub Pages** — hosting + CI/CD via GitHub Actions

## Pages

- `/` — Home
- `/services` — Services breakdown
- `/impact` — Portfolio / proof of execution
- `/about` — Story + team
- `/contact` — Contact form
- `/profile` — Company profile gallery (10 design styles)
- `/profile/style-1` to `/profile/style-10` — Individual style variants

## Local Development

```bash
npm install
npm run dev      # http://localhost:4321/mdn-st
npm run build    # outputs to ./dist
npm run preview  # preview production build
```

## Project Structure

```
mdn-st/
├── public/
│   ├── assets/images/     # AI-generated images
│   └── favicon.svg
├── src/
│   ├── components/         # Nav, Footer, ServiceCard
│   ├── data/content.ts     # Single source of truth (bilingual EN/ID)
│   ├── layouts/            # BaseLayout, ProfileLayout
│   ├── pages/              # File-based routing
│   │   ├── index.astro
│   │   ├── services.astro
│   │   ├── impact.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── profile/
│   │       ├── index.astro
│   │       └── style-1.astro through style-10.astro
│   └── styles/global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Bilingual Content

EN/ID toggle persists via `localStorage`. Content lives in `src/data/content.ts` as a single typed source — every page reads from it.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and deploys to GitHub Pages automatically.

## Future Roadmap

- [ ] Sanity Studio integration for blog/articles (so non-devs can publish)
- [ ] Newsletter subscription (Buttondown / Convertkit)
- [ ] Case study pages
- [ ] Custom domain (madanistrategies.com)
