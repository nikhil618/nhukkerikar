import { Component, input } from '@angular/core';

/** Leadership scope as outlined pills. */
@Component({
  selector: 'app-leadership-tags',
  template: `
    <section aria-labelledby="leadership-heading">
      <h2 id="leadership-heading" class="resume-heading">Leadership</h2>

      <ul>
        @for (item of items(); track item) {
          <li>{{ item }}</li>
        }
      </ul>
    </section>
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
  readonly items = input.required<readonly string[]>();
}
