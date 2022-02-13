import React from 'react';
// Types
export const types = {
  TEST: 'TEST',
};

// initial states
const initialState = {
  loaderStatus: 'exclusive',
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.TEST:
      return {...state, loaderStatus: action.payload};
    default:
      return state;
  }
};

// action creators & async actions
export const actions = {
  signUpFunc: (params, callBack) => async dispatch => {},
};
