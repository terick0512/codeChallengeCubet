import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authStore'],
};

const initialize = store => {
  const state = store.getState();
  // unauthorizedApiResponseInterceptor(async () => {
  //   store.dispatch(userActions.logoutFunc());
  //   // store.dispatch(commonActions.clearData());
  //   // api.setToken(undefined);
  //   await AsyncStorage.clear();
  //   NavigationService.navigate('loginScreen', {
  //     params: null,
  //   });
  // });
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// preloadedState (optional): represents initial redux state (rendered on server)
const storeconfig = () => {
  const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));
  const persistor = persistStore(store, null, () => {
    initialize(store);
  });
  return {store, persistor};
};

export default storeconfig;
