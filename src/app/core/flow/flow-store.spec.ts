import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { FlowStore } from './flow-store';

describe('FlowStore', () => {
  function create(): FlowStore {
    return TestBed.configureTestingModule({}).inject(FlowStore);
  }

  it('gives every scenario every stage, once, in pipeline order', () => {
    const store = create();
    const order = store.stages().map((stage) => stage.id);

    for (const scenario of store.scenarios()) {
      expect(
        scenario.stages.map((entry) => entry.stage),
        `${scenario.id} must walk the full pipeline in order`,
      ).toEqual(order);
    }
  });

  it('resolves every stage reference, so no entry renders a bare id', () => {
    const store = create();
    const byId = store.stagesById();

    for (const scenario of store.scenarios()) {
      for (const entry of scenario.stages) {
        expect(byId.has(entry.stage)).toBe(true);
      }
    }
  });

  it('leaves skipped stages without an owner or a duration', () => {
    const store = create();
    const skipped = store
      .scenarios()
      .flatMap((scenario) => scenario.stages)
      .filter((entry) => entry.weight === 'skipped');

    expect(skipped.length).toBeGreaterThan(0);
    for (const entry of skipped) {
      expect(entry.decidedBy).toBeUndefined();
      expect(entry.duration).toBeUndefined();
      expect(entry.detail).not.toBe('');
    }
  });

  it('gives every worked stage an owner and a duration', () => {
    const store = create();
    const worked = store
      .scenarios()
      .flatMap((scenario) => scenario.stages)
      .filter((entry) => entry.weight !== 'skipped');

    for (const entry of worked) {
      expect(entry.decidedBy, `${entry.stage} needs an owner`).toBeTruthy();
      expect(entry.duration, `${entry.stage} needs a duration`).toBeTruthy();
    }
  });

  it('offers one picker option per scenario, with unique ids', () => {
    const store = create();
    const options = store.pickerOptions();

    expect(options.length).toBe(store.scenarios().length);
    expect(new Set(options.map((o) => o.id)).size).toBe(options.length);
  });
});
