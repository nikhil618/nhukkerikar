import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

/** The opening statement: two stacked lines, a paragraph and two actions. */
@Component({
  selector: 'app-hero-section',
  imports: [RouterLink],
  template: `
    <section class="rise">
      <h1>
        @for (line of headline(); track $index) {
          <span>{{ line }}</span>
        }
      </h1>

      <p class="summary">{{ summary() }}</p>

      <div class="actions">
        <a class="btn btn-primary" routerLink="/" fragment="work"> See the work </a>
        <a class="btn btn-ghost" [href]="mailto()">Get in touch</a>
      </div>
    </section>
  `,
  styleUrl: './hero-section.css',
})
export class HeroSection {
  readonly headline = input.required<readonly string[]>();
  readonly summary = input.required<string>();
  readonly mailto = input.required<string>();
}
