import React from 'react';
import {
  ImageBackground,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import Img from '../../assets/image';
import Confirmation from './confirmation';
export const ChooseMachine = ({navigation}) => {
  const authStatus = useSelector(state => state.authStore.authStatus);
  console.log('authStatus-splash', authStatus);
  return (
    <ImageBackground
      source={Img.map}
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
      }}
      imageStyle={{height: '100%', width: '100%'}}>
      <Confirmation></Confirmation>
    </ImageBackground>
  );
};
