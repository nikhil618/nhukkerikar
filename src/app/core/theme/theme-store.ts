import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { computed, DestroyRef, effect, inject, PLATFORM_ID, Service, signal } from '@angular/core';

/** What the visitor chose. `system` follows the OS setting. */
export type ThemeMode = 'system' | 'light' | 'dark';

/** What that choice actually resolves to right now. */
export type ResolvedTheme = 'light' | 'dark';

const STORAGE_KEY = 'nh-theme';
const MODES: readonly ThemeMode[] = ['system', 'light', 'dark'];

function isThemeMode(value: string | null): value is ThemeMode {
  return value !== null && (MODES as readonly string[]).includes(value);
}

/**
 * Owns the colour mode. `mode` is the writable preference — the theme toggle
 * two-way binds straight to it — and `resolved` folds in the OS setting.
 *
 * Nothing here touches the browser during prerendering; the server renders the
 * dark default, and the inline script in index.html re-applies the stored
 * choice before first paint so there is no flash on load.
 */
@Service()
export class ThemeStore {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly destroyRef = inject(DestroyRef);

  /** The visitor's preference. Writable: bind it with `[(mode)]`. */
  readonly mode = signal<ThemeMode>('system');

  private readonly systemPrefersDark = signal(true);

  readonly resolved = computed<ResolvedTheme>(() => {
    const mode = this.mode();
    if (mode !== 'system') {
      return mode;
    }
    return this.systemPrefersDark() ? 'dark' : 'light';
  });

  readonly isDark = computed(() => this.resolved() === 'dark');

  constructor() {
    if (this.isBrowser) {
      this.adoptBrowserState();
    }

    // Paint the resolved theme onto <html>, where the token overrides hang.
    effect(() => {
      this.document.documentElement.setAttribute('data-theme', this.resolved());
    });

    // Persist the preference, not the resolved value: someone on `system`
    // should keep following their OS when it changes.
    effect(() => {
      const mode = this.mode();
      if (!this.isBrowser) {
        return;
      }
      try {
        localStorage.setItem(STORAGE_KEY, mode);
      } catch {
        // Storage blocked (private mode, cookies off) — the session still works.
      }
    });
  }

  /** Flip to the opposite of whatever is on screen, pinning the choice. */
  toggle(): void {
    this.mode.set(this.isDark() ? 'light' : 'dark');
  }

  private adoptBrowserState(): void {
    this.followSystemPreference();

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (isThemeMode(stored)) {
        this.mode.set(stored);
      }
    } catch {
      // Storage blocked — stay on `system`.
    }
  }

  private followSystemPreference(): void {
    // Not every environment that runs this code has matchMedia — jsdom does
    // not, and neither do some embedded browsers. Without it `system` simply
    // keeps the dark default rather than taking the app down at bootstrap.
    if (typeof window.matchMedia !== 'function') {
      return;
    }

    const query = window.matchMedia('(prefers-color-scheme: dark)');
    this.systemPrefersDark.set(query.matches);

    const onChange = (event: MediaQueryListEvent) => this.systemPrefersDark.set(event.matches);

    query.addEventListener('change', onChange);
    this.destroyRef.onDestroy(() => query.removeEventListener('change', onChange));
  }
}
