import { Component, computed, inject } from '@angular/core';
import { LENSES, lensVariants } from '../../core/lens/lens.model';
import { ProfileStore } from '../../core/profile/profile-store';
import { SeoStore } from '../../core/seo/seo-store';
import { SiteFooter } from '../../layout/site-footer/site-footer';
import { SiteHeader } from '../../layout/site-header/site-header';
import type { NavAction, NavSection } from '../../layout/site-nav.model';
import { ApproachSection } from './approach-section/approach-section';
import { ContactPanel } from './contact-panel/contact-panel';
import { ExperienceTimeline } from './experience-timeline/experience-timeline';
import { HeroSection } from './hero-section/hero-section';
import { MetricBand } from './metric-band/metric-band';
import { SkillsGrid } from './skills-grid/skills-grid';
import { WorkList } from './work-list/work-list';

@Component({
  selector: 'app-portfolio-page',
  imports: [
    SiteHeader,
    SiteFooter,
    HeroSection,
    MetricBand,
    WorkList,
    ApproachSection,
    ExperienceTimeline,
    SkillsGrid,
    ContactPanel,
  ],
  templateUrl: './portfolio-page.html',
  styleUrl: './portfolio-page.css',
})
export class PortfolioPage {
  protected readonly profile = inject(ProfileStore);

  /** The section that belongs to one view only, once per view. */
  protected readonly approaches = computed(() => lensVariants(this.profile.approach()));

  /**
   * In-page anchors; the ids match the section hosts below. The view-specific
   * section gets one link per view, each shown only with its own section.
   */
  protected readonly sections = computed<readonly NavSection[]>(() => {
    const approach = this.profile.approach();
    return [
      { id: 'work', label: 'Work' },
      ...LENSES.map((lens) => ({ id: approach[lens].id, label: approach[lens].navLabel, lens })),
      { id: 'experience', label: 'Experience' },
      { id: 'skills', label: 'Skills' },
      { id: 'contact', label: 'Contact' },
    ];
  });

  protected readonly action: NavAction = {
    label: 'Résumé',
    routerLink: '/resume',
  };

  constructor() {
    inject(SeoStore).apply({
      title: 'Nikhil Hukkerikar — Engineering Leader & Principal Frontend Architect',
      description:
        "Engineering leader and frontend platform architect at Bank of America. Owns and designed Phoenix, the bank's internal Angular design system, CLI and form platform — 50 applications, 300+ developers, a 24-person team and a $3–4M budget.",
      path: '/',
    });
  }
}
