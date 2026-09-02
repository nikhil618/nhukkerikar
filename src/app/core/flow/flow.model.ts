/**
 * The Phoenix delivery pipeline. Four kinds of work run the same seven
 * stages; what differs is which stages are skipped, who holds the decision,
 * and how long each one takes. Modelling it that way — one stage list, four
 * scenarios that weight it — is what lets the page compare them.
 */

export type StageId = 'intake' | 'triage' | 'design' | 'build' | 'verify' | 'release' | 'adopt';

/** How much of a scenario's time and risk sits in a stage. */
export type StageWeight = 'skipped' | 'normal' | 'dwell';

/** A stage in the abstract, independent of which work is passing through it. */
export interface Stage {
  readonly id: StageId;
  readonly name: string;
  /** What this stage decides, whatever the scenario. */
  readonly purpose: string;
}

/** One stage as a particular scenario experiences it. */
export interface ScenarioStage {
  readonly stage: StageId;
  readonly weight: StageWeight;
  /** What happens here for this scenario — or, when skipped, why it doesn't. */
  readonly detail: string;
  /** Who holds the decision. Omitted for skipped stages. */
  readonly decidedBy?: string;
  /** Typical elapsed time, or the word that stands in for one. */
  readonly duration?: string;
}

export interface Scenario {
  readonly id: string;
  /** Short form, for the picker. */
  readonly label: string;
  readonly title: string;
  readonly summary: string;
  /** End to end, e.g. "Hours to days". */
  readonly timescale: string;
  /** What ships, e.g. "Out-of-band patch, every supported line". */
  readonly outcome: string;
  /** The one sentence on where this scenario stops resembling the others. */
  readonly divergence: string;
  /** Exactly one entry per stage, in pipeline order. */
  readonly stages: readonly ScenarioStage[];
}
