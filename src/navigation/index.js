// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash} from '../screens/splash';
import {Dashboard} from '../screens/onboard';
import {Login} from '../screens/login';
import {ChooseMachine} from '../screens/choose-machine';
import {List} from '../screens/select-drink';
import {Customize} from '../screens/customoze-drink';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ChooseMachine" component={ChooseMachine} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Customize" component={Customize} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
