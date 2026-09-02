import { DOCUMENT } from '@angular/common';
import {
  afterNextRender,
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeStore } from '../../core/theme/theme-store';
import { ThemeToggle } from '../../core/theme/theme-toggle';
import type { NavAction, NavSection } from '../site-nav.model';

/**
 * The header bar. Section links are in-page anchors; the one that is currently
 * on screen is marked `aria-current`, tracked with an IntersectionObserver
 * that only ever runs in the browser.
 */
@Component({
  selector: 'app-site-header',
  imports: [RouterLink, ThemeToggle],
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
})
export class SiteHeader {
  readonly brand = input.required<string>();

  /** In-page anchors, in document order. */
  readonly sections = input<readonly NavSection[]>([]);
  readonly action = input.required<NavAction>();

  protected readonly theme = inject(ThemeStore);

  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  private readonly visibleIds = signal<ReadonlySet<string>>(new Set<string>());

  /** The first section, in document order, currently crossing the viewport. */
  protected readonly activeSectionId = computed(() => {
    const visible = this.visibleIds();
    return this.sections().find((section) => visible.has(section.id))?.id ?? null;
  });

  constructor() {
    // The header is rebuilt per page, so the section list is fixed for the
    // lifetime of this instance and one pass of wiring is enough.
    afterNextRender(() => this.trackSections());
  }

  private trackSections(): void {
    const targets = this.sections()
      .map((section) => this.document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);

    if (targets.length === 0 || !('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const next = new Set(this.visibleIds());
        for (const entry of entries) {
          if (entry.isIntersecting) {
            next.add(entry.target.id);
          } else {
            next.delete(entry.target.id);
          }
        }
        this.visibleIds.set(next);
      },
      // A band across the middle of the viewport: a section counts as current
      // once it reaches the reading position, not the moment it peeks in.
      { rootMargin: '-30% 0px -55% 0px', threshold: 0 },
    );

    for (const target of targets) {
      observer.observe(target);
    }

    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
