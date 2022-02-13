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

export const Login = ({navigation}) => {
  const authStatus = useSelector(state => state.authStore.authStatus);
  console.log('authStatus-splash', authStatus);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (authStatus) {
      navigation.navigate('ChooseMachine');
    }
  }, [authStatus]);

  const login = () => {
    if (email !== '' && password !== '') {
      dispatch({type: types.LOGIN, payload: true});
    }
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
          <Text style={{color: '#8C746A', fontSize: 24}}>Login</Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        marginTop: 32,
        padding: 32,
      }}>
      {Header()}
      <View style={{marginTop: 48, alignItems: 'center'}}>
        <Text style={{color: '#8C746A', fontSize: 32}}>Welcome back!</Text>
      </View>
      <View style={{marginTop: 32}}>
        <InteractiveTextInput
          placeholder="Email"
          secureTextEntry={false}
          enableIcon
          textInputStyle={{width: ScreenWidth * 0.7}}
          //   iconImageSource={require('./assets/visibility-button.png')}
          onIconPress={() => {}}
          onTextInput={text => {
            setEmail(text);
          }}
        />
      </View>
      <View style={{marginTop: 32}}>
        <InteractiveTextInput
          placeholder="Password"
          secureTextEntry
          enableIcon
          textInputStyle={{width: ScreenWidth * 0.7}}
          //   iconImageSource={require('./assets/visibility-button.png')}
          onIconPress={() => {}}
          onTextInput={text => {
            setPassword(text);
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row-reverse',
          marginTop: 16,
        }}>
        <Text style={{color: '#8C746A', fontSize: 12}}>Forgot Password?</Text>
      </View>
      <TouchableOpacity
        onPress={login}
        style={{
          alignItems: 'center',
          marginTop: 16,
          borderRadius: 12,
          marginTop: 32,
        }}>
        <Image style={{}} resizeMode={'contain'} source={Img.lbtn}></Image>
      </TouchableOpacity>

      <View
        style={{
          marginTop: 16,
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: '#8C746A', fontSize: 12}}>Register </Text>
          <Text style={{color: '#8C746A', fontSize: 12}}>
            {' '}
            Don't have an account?
          </Text>
        </View>
      </View>
    </View>
  );
};
