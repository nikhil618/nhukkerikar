import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
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

  it('gives every role and skill group a unique id, so @for can track them', () => {
    const store = create();
    const roleIds = store.roles().map((role) => role.id);
    const skillIds = store.skills().map((group) => group.id);

    expect(new Set(roleIds).size).toBe(roleIds.length);
    expect(new Set(skillIds).size).toBe(skillIds.length);
  });
});
