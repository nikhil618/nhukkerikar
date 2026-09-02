/** An in-page anchor in the header. */
export interface NavSection {
  /** Must match the `id` of the section it points at. */
  readonly id: string;
  readonly label: string;
}

/** The header's one primary action, which differs per page. */
export interface NavAction {
  readonly label: string;
  readonly routerLink: string;
}
