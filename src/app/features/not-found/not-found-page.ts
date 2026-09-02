import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileStore } from '../../core/profile/profile-store';
import { SeoStore } from '../../core/seo/seo-store';
import { SiteHeader } from '../../layout/site-header/site-header';
import type { NavAction } from '../../layout/site-nav.model';

@Component({
  selector: 'app-not-found-page',
  imports: [SiteHeader, RouterLink],
  template: `
    <app-site-header [brand]="profile.name()" [action]="action" />

    <main id="main" tabindex="-1" class="shell">
      <h1>Page not found</h1>
      <p>That address doesn't lead anywhere on this site.</p>
      <a class="btn btn-primary" routerLink="/">Back to the portfolio</a>
    </main>
  `,
  styles: `
    :host {
      display: block;
      min-height: 100vh;
    }

    main {
      padding: clamp(56px, 11vw, 112px) var(--gutter) 120px;
    }

    main:focus {
      outline: none;
    }

    h1 {
      margin: 0 0 var(--space-4);
      font-size: clamp(32px, 5vw, 52px);
      letter-spacing: -0.015em;
    }

    p {
      margin: 0 0 28px;
      font-size: 17px;
      color: color-mix(in srgb, var(--color-text) 78%, transparent);
    }
  `,
})
export class NotFoundPage {
  protected readonly profile = inject(ProfileStore);

  protected readonly action: NavAction = {
    label: 'Résumé',
    routerLink: '/resume',
  };

  constructor() {
    inject(SeoStore).apply({
      title: 'Page not found — Nikhil Hukkerikar',
      description: 'That address does not lead anywhere on this site.',
      path: '/404',
    });
  }
}
