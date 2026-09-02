import type { MarkerTone } from '../../shared/timeline-marker/timeline-marker';
import type { RoleEra } from './profile.model';

/** How a career timeline reads a marker: the current role leads, the rest recede. */
export const TONE_BY_ERA: Readonly<Record<RoleEra, MarkerTone>> = {
  current: 'solid',
  recent: 'outlined',
  earlier: 'muted',
};
