import { Component, inject } from '@angular/core';
import { ProfileStore } from '../../core/profile/profile-store';
import { SeoStore } from '../../core/seo/seo-store';
import { SiteFooter } from '../../layout/site-footer/site-footer';
import { SiteHeader } from '../../layout/site-header/site-header';
import type { NavAction, NavSection } from '../../layout/site-nav.model';
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
    ExperienceTimeline,
    SkillsGrid,
    ContactPanel,
  ],
  templateUrl: './portfolio-page.html',
  styleUrl: './portfolio-page.css',
})
export class PortfolioPage {
  protected readonly profile = inject(ProfileStore);

  /** In-page anchors; the ids match the section hosts below. */
  protected readonly sections: readonly NavSection[] = [
    { id: 'work', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  protected readonly action: NavAction = {
    label: 'Résumé',
    routerLink: '/resume',
  };

  constructor() {
    inject(SeoStore).apply({
      title: 'Nikhil Hukkerikar — Engineering Leader, Frontend Platforms',
      description:
        "Engineering leader at Bank of America. Owns Phoenix, the bank's internal Angular design system, CLI and form platform — 50 applications, 300+ developers, a 24-person team and a $3–4M budget.",
      path: '/',
    });
  }
}
