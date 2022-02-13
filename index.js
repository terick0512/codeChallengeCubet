import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import storeconfig from './src/store/storeconfig';

const {store, persistor} = storeconfig();

const Component = () => {
  return (
    <Provider store={store} persistor={persistor}>
      <App></App>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Component);
