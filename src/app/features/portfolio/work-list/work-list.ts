import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import type { WorkItem } from '../../../core/profile/profile.model';

/** "Selected work": a numbered row per project, split off by a fading rule. */
@Component({
  selector: 'app-work-list',
  imports: [DecimalPipe],
  templateUrl: './work-list.html',
  styleUrl: './work-list.css',
})
export class WorkList {
  readonly items = input.required<readonly WorkItem[]>();
}
