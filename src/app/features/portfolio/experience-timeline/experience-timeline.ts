import { Component, input } from '@angular/core';
import type { Role } from '../../../core/profile/profile.model';
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
}
