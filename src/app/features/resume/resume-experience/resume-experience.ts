import { Component, input } from '@angular/core';
import type { Role } from '../../../core/profile/profile.model';
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
}
