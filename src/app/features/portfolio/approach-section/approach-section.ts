import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { Approach } from '../../../core/profile/profile.model';

/**
 * The section only one view shows: how the platform is run (leadership) or
 * the decisions behind its architecture. One card per point, each with its
 * result set apart where there is one.
 *
 * The page renders it once per view; the host carries the section id the
 * header links to, so the ids here are derived from it and stay unique.
 */
@Component({
  selector: 'app-approach-section',
  imports: [RouterLink],
  template: `
    <section [attr.aria-labelledby]="headingId()">
      <h2 [id]="headingId()" class="kicker">{{ approach().heading }}</h2>
      <p class="intro">{{ approach().intro }}</p>

      <ul class="grid">
        @for (item of approach().items; track item.id) {
          <li class="card">
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-body">{{ item.body }}</p>
            @if (item.outcome) {
              <p class="outcome">{{ item.outcome }}</p>
            }
          </li>
        }
      </ul>

      @if (approach().link; as link) {
        <a class="detail-link" [routerLink]="link.routerLink">
          {{ link.label }}
          <span class="arrow" aria-hidden="true">→</span>
        </a>
      }
    </section>
  `,
  styleUrl: './approach-section.css',
})
export class ApproachSection {
  readonly approach = input.required<Approach>();

  protected readonly headingId = computed(() => `${this.approach().id}-heading`);
}
