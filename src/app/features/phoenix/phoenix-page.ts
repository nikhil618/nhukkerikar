import { Component, inject, linkedSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FlowStore } from '../../core/flow/flow-store';
import { ProfileStore } from '../../core/profile/profile-store';
import { SeoStore } from '../../core/seo/seo-store';
import { SiteFooter } from '../../layout/site-footer/site-footer';
import { SiteHeader } from '../../layout/site-header/site-header';
import type { NavAction } from '../../layout/site-nav.model';
import { FlowStages } from './flow-stages/flow-stages';
import { FlowStrip } from './flow-strip/flow-strip';
import { ScenarioPicker } from './scenario-picker/scenario-picker';

@Component({
  selector: 'app-phoenix-page',
  imports: [RouterLink, SiteHeader, SiteFooter, ScenarioPicker, FlowStrip, FlowStages],
  templateUrl: './phoenix-page.html',
  styleUrl: './phoenix-page.css',
})
export class PhoenixPage {
  protected readonly profile = inject(ProfileStore);
  protected readonly flow = inject(FlowStore);

  protected readonly action: NavAction = {
    label: 'Résumé',
    routerLink: '/resume',
  };

  /**
   * Which scenario is on screen. Writable — the picker binds to it — but its
   * default is derived: the first scenario in the list, and it returns there
   * if the list is ever replaced rather than pointing at an id that no longer
   * exists.
   */
  protected readonly selectedId = linkedSignal({
    source: this.flow.scenarios,
    computation: (scenarios) => scenarios[0]?.id ?? '',
  });

  constructor() {
    inject(SeoStore).apply({
      title: 'How work moves through Phoenix — Nikhil Hukkerikar',
      description:
        'Four kinds of work — a feature request, a bug fix, a CVE, an architectural change — running the same seven-stage platform pipeline at four very different speeds.',
      path: '/phoenix',
    });
  }
}
