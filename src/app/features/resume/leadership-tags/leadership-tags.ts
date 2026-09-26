import { Component, computed, input } from '@angular/core';
import { type Lensed, lensVariants } from '../../../core/lens/lens.model';
import type { TagGroup } from '../../../core/profile/profile.model';

/**
 * Outlined pills: leadership scope on one view, core expertise on the other.
 * Each view gets its own section so each heading keeps a unique id.
 */
@Component({
  selector: 'app-leadership-tags',
  template: `
    @for (group of groups(); track group.lens) {
      <section
        [attr.aria-labelledby]="'tags-heading-' + (group.lens ?? 'all')"
        [attr.data-lens-only]="group.lens"
      >
        <h2 [id]="'tags-heading-' + (group.lens ?? 'all')" class="resume-heading">
          {{ group.value.title }}
        </h2>

        <ul>
          @for (item of group.value.items; track item) {
            <li>{{ item }}</li>
          }
        </ul>
      </section>
    }
  `,
  styles: `
    section {
      margin: 0 0 26px;
      break-inside: avoid;
    }

    h2.resume-heading {
      margin-bottom: 10px;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin: 0;
      padding: 0;
      list-style: none;
      font-size: 12.5px;
    }

    li {
      padding: 3px 11px;
      border: 1px solid var(--color-neutral-700);
      border-radius: 999px;
      color: var(--color-neutral-300);
    }
  `,
})
export class LeadershipTags {
  readonly tags = input.required<Lensed<TagGroup>>();

  protected readonly groups = computed(() => lensVariants(this.tags()));
}
