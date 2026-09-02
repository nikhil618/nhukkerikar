import type { Routes } from '@angular/router';

/**
 * Two pages and a catch-all, each lazily loaded so a visitor who only reads
 * the portfolio never downloads the résumé.
 */
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./features/portfolio/portfolio-page').then((m) => m.PortfolioPage),
  },
  {
    path: 'resume',
    // Bound to ResumePage's `showPlatform` input by `withComponentInputBinding`.
    data: { showPlatform: true },
    loadComponent: () => import('./features/resume/resume-page').then((m) => m.ResumePage),
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found-page').then((m) => m.NotFoundPage),
  },
];
