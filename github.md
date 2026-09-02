repo: nikhil618/nhukkerikar
branch: main

## Last sync
date: 2026-09-02T00:00:00Z

### Updated in this project
- Converted the site from standalone HTML/JS/CSS to an Angular 22 application
  (signals, zoneless, lazy routes, prerendered to static HTML).
- Moved the Nocturne design system to `design-system/nocturne/`; it is now the
  app's first stylesheet as well as the legacy documents'.
- Moved the original `.dc.html` documents and their runtime to `legacy/`.
- Replaced the hand-bundled `dist/` with the Angular build output
  (`dist/nhukkerikar/browser`), which `vercel.json` now points at.

## Screen map
| Project screen | Repo files |
| --- | --- |
| Portfolio (`/`) | `src/app/features/portfolio/` |
| Résumé (`/resume`) | `src/app/features/resume/` |
| Not found | `src/app/features/not-found/` |
| Copy for all of the above | `src/app/core/profile/profile.data.ts` |
| Original design documents | `legacy/*.dc.html` |
