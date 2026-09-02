import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  template: ` <footer>© {{ year() }} {{ name() }}</footer> `,
  styles: `
    footer {
      padding: 56px 0;
      font-size: 13px;
      color: color-mix(in srgb, var(--color-text) 72%, transparent);
    }
  `,
})
export class SiteFooter {
  readonly name = input.required<string>();

  /**
   * Read once at construction. The page is prerendered, so the build stamps a
   * year into the HTML and hydration corrects it if the clock has rolled over.
   */
  protected readonly year = signal(new Date().getFullYear());
}
