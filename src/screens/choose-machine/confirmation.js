import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import {connect} from 'react-redux';
import Img from '../../assets/image';

class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          position: 'absolute',
          flex: 1,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(52, 52, 52, 0.5)',
        }}>
        <View style={{flex: 1}} />
        <View
          style={{
            maxHeight: 500,
            borderTopEndRadius: 16,
            borderTopStartRadius: 16,
            backgroundColor: '#ffffff',
            padding: 16,
            paddingBottom: 24,
          }}>
          <View>
            <Image
              style={{}}
              resizeMode={'contain'}
              source={Img.locname}></Image>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigator();
            }}
            style={{
              alignItems: 'center',
              marginTop: 16,
              borderRadius: 12,
              marginTop: 32,
            }}>
            <Image
              style={{}}
              resizeMode={'contain'}
              source={Img.continue}></Image>
          </TouchableOpacity>
          <View style={{marginTop: 32}}>
            <Image
              style={{}}
              resizeMode={'contain'}
              source={Img.address}></Image>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  //   isRTL: state.authService.isRTL,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
