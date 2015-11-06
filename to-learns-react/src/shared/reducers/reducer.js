import { combineReducers } from 'redux';
import actionConstants from 'app/shared/actions/constants';

function someValues(state = [], action) {
  switch (action.type) {
  case actionConstants.ADD_SOME_VALUE:
    return [...state, action.value];
  default:
    return state;
  }
}

function toLearns(state = [], action) {
  switch (action.type) {
  case actionConstants.ADD_TO_LEARN:
    return [...state, action.value];
  default:
    return state;
  }
}

const app = combineReducers({
  someValues,
  toLearns,
});

export default app;
