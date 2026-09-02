import { Component, input } from '@angular/core';
import type { SkillGroup } from '../../../core/profile/profile.model';

/** The résumé's two-column skills block — the same groups, worded tighter. */
@Component({
  selector: 'app-skills-matrix',
  template: `
    <section aria-labelledby="depth-heading">
      <h2 id="depth-heading" class="resume-heading">Frontend &amp; Platform Depth</h2>

      <ul class="grid">
        @for (group of groups(); track group.id) {
          <li class="group" [class.is-emphasis]="group.emphasis">
            <span class="title">{{ group.title }}</span>
            <span class="detail">{{ group.resumeDetail ?? group.detail }}</span>
          </li>
        }
      </ul>
    </section>
  `,
  styleUrl: './skills-matrix.css',
})
export class SkillsMatrix {
  readonly groups = input.required<readonly SkillGroup[]>();
}
