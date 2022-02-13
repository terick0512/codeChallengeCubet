import React from 'react';
import {
  ImageBackground,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Img from '../../assets/image';
export const Splash = ({navigation}) => {
  return (
    <ImageBackground
      source={Img.bg}
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
      }}
      imageStyle={{height: '100%', width: '100%'}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Dashboard');
          }}>
          <Image
            style={{width: 64}}
            resizeMode={'contain'}
            source={Img.logo}></Image>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
