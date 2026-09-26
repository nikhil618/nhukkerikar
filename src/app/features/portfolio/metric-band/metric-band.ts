import { Component, computed, input } from '@angular/core';
import { type Lensed, lensVariants } from '../../../core/lens/lens.model';
import type { Metric } from '../../../core/profile/profile.model';

/**
 * The one full-bleed saturated band on the page — Nocturne's "presence at page
 * scale". Its ground stays the deep indigo in both colour modes, so the values
 * are painted on a fixed light tone rather than the themed text colour.
 *
 * Each view has its own four numbers; both sets render and CSS shows one.
 */
@Component({
  selector: 'app-metric-band',
  template: `
    <section aria-label="By the numbers">
      @for (variant of sets(); track variant.lens) {
        <div class="shell metrics" [attr.data-lens-only]="variant.lens">
          @for (metric of variant.value; track metric.label) {
            <div class="metric">
              <p class="value">{{ metric.value }}</p>
              <p class="label">{{ metric.label }}</p>
            </div>
          }
        </div>
      }
    </section>
  `,
  styleUrl: './metric-band.css',
})
export class MetricBand {
  readonly metrics = input.required<Lensed<readonly Metric[]>>();

  protected readonly sets = computed(() => lensVariants(this.metrics()));
}
