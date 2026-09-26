import type { Lens, Lensed } from '../lens/lens.model';

/**
 * The shape of the site's content. Both the portfolio and the résumé render
 * from one `Profile`, so a fact is written once and cannot drift between the
 * two pages.
 *
 * Fields typed `Lensed<…>` carry one value per lens (leadership and
 * architecture). Everything else is shared by both.
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
  readonly summary: string | Lensed<string>;
  /** Bulleted form, for the résumé. */
  readonly highlights: readonly Highlight[];
}

/**
 * A résumé bullet. A plain string belongs to both lenses; `only` limits it to
 * one. The list keeps a single order, and each lens reads the bullets that
 * apply to it.
 */
export type Highlight = string | { readonly text: string; readonly only: Lens };

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
  readonly metrics: Lensed<readonly Metric[]>;
}

/** The résumé's pill list: "Leadership" on one lens, "Core expertise" on the other. */
export interface TagGroup {
  readonly title: string;
  readonly items: readonly string[];
}

/** One card in an approach section. */
export interface ApproachItem {
  readonly id: string;
  readonly title: string;
  readonly body: string;
  /** The result, set apart in the accent colour. */
  readonly outcome?: string;
}

/**
 * The portfolio section that only one lens shows: how the platform is run, or
 * the architecture decisions behind it.
 */
export interface Approach {
  /** Section id, and the header's anchor target. */
  readonly id: string;
  readonly navLabel: string;
  readonly heading: string;
  readonly intro: string;
  readonly items: readonly ApproachItem[];
  readonly link?: {
    readonly routerLink: string;
    readonly label: string;
  };
}

export interface Education {
  readonly degree: string;
  readonly institution: string;
  readonly year: string;
}

export interface Profile {
  readonly name: string;
  readonly discipline: Lensed<string>;
  /** Two lines, stacked, forming the portfolio's headline. */
  readonly heroHeadline: Lensed<readonly [string, string]>;
  readonly heroSummary: Lensed<string>;
  readonly resumeSummary: Lensed<string>;
  readonly contact: Contact;
  readonly headlineMetrics: Lensed<readonly Metric[]>;
  readonly work: Lensed<readonly WorkItem[]>;
  readonly approach: Lensed<Approach>;
  readonly roles: readonly Role[];
  readonly skills: Lensed<readonly SkillGroup[]>;
  readonly expertise: Lensed<TagGroup>;
  readonly platform: Platform;
  readonly education: Education;
}
