import { Component, computed, input, model, signal } from '@angular/core';
import { LENS_OPTIONS, type Lens } from './lens.model';

/**
 * Switches the site between the leadership and architecture views.
 *
 * Nocturne's `.seg` on native radio inputs, like the /phoenix scenario picker:
 * arrow keys and the "1 of 2, selected" announcement come from the browser.
 * The `data-lens-input` attribute lets the inline script in index.html handle
 * a click that lands before hydration, so the control works from first paint.
 *
 * More than one can sit on a page (header and hero), so each takes its own
 * radio-group `name`, and each announces only the changes made through it.
 */
@Component({
  selector: 'app-lens-toggle',
  template: `
    <fieldset>
      <legend class="sr-only">View this site as</legend>

      <div class="seg">
        @for (option of options; track option.id) {
          <label class="seg-opt">
            <input
              type="radio"
              data-lens-input
              [attr.name]="name()"
              [value]="option.id"
              [checked]="option.id === lens()"
              (change)="choose(option.id)"
            />
            {{ option.label }}
          </label>
        }
      </div>
    </fieldset>

    <p class="sr-only" aria-live="polite">{{ announcement() }}</p>
  `,
  styles: `
    :host {
      display: inline-block;
    }

    fieldset {
      margin: 0;
      padding: 0;
      border: 0;
    }

    .seg-opt {
      white-space: nowrap;
    }
  `,
})
export class LensToggle {
  /** The active lens. Bind with `[(lens)]`. */
  readonly lens = model.required<Lens>();

  /** The radio group's name; unique per toggle on the page. */
  readonly name = input.required<string>();

  protected readonly options = LENS_OPTIONS;

  /** Empty until this toggle is used, so nothing is announced on load. */
  private readonly touched = signal(false);

  protected readonly announcement = computed(() => {
    if (!this.touched()) {
      return '';
    }
    const label = this.options.find((option) => option.id === this.lens())?.label;
    return `Showing the ${label?.toLowerCase()} view`;
  });

  protected choose(lens: Lens): void {
    this.touched.set(true);
    this.lens.set(lens);
  }
}
