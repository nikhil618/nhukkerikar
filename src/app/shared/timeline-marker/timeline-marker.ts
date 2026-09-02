import { Component, input } from '@angular/core';

/**
 * How much weight a marker carries. Deliberately visual rather than domain
 * language: a career timeline reads it as recency, the Phoenix flow reads it
 * as how much of the pipeline a scenario spends here.
 */
export type MarkerTone = 'solid' | 'outlined' | 'muted';

/**
 * The dot on a timeline's spine. Decorative — the entry beside it already
 * carries the meaning in text — so it is hidden from assistive tech.
 *
 * Placement is left to the timeline that owns it: the host is positioned
 * absolutely and the parent stylesheet sets its offsets.
 */
@Component({
  selector: 'app-timeline-marker',
  template: '',
  host: {
    'aria-hidden': 'true',
    '[class.is-solid]': 'tone() === "solid"',
    '[class.is-outlined]': 'tone() === "outlined"',
  },
  styles: `
    :host {
      position: absolute;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      /* muted: a quiet neutral ring. */
      background: var(--color-bg);
      border: 2px solid var(--color-neutral-500);
    }

    :host(.is-outlined) {
      border-color: var(--color-accent-400);
    }

    :host(.is-solid) {
      background: var(--color-accent);
      border: 0;
      box-shadow: 0 0 10px var(--color-accent-700);
    }
  `,
})
export class TimelineMarker {
  readonly tone = input.required<MarkerTone>();
}
