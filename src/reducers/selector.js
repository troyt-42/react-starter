import { SELECTOR_NEXT, SELECTOR_LAST } from '../constants';
import { fromJS } from 'immutable';

const names = ['World', 'React World', 'Redux World', 'Rangle World'];
const INITIAL_STATE = fromJS({
  nameIndex: 0,
  name: names[0],
});

function selectorReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

  case SELECTOR_NEXT:
    if (state.get('nameIndex') >= names.length - 1) {
      return state.update('nameIndex', () => 0).update('name', () => names[0]);
    }
    return state.update('nameIndex', (value) => value + 1).update('name', (value) => names[names.indexOf(value) + 1]);


  case SELECTOR_LAST:
    if (state.get('nameIndex') === 0) {
      return state.update('nameIndex', () => names.length - 1).update('name', () => names[names.length - 1]);
    }
    return state.update('nameIndex', (value) => value - 1).update('name', (value) => names[names.indexOf(value) - 1]);
  default:
    return state;
  }
}

export default selectorReducer;
