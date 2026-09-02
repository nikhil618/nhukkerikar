# nhukkerikar.com

Portfolio and résumé, built on Angular 22 with signals throughout and
prerendered to static HTML.

## Running it

Angular 22 needs Node `^22.22.3 || ^24.15.0 || >=26` (see `.nvmrc`).

```bash
npm install
```

```bash
npm start
```

```bash
npm run build
```

`npm run build` writes prerendered HTML for every route to
`dist/nhukkerikar/browser` — that directory is what Vercel serves. There is no
Node server at runtime.

## How it is put together

```
design-system/nocturne/   The Nocturne design system: tokens, ramps, component
                          classes. Loaded first by angular.json; the source of
                          truth for every colour, font, space and radius.
legacy/                   The original Claude Design documents this site was
                          converted from. Not built — kept as the design record.
src/styles.css            The global layer: light-mode tokens, band grounds,
                          page utilities, print rules.
src/app/core/             Root services and the content itself.
  profile/                profile.model.ts (shape) · profile.data.ts (the copy
                          deck) · profile-store.ts (signals over it)
  theme/                  theme-store.ts (colour mode) · theme-toggle.ts
  seo/                    Per-route title, description, canonical, Open Graph
src/app/layout/           Header and footer, shared by both pages
src/app/shared/           Small presentational pieces used by both features
src/app/features/         portfolio/ · resume/ · not-found/ — lazily routed
```

### One content source, two pages

Everything either page says lives in `profile.data.ts`, typed by
`profile.model.ts`. A role carries both its one-paragraph form (the portfolio
timeline) and its bullets (the résumé), so a fact is written once and the two
pages cannot drift apart.

### Signals

- `ProfileStore`, `ThemeStore` and `SeoStore` are `@Service()` singletons.
- Components are presentational and take `input()` / `input.required()`;
  derived values are `computed()`.
- `ThemeToggle` takes the preference as a `model()` and is bound with
  `[(mode)]="theme.mode"`, so it holds no state of its own.
- The header's active-section highlight is a `computed()` over an
  `IntersectionObserver`-fed signal, set up in `afterNextRender` so it never
  runs during prerendering.
- No zone.js — the app is zoneless.

### Rendering

`outputMode: "static"` prerenders `/` and `/resume` at build time and hydrates
with event replay. Unknown paths fall back to `index.csr.html` (see
`vercel.json`), where the router renders the not-found page.

Colour mode resolves before first paint: a small inline script in
`src/index.html` reads the stored preference and stamps `data-theme` on `<html>`
ahead of Angular, so a light-mode visitor never sees the dark prerender flash.

### Accessibility

Both pages pass axe (WCAG 2.1/2.2 AA plus best-practice) with no violations, in
both colour modes. Text contrast was checked by hand where the gradient bands
defeat automatic checking. Notable choices:

- `.btn-primary` / `.btn-ghost` labels use `--color-accent-text`, one step along
  the ramp from `--color-accent`, which alone reaches only ~4.4:1 on the lifted
  bands — enough for the outline, short of AA for the 14px label.
- The header's section links carry `aria-current="location"` as you scroll.
- Navigation wraps instead of disappearing on narrow screens.
- The entrance animation and smooth scrolling both yield to
  `prefers-reduced-motion`.
