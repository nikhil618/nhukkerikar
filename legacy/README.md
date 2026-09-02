# Original design documents

These are the Claude Design sources the Angular app was converted from. They are
not part of the build and nothing imports them — they are kept as the design
record, and they still open on their own (`support.js` and `doc-page.js` are the
runtime they need; their stylesheet reference now points at
`../design-system/nocturne/styles.css`).

| File | Became |
| --- | --- |
| `Nikhil Portfolio Site.dc.html` | `src/app/features/portfolio/` |
| `Nikhil Hukkerikar Resume.dc.html` | `src/app/features/resume/` |

The copy in both is now held in `src/app/core/profile/profile.data.ts`. If you
edit these documents, the Angular app will not follow — change the data file.
