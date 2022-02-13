import {combineReducers} from 'redux';
import authStore from './auth-store';

const rootReducer = combineReducers({
  authStore,
});

export default rootReducer;
