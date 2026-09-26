import { Component, computed, input } from '@angular/core';
import { type Lensed, lensVariants } from '../../../core/lens/lens.model';
import type { SkillGroup } from '../../../core/profile/profile.model';

/** The résumé's two-column skills block — the same groups, worded tighter. */
@Component({
  selector: 'app-skills-matrix',
  template: `
    <section aria-labelledby="depth-heading">
      <h2 id="depth-heading" class="resume-heading">Frontend &amp; Platform Depth</h2>

      @for (list of lists(); track list.lens) {
        <ul class="grid" [attr.data-lens-only]="list.lens">
          @for (group of list.value; track group.id) {
            <li class="group" [class.is-emphasis]="group.emphasis">
              <span class="title">{{ group.title }}</span>
              <span class="detail">{{ group.resumeDetail ?? group.detail }}</span>
            </li>
          }
        </ul>
      }
    </section>
  `,
  styleUrl: './skills-matrix.css',
})
export class SkillsMatrix {
  readonly groups = input.required<Lensed<readonly SkillGroup[]>>();

  protected readonly lists = computed(() => lensVariants(this.groups()));
}
