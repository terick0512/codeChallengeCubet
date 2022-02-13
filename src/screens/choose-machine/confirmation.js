import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {connect} from 'react-redux';

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
          }}></View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  //   isRTL: state.authService.isRTL,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
