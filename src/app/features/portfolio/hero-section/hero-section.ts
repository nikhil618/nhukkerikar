import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LensStore } from '../../../core/lens/lens-store';
import { LensToggle } from '../../../core/lens/lens-toggle';
import { type Lensed, lensVariants } from '../../../core/lens/lens.model';

/**
 * The opening statement: two stacked lines, a paragraph, two actions, and the
 * view switch — placed here as well as in the header so a first-time visitor
 * sees that the page reads two ways.
 */
@Component({
  selector: 'app-hero-section',
  imports: [RouterLink, LensToggle],
  template: `
    <section class="rise">
      <h1>
        @for (variant of headlines(); track variant.lens) {
          <span class="headline" [attr.data-lens-only]="variant.lens">
            @for (line of variant.value; track $index) {
              <span>{{ line }}</span>
            }
          </span>
        }
      </h1>

      @for (variant of summaries(); track variant.lens) {
        <p class="summary" [attr.data-lens-only]="variant.lens">{{ variant.value }}</p>
      }

      <div class="actions">
        <a class="btn btn-primary" routerLink="/" fragment="work"> See the work </a>
        <a class="btn btn-ghost" [href]="mailto()">Get in touch</a>
      </div>

      <div class="lens">
        <p class="lens-prompt">I do both jobs. Pick the view that fits why you're here.</p>
        <app-lens-toggle name="lens-hero" [(lens)]="lensStore.lens" />
      </div>
    </section>
  `,
  styleUrl: './hero-section.css',
})
export class HeroSection {
  readonly headline = input.required<Lensed<readonly string[]>>();
  readonly summary = input.required<Lensed<string>>();
  readonly mailto = input.required<string>();

  protected readonly lensStore = inject(LensStore);

  protected readonly headlines = computed(() => lensVariants(this.headline()));
  protected readonly summaries = computed(() => lensVariants(this.summary()));
}
