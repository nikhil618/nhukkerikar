import { Component, input } from '@angular/core';
import type { RoleEra } from '../../core/profile/profile.model';

/**
 * The dot on a timeline's spine. Decorative — the entry's heading and dates
 * already carry the meaning — so it is hidden from assistive tech.
 *
 * Placement is left to the timeline that owns it: the host is positioned
 * absolutely and the parent stylesheet sets its offsets.
 */
@Component({
  selector: 'app-timeline-marker',
  template: '',
  host: {
    'aria-hidden': 'true',
    '[class.is-current]': 'era() === "current"',
    '[class.is-recent]': 'era() === "recent"',
  },
  styles: `
    :host {
      position: absolute;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      /* Earliest roles: a quiet neutral ring. */
      background: var(--color-bg);
      border: 2px solid var(--color-neutral-500);
    }

    :host(.is-recent) {
      border-color: var(--color-accent-400);
    }

    :host(.is-current) {
      background: var(--color-accent);
      border: 0;
      box-shadow: 0 0 10px var(--color-accent-700);
    }
  `,
})
export class TimelineMarker {
  readonly era = input.required<RoleEra>();
}
