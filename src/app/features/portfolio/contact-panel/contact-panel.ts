import { Component, input } from '@angular/core';
import type { Contact } from '../../../core/profile/profile.model';

/** The closing section: where he is, and the three ways to reach him. */
@Component({
  selector: 'app-contact-panel',
  template: `
    <section aria-labelledby="contact-heading">
      <h2 id="contact-heading">Let's talk</h2>

      <p class="lede">{{ contact().location }} · open to engineering leadership conversations.</p>

      <div class="actions">
        <a class="btn btn-primary" [href]="mailto()">{{ contact().email }}</a>
        <a class="btn btn-ghost" [href]="contact().linkedInUrl">LinkedIn</a>
        <a class="btn btn-ghost" [href]="tel()">{{ contact().phone }}</a>
      </div>
    </section>
  `,
  styleUrl: './contact-panel.css',
})
export class ContactPanel {
  readonly contact = input.required<Contact>();
  readonly mailto = input.required<string>();
  readonly tel = input.required<string>();
}
