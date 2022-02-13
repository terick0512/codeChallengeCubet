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

const {width: ScreenWidth} = Dimensions.get('screen');

export const List = ({navigation}) => {
  const [data, setData] = useState([]);
  const drinks = useSelector(state => state.authStore.drinks);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    dataFetcher();
  }, []);

  const dataFetcher = () => {
    axios
      .get(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=coffee',
        {},
      )
      .then(
        response => {
          console.log(JSON.stringify(response));
          //   setData(response?.data?.drinks ?? []);
          dispatch({
            type: types.UPDATE_DRINKS,
            payload: response?.data?.drinks ?? [],
          });
        },
        error => {
          console.log(error);
        },
      );
  };

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
      <ScrollView>
        <View style={{flex: 1, paddingHorizontal: 32, marginTop: 32}}>
          {(drinks || []).map(item => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Customize', {id: item.idDrink});
                }}
                key={item.idDrink}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 8,
                }}>
                <Image
                  style={{width: 50, height: 50}}
                  resizeMode="contain"
                  source={{uri: item?.strDrinkThumb}}></Image>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: '#8C746A', fontSize: 14}}>
                    {item?.strDrink}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
