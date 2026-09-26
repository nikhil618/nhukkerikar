import { Component, computed, input } from '@angular/core';
import { type Lensed, lensVariants } from '../../../core/lens/lens.model';
import type { SkillGroup } from '../../../core/profile/profile.model';

/**
 * Skill groups, each marked by a short rule in the accent or a neutral. The
 * views order and emphasise the groups differently.
 */
@Component({
  selector: 'app-skills-grid',
  template: `
    <section aria-labelledby="skills-heading">
      <h2 id="skills-heading" class="kicker">Skills</h2>

      @for (list of lists(); track list.lens) {
        <ul class="grid" [attr.data-lens-only]="list.lens">
          @for (group of list.value; track group.id) {
            <li class="group" [class.is-emphasis]="group.emphasis">
              <h3>{{ group.title }}</h3>
              <p>{{ group.detail }}</p>
            </li>
          }
        </ul>
      }
    </section>
  `,
  styleUrl: './skills-grid.css',
})
export class SkillsGrid {
  readonly groups = input.required<Lensed<readonly SkillGroup[]>>();

  protected readonly lists = computed(() => lensVariants(this.groups()));
}
