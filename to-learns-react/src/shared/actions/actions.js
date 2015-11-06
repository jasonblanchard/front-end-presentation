import actionConstants from 'app/shared/actions/constants';

export function addSomeValue(value) {
  return {
    type: actionConstants.ADD_SOME_VALUE,
    value,
  };
}

export function addToLearn(value) {
  return {
    type: actionConstants.ADD_TO_LEARN,
    value,
  };
}
