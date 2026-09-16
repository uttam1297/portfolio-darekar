# Uttam Darekar — Portfolio

A single-page portfolio built with Next.js App Router, React, TypeScript,
Tailwind CSS v4, and shadcn/Base UI components. The home route is statically
prerendered; there is no database or API.

## Development

```sh
npm ci
npm run dev
```

## Validation and production

```sh
npm run lint
npm run build
npm start
```

Vercel uses the commands in `vercel.json`.

## Where to edit content

Content lives in `src/data/*.ts`; components under `src/components/` render it.

- `src/data/experience.ts`: verified employment history, featured achievements,
  additional achievements, and role-specific tools. Keep Infosys visible by default.
- `src/data/profile.ts`: hero stat line (kpis) shown inline in the sidebar.
- `src/data/portfolio.ts`: projects and scenario-based case studies (rendered by
  `src/components/portfolio.tsx`, which leads the page and shows everything
  without tabs or a carousel).
- `src/data/thesis.ts`: Master's thesis, rendered as its own card in Portfolio
  with a dialog for full detail.
- `src/data/testimonials.ts`: recommendations. Quotes with a `roleId` render
  inline inside that Experience role's card; quotes without one render as a
  compact strip under Education in the sidebar. There is no standalone
  Testimonials section or carousel.
- `src/components/sidebar.tsx`: profile, inline stat line, and compact
  education (two lines, no cards).
- `src/components/connect.tsx`: single-line contact bar (footer-weight, not a
  full section).

There is no dedicated Tools or Capabilities/"How I work" section — tool names
surface as tags on each Experience role and in case-study badges; the "how I
work" claims were cut as unsupported platitudes already demonstrated by the
case studies.

Preserve verified numbers, titles, and dates when editing. The 35% manual-work
claim and the four-hour-to-30-minute weekly reporting example are distinct
supplied figures; do not calculate one from the other.

## Structure and interaction

`src/app/page.tsx` composes the existing sections in a responsive two-column
layout. `layout.tsx` owns metadata and fonts; `globals.css` owns theme tokens,
focus styles, and reduced-motion support. Profile content remains in normal
document flow on shorter screens and becomes sticky on tall desktop screens.

Navigation highlights the current section. Base UI provides focus management
for dialogs (case-study and thesis detail). Experience shows each role's top
achievements by default; remaining bullets use a native disclosure element.

`public/` contains active images. `assets/` is a legacy static-site directory
and is not imported by the app.
