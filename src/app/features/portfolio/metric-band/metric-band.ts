import { Component, input } from '@angular/core';
import type { Metric } from '../../../core/profile/profile.model';

/**
 * The one full-bleed saturated band on the page — Nocturne's "presence at page
 * scale". Its ground stays the deep indigo in both colour modes, so the values
 * are painted on a fixed light tone rather than the themed text colour.
 */
@Component({
  selector: 'app-metric-band',
  template: `
    <section aria-label="By the numbers">
      <div class="shell metrics">
        @for (metric of metrics(); track metric.label) {
          <div class="metric">
            <p class="value">{{ metric.value }}</p>
            <p class="label">{{ metric.label }}</p>
          </div>
        }
      </div>
    </section>
  `,
  styleUrl: './metric-band.css',
})
export class MetricBand {
  readonly metrics = input.required<readonly Metric[]>();
}
