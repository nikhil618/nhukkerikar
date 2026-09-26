import { DecimalPipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { type Lensed, lensVariants } from '../../../core/lens/lens.model';
import type { WorkItem } from '../../../core/profile/profile.model';

/**
 * "Selected work": a numbered row per project, split off by a fading rule.
 * Each view picks and orders its own projects; both lists render under one
 * heading and CSS shows the active one.
 */
@Component({
  selector: 'app-work-list',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './work-list.html',
  styleUrl: './work-list.css',
})
export class WorkList {
  readonly items = input.required<Lensed<readonly WorkItem[]>>();

  protected readonly lists = computed(() => lensVariants(this.items()));
}
