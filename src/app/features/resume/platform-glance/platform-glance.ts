import { Component, computed, input } from '@angular/core';
import { lensVariants } from '../../../core/lens/lens.model';
import type { Platform } from '../../../core/profile/profile.model';

/**
 * "Phoenix at a glance" — the panel that shows the platform's three products
 * feeding into what they serve, then the four numbers underneath.
 */
@Component({
  selector: 'app-platform-glance',
  templateUrl: './platform-glance.html',
  styleUrl: './platform-glance.css',
})
export class PlatformGlance {
  readonly platform = input.required<Platform>();

  /** The four numbers underneath differ by view. */
  protected readonly metricSets = computed(() => lensVariants(this.platform().metrics));
}
