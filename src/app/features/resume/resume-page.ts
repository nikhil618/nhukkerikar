import { DOCUMENT } from '@angular/common';
import { booleanAttribute, Component, inject, input } from '@angular/core';
import { ProfileStore } from '../../core/profile/profile-store';
import { SeoStore } from '../../core/seo/seo-store';
import { SiteHeader } from '../../layout/site-header/site-header';
import type { NavAction } from '../../layout/site-nav.model';
import { LeadershipTags } from './leadership-tags/leadership-tags';
import { PlatformGlance } from './platform-glance/platform-glance';
import { ResumeExperience } from './resume-experience/resume-experience';
import { ResumeHeader } from './resume-header/resume-header';
import { SkillsMatrix } from './skills-matrix/skills-matrix';

@Component({
  selector: 'app-resume-page',
  imports: [
    SiteHeader,
    ResumeHeader,
    PlatformGlance,
    SkillsMatrix,
    LeadershipTags,
    ResumeExperience,
  ],
  templateUrl: './resume-page.html',
  styleUrl: './resume-page.css',
})
export class ResumePage {
  /**
   * Whether to include the "Phoenix at a glance" panel — the one editorial
   * choice the original document exposed. Bound from route data by
   * `withComponentInputBinding()`, so a variant of this page is a route away.
   */
  readonly showPlatform = input(true, { transform: booleanAttribute });

  protected readonly profile = inject(ProfileStore);

  protected readonly action: NavAction = {
    label: 'Portfolio',
    routerLink: '/',
  };

  private readonly document = inject(DOCUMENT);

  constructor() {
    inject(SeoStore).apply({
      title: 'Résumé — Nikhil Hukkerikar',
      description:
        'Sixteen years in frontend engineering: platform ownership, design systems and Angular at enterprise scale, from payment screens to the framework itself.',
      path: '/resume',
    });
  }

  protected print(): void {
    this.document.defaultView?.print();
  }
}
