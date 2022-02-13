import React from 'react';
// Types
export const types = {
  TEST: 'TEST',
  LOGIN: 'LOGIN',
};

// initial states
const initialState = {
  loaderStatus: 'exclusive',
  authStatus: false,
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.TEST:
      return {...state, loaderStatus: action.payload};
    case types.LOGIN:
      return {...state, authStatus: action.payload};
    default:
      return state;
  }
};

// action creators & async actions
export const actions = {
  LoginFunc: (params, callBack) => async dispatch => {},
};
