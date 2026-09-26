import { Component, computed, input } from '@angular/core';
import type { Highlight, Role } from '../../../core/profile/profile.model';
import { TONE_BY_ERA } from '../../../core/profile/role-tone';
import { TimelineMarker } from '../../../shared/timeline-marker/timeline-marker';

/** The résumé's experience section: the same roles, bulleted. */
@Component({
  selector: 'app-resume-experience',
  imports: [TimelineMarker],
  templateUrl: './resume-experience.html',
  styleUrl: './resume-experience.css',
})
export class ResumeExperience {
  readonly roles = input.required<readonly Role[]>();

  /**
   * Each role paired with the marker tone its era earns, and its bullets
   * normalised: a bullet limited to one view carries that view, so the
   * template can mark it `data-lens-only`.
   */
  protected readonly entries = computed(() =>
    this.roles().map((role) => ({
      role,
      tone: TONE_BY_ERA[role.era],
      highlights: role.highlights.map(toBullet),
    })),
  );
}

function toBullet(highlight: Highlight) {
  return typeof highlight === 'string'
    ? { text: highlight, lens: null }
    : { text: highlight.text, lens: highlight.only };
}
