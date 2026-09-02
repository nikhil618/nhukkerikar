import { Component, computed, input } from '@angular/core';
import type { Scenario, Stage } from '../../../core/flow/flow.model';

/**
 * The shape of a scenario at a glance: seven nodes on a rail, weighted so a
 * skipped stage reads as a gap and a costly one as a thickened run. Switching
 * scenario visibly changes the silhouette, which is the whole argument of the
 * page.
 *
 * Decorative by design — every fact here is repeated as text in the stage list
 * below — so the whole strip is hidden from assistive tech rather than being
 * narrated as seven unlabelled dots.
 */
@Component({
  selector: 'app-flow-strip',
  host: { 'aria-hidden': 'true' },
  template: `
    <ol class="rail">
      @for (node of nodes(); track node.id) {
        <li class="node" [class]="'is-' + node.weight">
          <span class="dot"></span>
          <span class="name">{{ node.name }}</span>
        </li>
      }
    </ol>
  `,
  styleUrl: './flow-strip.css',
})
export class FlowStrip {
  readonly scenario = input.required<Scenario>();
  readonly stagesById = input.required<ReadonlyMap<string, Stage>>();

  protected readonly nodes = computed(() =>
    this.scenario().stages.map((entry) => ({
      id: entry.stage,
      name: this.stagesById().get(entry.stage)?.name ?? entry.stage,
      weight: entry.weight,
    })),
  );
}
