import assert from 'assert';
import fireAction from '../utils/fire-action';
import selectorReducer from './selector';
import { SELECTOR_NEXT, SELECTOR_LAST } from '../constants';
import { Map } from 'immutable';

let state = selectorReducer(undefined, {});

describe('selector reducer', () => {
  describe('inital state', () => {
    it('should be a Map', () => {
      assert.strictEqual(Map.isMap(state), true);
    });
  });

  describe('on SELECTOR_NEXT', () => {
    it('should increase state.nameIndex', () => {
      const previousValue = state.get('nameIndex');
      state = fireAction(selectorReducer, state, SELECTOR_NEXT);
      assert.strictEqual(state.get('nameIndex'), previousValue + 1);
    });
  });

  describe('on DECREMENT_COUNTER', () => {
    it('should decrease state.nameIndex', () => {
      const previousValue = state.get('nameIndex');
      state = fireAction(selectorReducer, state, SELECTOR_LAST);
      assert.strictEqual(state.get('nameIndex'), previousValue - 1);
    });
  });
});
