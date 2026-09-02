import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * The shell. Each page brings its own header and footer, so all that belongs
 * here is the skip link that has to precede every one of them.
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <a class="skip-link" href="#main">Skip to main content</a>
    <router-outlet />
  `,
})
export class App {}
