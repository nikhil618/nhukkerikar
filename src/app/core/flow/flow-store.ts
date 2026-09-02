import { computed, Service, signal } from '@angular/core';
import { SCENARIOS, STAGES } from './flow.data';
import type { Scenario, Stage, StageId } from './flow.model';

/**
 * The Phoenix pipeline as signals. Stages and scenarios are stored separately
 * so a scenario only has to say how it weights each stage, not restate what
 * the stage is.
 */
@Service()
export class FlowStore {
  private readonly stageSource = signal<readonly Stage[]>(STAGES);
  private readonly scenarioSource = signal<readonly Scenario[]>(SCENARIOS);

  readonly stages = this.stageSource.asReadonly();
  readonly scenarios = this.scenarioSource.asReadonly();

  /** Stage lookup, built once rather than searched per render. */
  readonly stagesById = computed(
    () => new Map<StageId, Stage>(this.stages().map((stage) => [stage.id, stage])),
  );

  /** The options the scenario picker renders. */
  readonly pickerOptions = computed(() => this.scenarios().map(({ id, label }) => ({ id, label })));
}
