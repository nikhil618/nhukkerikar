import { Component, computed, input, model } from '@angular/core';
import type { ResolvedTheme, ThemeMode } from './theme-store';

/**
 * The colour-mode control. Presentational: it takes the current preference as
 * a two-way `model` and the resolved theme as an input, and writes the
 * opposite back. It never reaches for the store itself, so it drops into any
 * layout that can supply those two.
 */
@Component({
  selector: 'app-theme-toggle',
  template: `
    <button type="button" class="btn btn-ghost" [attr.aria-pressed]="isDark()" (click)="flip()">
      <span class="sr-only">Switch to </span>{{ label() }}
    </button>
  `,
  styles: `
    button {
      white-space: nowrap;
    }
  `,
})
export class ThemeToggle {
  /** The stored preference. Bind with `[(mode)]`. */
  readonly mode = model.required<ThemeMode>();

  /** What `mode` currently resolves to, once the OS setting is folded in. */
  readonly resolved = input.required<ResolvedTheme>();

  protected readonly isDark = computed(() => this.resolved() === 'dark');

  protected readonly label = computed(() => (this.isDark() ? 'Light mode' : 'Dark mode'));

  protected flip(): void {
    this.mode.set(this.isDark() ? 'light' : 'dark');
  }
}
