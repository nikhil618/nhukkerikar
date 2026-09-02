import { computed, Service, signal } from '@angular/core';
import { PROFILE } from './profile.data';
import type { Profile, Role } from './profile.model';

/**
 * Exposes the profile as signals. The content is static today, so the source
 * is a plain signal over the bundled deck; swapping it for a fetched resource
 * later is a one-line change here and nothing downstream moves.
 */
@Service()
export class ProfileStore {
  private readonly source = signal<Profile>(PROFILE);

  readonly profile = this.source.asReadonly();

  readonly name = computed(() => this.profile().name);
  readonly discipline = computed(() => this.profile().discipline);
  readonly contact = computed(() => this.profile().contact);
  readonly work = computed(() => this.profile().work);
  readonly roles = computed(() => this.profile().roles);
  readonly skills = computed(() => this.profile().skills);
  readonly leadership = computed(() => this.profile().leadership);
  readonly platform = computed(() => this.profile().platform);
  readonly education = computed(() => this.profile().education);
  readonly headlineMetrics = computed(() => this.profile().headlineMetrics);

  /** The role driving the "currently at" line; falls back to the newest entry. */
  readonly currentRole = computed<Role | undefined>(
    () => this.roles().find((role) => role.era === 'current') ?? this.roles()[0],
  );

  /** `mailto:` / `tel:` targets, built once rather than in every template. */
  readonly mailto = computed(() => `mailto:${this.contact().email}`);
  readonly tel = computed(() => `tel:${this.contact().phone.replace(/[^\d+]/g, '')}`);
}
