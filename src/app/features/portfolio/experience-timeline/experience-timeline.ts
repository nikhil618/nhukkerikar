import { Component, computed, input } from '@angular/core';
import { lensVariants } from '../../../core/lens/lens.model';
import type { Role } from '../../../core/profile/profile.model';
import { TONE_BY_ERA } from '../../../core/profile/role-tone';
import { TimelineMarker } from '../../../shared/timeline-marker/timeline-marker';

/** The career spine, one paragraph per role. The résumé bullets the same data. */
@Component({
  selector: 'app-experience-timeline',
  imports: [TimelineMarker],
  templateUrl: './experience-timeline.html',
  styleUrl: './experience-timeline.css',
})
export class ExperienceTimeline {
  readonly roles = input.required<readonly Role[]>();

  /**
   * Each role with the marker tone its era earns, and its summary as one
   * paragraph per view where the two views word it differently.
   */
  protected readonly entries = computed(() =>
    this.roles().map((role) => ({
      role,
      tone: TONE_BY_ERA[role.era],
      summaries: lensVariants(role.summary),
    })),
  );
}
