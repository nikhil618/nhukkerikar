/**
 * The site reads two ways: as an engineering leader's portfolio or as a
 * principal frontend architect's. Both are the same person doing both jobs, so
 * the lens changes emphasis and wording on one page rather than sending the
 * visitor to a different route.
 */
export type Lens = 'lead' | 'arch';

export const LENSES: readonly Lens[] = ['lead', 'arch'];

/** The lens a first-time visitor sees. */
export const DEFAULT_LENS: Lens = 'lead';

/** Button labels, and the `?view=` value that opens the site on that lens. */
export const LENS_OPTIONS: readonly {
  readonly id: Lens;
  readonly label: string;
  readonly param: string;
}[] = [
  { id: 'lead', label: 'Leadership', param: 'leadership' },
  { id: 'arch', label: 'Architecture', param: 'architecture' },
];

export function isLens(value: unknown): value is Lens {
  return value === 'lead' || value === 'arch';
}

/** A value written once per lens. */
export interface Lensed<T> {
  readonly lead: T;
  readonly arch: T;
}

export function isLensed<T>(value: T | Lensed<T>): value is Lensed<T> {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    'lead' in value &&
    'arch' in value
  );
}

/**
 * One rendering of a lensed value. `lens` is null when both lenses share it,
 * and otherwise becomes the element's `data-lens-only` attribute.
 */
export interface LensVariant<T> {
  readonly lens: Lens | null;
  readonly value: T;
}

/**
 * What a template renders for a value that may differ by lens.
 *
 * Both variants go into the page, and a global CSS rule keyed on
 * `<html data-lens>` hides the inactive one. That is deliberate: the site is
 * prerendered, so rendering only the active lens would show the default to
 * everyone until hydration. With both in the HTML, the inline script in
 * index.html picks the lens before first paint and nothing flashes.
 */
export function lensVariants<T>(value: T | Lensed<T>): readonly LensVariant<T>[] {
  if (!isLensed(value)) {
    return [{ lens: null, value }];
  }
  if (value.lead === value.arch) {
    return [{ lens: null, value: value.lead }];
  }
  return LENSES.map((lens) => ({ lens, value: value[lens] }));
}
