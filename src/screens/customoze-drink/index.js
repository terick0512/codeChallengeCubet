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
import axios from 'axios';

const {width} = Dimensions.get('screen');

export const Customize = ({route, navigation}) => {
  const [drink, setDrink] = useState(undefined);
  const {id} = route.params;
  const drinks = useSelector(state => state.authStore.drinks);
  const dispatch = useDispatch();
  console.log('navu', id);

  useEffect(() => {
    setDrink((drinks || []).find(item => item.idDrink === id));
  }, [drinks]);

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
          <Text style={{color: '#8C746A', fontSize: 24}}>Preferences</Text>
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
      <View>
        <Image
          style={{width: '100%', height: width, marginTop: 32}}
          resizeMode="contain"
          source={{uri: drink?.strDrinkThumb}}></Image>
      </View>
      <View style={{alignItems: 'center', marginTop: 48}}>
        <Text>{`drink ID :${id}`}</Text>
      </View>
    </View>
  );
};
