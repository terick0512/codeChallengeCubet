import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import storeconfig from './src/store/storeconfig';
import Navigator from './src/navigation';

const {store, persistor} = storeconfig();

const Component = () => {
  return (
    <Provider store={store} persistor={persistor}>
      <Navigator></Navigator>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Component);
