import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { afterEach, describe, expect, it } from 'vitest';
import { LensStore, LENS_STORAGE_KEY } from './lens-store';
import { lensVariants } from './lens.model';

describe('LensStore', () => {
  afterEach(() => {
    document.documentElement.removeAttribute('data-lens');
    localStorage.clear();
  });

  function create(): LensStore {
    return TestBed.configureTestingModule({}).inject(LensStore);
  }

  it('defaults to the leadership lens', () => {
    const store = create();

    expect(store.lens()).toBe('lead');
  });

  it('adopts the lens the pre-paint script stamped on <html>', () => {
    document.documentElement.setAttribute('data-lens', 'arch');

    const store = create();

    expect(store.lens()).toBe('arch');
  });

  it('ignores a value on <html> that is not a lens', () => {
    document.documentElement.setAttribute('data-lens', 'manager');

    const store = create();

    expect(store.lens()).toBe('lead');
  });

  it('writes a change to <html> and to storage', () => {
    const store = create();

    store.lens.set('arch');
    TestBed.tick();

    expect(TestBed.inject(DOCUMENT).documentElement.getAttribute('data-lens')).toBe('arch');
    expect(localStorage.getItem(LENS_STORAGE_KEY)).toBe('arch');
  });
});

describe('lensVariants', () => {
  it('renders a shared value once, unmarked', () => {
    expect(lensVariants('same')).toEqual([{ lens: null, value: 'same' }]);
  });

  it('collapses a lensed value whose two sides are identical', () => {
    expect(lensVariants({ lead: 'x', arch: 'x' })).toEqual([{ lens: null, value: 'x' }]);
  });

  it('renders one variant per lens when they differ', () => {
    expect(lensVariants({ lead: 'a', arch: 'b' })).toEqual([
      { lens: 'lead', value: 'a' },
      { lens: 'arch', value: 'b' },
    ]);
  });

  it('treats an array as a plain value, not a lensed one', () => {
    const list = ['a', 'b'];

    expect(lensVariants(list)).toEqual([{ lens: null, value: list }]);
  });
});
