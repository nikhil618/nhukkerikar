import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { LENSES } from '../lens/lens.model';
import { ProfileStore } from './profile-store';

describe('ProfileStore', () => {
  function create(): ProfileStore {
    return TestBed.configureTestingModule({}).inject(ProfileStore);
  }

  it('picks the role marked current', () => {
    const store = create();

    expect(store.currentRole()?.era).toBe('current');
    expect(store.currentRole()).toBe(store.roles()[0]);
  });

  it('builds a tel: href with only dialable characters', () => {
    const store = create();

    expect(store.tel()).toBe('tel:+13128880053');
  });

  it('builds a mailto: href from the contact address', () => {
    const store = create();

    expect(store.mailto()).toBe(`mailto:${store.contact().email}`);
  });

  it("gives every role, and each view's skills, work and cards, unique ids so @for can track them", () => {
    const store = create();
    const unique = (ids: readonly string[]) => new Set(ids).size === ids.length;

    expect(unique(store.roles().map((role) => role.id))).toBe(true);

    for (const lens of LENSES) {
      expect(unique(store.skills()[lens].map((group) => group.id))).toBe(true);
      expect(unique(store.work()[lens].map((item) => item.id))).toBe(true);
      expect(unique(store.approach()[lens].items.map((item) => item.id))).toBe(true);
    }
  });

  it('gives the two view-specific sections different anchors', () => {
    const store = create();

    expect(store.approach().lead.id).not.toBe(store.approach().arch.id);
  });

  it("keeps each view's résumé bullets non-empty for every role", () => {
    const store = create();

    for (const lens of LENSES) {
      for (const role of store.roles()) {
        const visible = role.highlights.filter(
          (highlight) => typeof highlight === 'string' || highlight.only === lens,
        );
        expect(visible.length, `${role.id} under ${lens}`).toBeGreaterThan(0);
      }
    }
  });
});
