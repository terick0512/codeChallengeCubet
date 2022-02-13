import React from 'react';
// Types
export const types = {
  TEST: 'TEST',
  LOGIN: 'LOGIN',
  UPDATE_DRINKS: 'UPDATE_DRINKS',
};

// initial states
const initialState = {
  loaderStatus: 'exclusive',
  authStatus: false,
  drinks: [],
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.TEST:
      return {...state, loaderStatus: action.payload};
    case types.LOGIN:
      return {...state, authStatus: action.payload};
    case types.UPDATE_DRINKS:
      return {...state, drinks: action.payload};
    default:
      return state;
  }
};

// action creators & async actions
export const actions = {
  LoginFunc: (params, callBack) => async dispatch => {},
};
