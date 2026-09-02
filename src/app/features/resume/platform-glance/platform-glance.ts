import { Component, input } from '@angular/core';
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
}
