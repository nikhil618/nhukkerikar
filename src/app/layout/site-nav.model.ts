import type { Lens } from '../core/lens/lens.model';

/** An in-page anchor in the header. */
export interface NavSection {
  /** Must match the `id` of the section it points at. */
  readonly id: string;
  readonly label: string;
  /** Set when the section exists in one view only; the link follows it. */
  readonly lens?: Lens;
}

/** The header's one primary action, which differs per page. */
export interface NavAction {
  readonly label: string;
  readonly routerLink: string;
}
