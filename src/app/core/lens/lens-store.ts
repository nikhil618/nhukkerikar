import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { effect, inject, PLATFORM_ID, Service, signal } from '@angular/core';
import { DEFAULT_LENS, isLens, type Lens } from './lens.model';

/** Must match the key the inline script in index.html reads. */
export const LENS_STORAGE_KEY = 'nh-lens';

/**
 * Which way the site is being read: as an engineering leader's portfolio or
 * as a frontend architect's. Same page, same URL — the lens only decides
 * which of the two prerendered variants CSS shows.
 *
 * The inline script in index.html settles the lens before first paint (from
 * `?view=` or the stored choice) and stamps it on `<html data-lens>`. This
 * store adopts that value on start-up rather than re-deriving it, so the two
 * can never disagree.
 */
@Service()
export class LensStore {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  /** The active lens. Writable: the toggle two-way binds to it. */
  readonly lens = signal<Lens>(DEFAULT_LENS);

  constructor() {
    if (this.isBrowser) {
      const painted = this.document.documentElement.getAttribute('data-lens');
      if (isLens(painted)) {
        this.lens.set(painted);
      }
    }

    effect(() => {
      const lens = this.lens();
      this.document.documentElement.setAttribute('data-lens', lens);

      if (!this.isBrowser) {
        return;
      }
      try {
        localStorage.setItem(LENS_STORAGE_KEY, lens);
      } catch {
        // Storage blocked — the choice lasts for this page view only.
      }
    });
  }
}
