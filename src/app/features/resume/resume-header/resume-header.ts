import { Component, computed, input } from '@angular/core';
import { type Lensed, lensVariants } from '../../../core/lens/lens.model';
import type { Contact } from '../../../core/profile/profile.model';

/**
 * The résumé masthead. The name is set in caps by CSS rather than in the data
 * so it copies out of the page — and out of an applicant tracking system —
 * the way it is written.
 */
@Component({
  selector: 'app-resume-header',
  template: `
    <header>
      <h1>{{ name() }}</h1>
      @for (variant of disciplines(); track variant.lens) {
        <p class="discipline" [attr.data-lens-only]="variant.lens">{{ variant.value }}</p>
      }

      <ul class="contacts">
        <li>{{ contact().location }}</li>
        <li>
          <a [href]="tel()">{{ contact().phone }}</a>
        </li>
        <li>
          <a [href]="mailto()">{{ contact().email }}</a>
        </li>
        <li>
          <a [href]="contact().linkedInUrl">{{ contact().linkedInLabel }}</a>
        </li>
      </ul>
    </header>
  `,
  styleUrl: './resume-header.css',
})
export class ResumeHeader {
  readonly name = input.required<string>();
  readonly discipline = input.required<Lensed<string>>();
  readonly contact = input.required<Contact>();
  readonly mailto = input.required<string>();
  readonly tel = input.required<string>();

  protected readonly disciplines = computed(() => lensVariants(this.discipline()));
}
