import { SELECTOR_NEXT, SELECTOR_LAST } from '../constants';

export function next() {
  return {
    type: SELECTOR_NEXT,
  };
}

export function last() {
  return {
    type: SELECTOR_LAST,
  };
}
