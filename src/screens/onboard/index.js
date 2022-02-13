import React from 'react';
import {
  ImageBackground,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import Img from '../../assets/image';
import {useSelector} from 'react-redux';
export const Dashboard = ({navigation}) => {
  const authStatus = useSelector(state => state.authStore.authStatus);
  console.log('authStatus-splash', authStatus);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        marginTop: 32,
      }}>
      <Image
        style={{width: '100%'}}
        resizeMode={'cover'}
        source={Img.artwork}></Image>
      <View style={{marginTop: 48, alignItems: 'center'}}>
        <Text style={{color: '#8C746A', fontSize: 32}}>Get the best</Text>
        <Text style={{color: '#8C746A', fontSize: 32}}>coffee in town!</Text>
      </View>
      <View style={{marginTop: 72}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{}}>
            <Image
              style={{}}
              resizeMode={'contain'}
              source={Img.register}></Image>
          </View>
          <TouchableOpacity
            style={{}}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Image style={{}} resizeMode={'contain'} source={Img.login}></Image>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', marginTop: 16}}>
          <Image style={{}} resizeMode={'contain'} source={Img.btn}></Image>
        </View>
      </View>
    </View>
  );
};
