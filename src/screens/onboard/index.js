import React from 'react';
import {ImageBackground, ScrollView, View, Image, Text} from 'react-native';
import Img from '../../assets/image';
export const Dashboard = () => {
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
      <View style={{marginTop: 32}}>
        <Text style={{color: '#8C746A', fontSize: 44}}>Get the best</Text>
        <Text style={{color: '#8C746A', fontSize: 44}}>coffee in town!</Text>
      </View>
      <View style={{}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 48,
            justifyContent: 'space-between',
          }}>
          <View style={{}}>
            <Image
              style={{}}
              resizeMode={'contain'}
              source={Img.register}></Image>
          </View>
          <View style={{}}>
            <Image style={{}} resizeMode={'contain'} source={Img.login}></Image>
          </View>
        </View>
        <View style={{alignItems: 'center', marginTop: 16}}>
          <Image style={{}} resizeMode={'contain'} source={Img.btn}></Image>
        </View>
      </View>
    </View>
  );
};
