import { Component, input } from '@angular/core';
import type { SkillGroup } from '../../../core/profile/profile.model';

/** Skill groups, each marked by a short rule in the accent or a neutral. */
@Component({
  selector: 'app-skills-grid',
  template: `
    <section aria-labelledby="skills-heading">
      <h2 id="skills-heading" class="kicker">Skills</h2>

      <ul class="grid">
        @for (group of groups(); track group.id) {
          <li class="group" [class.is-emphasis]="group.emphasis">
            <h3>{{ group.title }}</h3>
            <p>{{ group.detail }}</p>
          </li>
        }
      </ul>
    </section>
  `,
  styleUrl: './skills-grid.css',
})
export class SkillsGrid {
  readonly groups = input.required<readonly SkillGroup[]>();
}
