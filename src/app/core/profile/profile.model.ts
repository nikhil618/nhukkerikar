/**
 * The shape of the site's content. Both the portfolio and the résumé render
 * from one `Profile`, so a fact is written once and cannot drift between the
 * two pages.
 */

/** How prominently a timeline entry is marked, oldest to newest. */
export type RoleEra = 'current' | 'recent' | 'earlier';

export interface Contact {
  readonly location: string;
  readonly email: string;
  readonly phone: string;
  /** Display form, e.g. `linkedin.com/in/…`. */
  readonly linkedInLabel: string;
  readonly linkedInUrl: string;
}

/** A headline number: the value carries the weight, the label explains it. */
export interface Metric {
  readonly value: string;
  readonly label: string;
}

/** One entry in the portfolio's "Selected work" list. */
export interface WorkItem {
  readonly id: string;
  readonly title: string;
  readonly summary: string;
  /** Set when the entry has a page of its own to read on. */
  readonly detail?: {
    readonly routerLink: string;
    readonly label: string;
  };
}

export interface Role {
  readonly id: string;
  /** Job title, or the programme name for the contract years. */
  readonly title: string;
  readonly org: string;
  readonly period: string;
  readonly era: RoleEra;
  /** One-paragraph form, for the portfolio timeline. */
  readonly summary: string;
  /** Bulleted form, for the résumé. */
  readonly highlights: readonly string[];
}

export interface SkillGroup {
  readonly id: string;
  readonly title: string;
  readonly detail: string;
  /** Denser wording for the résumé; falls back to `detail`. */
  readonly resumeDetail?: string;
  /** Accent-marked on the page rather than neutral. */
  readonly emphasis: boolean;
}

export interface PlatformProduct {
  readonly name: string;
  readonly detail: string;
}

/** The "Phoenix at a glance" panel on the résumé. */
export interface Platform {
  readonly name: string;
  readonly products: readonly PlatformProduct[];
  readonly servingLines: readonly string[];
  readonly metrics: readonly Metric[];
}

export interface Education {
  readonly degree: string;
  readonly institution: string;
  readonly year: string;
}

export interface Profile {
  readonly name: string;
  readonly discipline: string;
  /** Two lines, stacked, forming the portfolio's headline. */
  readonly heroHeadline: readonly [string, string];
  readonly heroSummary: string;
  readonly resumeSummary: string;
  readonly contact: Contact;
  readonly headlineMetrics: readonly Metric[];
  readonly work: readonly WorkItem[];
  readonly roles: readonly Role[];
  readonly skills: readonly SkillGroup[];
  readonly leadership: readonly string[];
  readonly platform: Platform;
  readonly education: Education;
}
