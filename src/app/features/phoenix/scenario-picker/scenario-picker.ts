import { Component, input, model } from '@angular/core';

export interface PickerOption {
  readonly id: string;
  readonly label: string;
}

/**
 * Chooses which scenario the page is showing.
 *
 * Built on Nocturne's `.seg` control, which is native radio inputs with no
 * script: a radio group is exactly what this is — one of four, mutually
 * exclusive — so arrow-key navigation and the "3 of 4, selected" announcement
 * come from the browser rather than from hand-rolled tab semantics. It also
 * means the control works before hydration.
 */
@Component({
  selector: 'app-scenario-picker',
  template: `
    <fieldset>
      <legend class="sr-only">{{ legend() }}</legend>

      <div class="seg">
        @for (option of options(); track option.id) {
          <label class="seg-opt">
            <input
              type="radio"
              name="scenario"
              [value]="option.id"
              [checked]="option.id === selected()"
              (change)="selected.set(option.id)"
            />
            {{ option.label }}
          </label>
        }
      </div>
    </fieldset>
  `,
  styles: `
    fieldset {
      margin: 0;
      padding: 0;
      border: 0;
    }
  `,
})
export class ScenarioPicker {
  readonly options = input.required<readonly PickerOption[]>();

  /** Names the group for screen readers; never shown. */
  readonly legend = input('Choose a scenario');

  /** The chosen option's id. Bind with `[(selected)]`. */
  readonly selected = model.required<string>();
}
