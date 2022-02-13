import React, {useEffect, useState} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import {
  ImageBackground,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Img from '../../assets/image';
import InteractiveTextInput from 'react-native-text-input-interactive';
import {actions as authActions} from '../../store/auth-store';
import {types} from '../../store/auth-store';

const {width: ScreenWidth} = Dimensions.get('screen');

export const List = ({navigation}) => {
  const authStatus = useSelector(state => state.authStore.authStatus);
  console.log('authStatus-splash', authStatus);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Header = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 32,
          paddingHorizontal: 32,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image style={{}} resizeMode={'contain'} source={Img.back}></Image>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#8C746A', fontSize: 24}}>Menu</Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        marginTop: 32,
      }}>
      {Header()}
    </View>
  );
};
