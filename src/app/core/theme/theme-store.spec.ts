import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { ThemeStore } from './theme-store';

describe('ThemeStore', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  function create(): ThemeStore {
    return TestBed.configureTestingModule({}).inject(ThemeStore);
  }

  it('starts on the system preference and records it', () => {
    const store = create();
    TestBed.tick();

    expect(store.mode()).toBe('system');
    expect(localStorage.getItem('nh-theme')).toBe('system');
  });

  it('paints the resolved theme onto the document element', () => {
    const store = create();
    const doc = TestBed.inject(DOCUMENT);

    store.mode.set('light');
    TestBed.tick();

    expect(store.resolved()).toBe('light');
    expect(doc.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('toggles to the opposite of what is on screen, pinning the choice', () => {
    const store = create();
    store.mode.set('dark');
    TestBed.tick();

    store.toggle();
    TestBed.tick();

    expect(store.mode()).toBe('light');
    expect(store.isDark()).toBe(false);
    expect(localStorage.getItem('nh-theme')).toBe('light');
  });

  it('adopts a stored preference over the system setting', () => {
    localStorage.setItem('nh-theme', 'light');

    const store = create();
    TestBed.tick();

    expect(store.mode()).toBe('light');
    expect(store.resolved()).toBe('light');
  });

  it('ignores a stored value that is not a mode', () => {
    localStorage.setItem('nh-theme', 'sepia');

    const store = create();

    expect(store.mode()).toBe('system');
  });
});
