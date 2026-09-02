import { DOCUMENT } from '@angular/common';
import { inject, Service } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

/** Where the site is served from, for canonical and Open Graph URLs. */
export const SITE_ORIGIN = 'https://nhukkerikar.com';

export interface PageMeta {
  readonly title: string;
  readonly description: string;
  /** Absolute path, leading slash included. */
  readonly path: string;
}

/**
 * Per-page document metadata. Every route is prerendered, so what this writes
 * ends up in the served HTML rather than only after hydration.
 */
@Service()
export class SeoStore {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  apply(page: PageMeta): void {
    const url = `${SITE_ORIGIN}${page.path}`;

    this.title.setTitle(page.title);
    this.meta.updateTag({ name: 'description', content: page.description });
    this.meta.updateTag({ property: 'og:title', content: page.title });
    this.meta.updateTag({
      property: 'og:description',
      content: page.description,
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });

    this.setCanonical(url);
  }

  private setCanonical(url: string): void {
    const head = this.document.head;
    let link = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      head.appendChild(link);
    }

    link.setAttribute('href', url);
  }
}
