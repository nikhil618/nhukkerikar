import { Component, computed, input } from '@angular/core';
import type { Scenario, Stage, StageWeight } from '../../../core/flow/flow.model';
import type { MarkerTone } from '../../../shared/timeline-marker/timeline-marker';
import { TimelineMarker } from '../../../shared/timeline-marker/timeline-marker';

/** How the flow reads a marker: the costly stages lead, the skipped ones recede. */
const TONE_BY_WEIGHT: Readonly<Record<StageWeight, MarkerTone>> = {
  dwell: 'solid',
  normal: 'outlined',
  skipped: 'muted',
};

/**
 * The substance of a scenario: every stage in order, with what happens there,
 * who decides it and how long it takes. Carries in text everything the strip
 * above says visually.
 */
@Component({
  selector: 'app-flow-stages',
  imports: [TimelineMarker],
  templateUrl: './flow-stages.html',
  styleUrl: './flow-stages.css',
})
export class FlowStages {
  readonly scenario = input.required<Scenario>();
  readonly stagesById = input.required<ReadonlyMap<string, Stage>>();

  protected readonly entries = computed(() =>
    this.scenario().stages.map((entry) => ({
      key: entry.stage,
      name: this.stagesById().get(entry.stage)?.name ?? entry.stage,
      purpose: this.stagesById().get(entry.stage)?.purpose ?? '',
      weight: entry.weight,
      tone: TONE_BY_WEIGHT[entry.weight],
      detail: entry.detail,
      decidedBy: entry.decidedBy,
      duration: entry.duration,
    })),
  );
}
