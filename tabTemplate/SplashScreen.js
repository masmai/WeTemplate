/*This is an Example of Animated Splash Screen*/
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class SplashScreen extends Component {
  constructor() {
    super();
    this.state = {
      animating: false,
      align: 'center',
      alignsecond: false,
    };
    setTimeout(
      () =>
        this.setState({ align: 'flex-start' }, function() {
          this.setState({
            alignsecond: true,
          });
        }),
      3000
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: this.state.align,
          marginHorizontal: 40,
        }}>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/react_logo.png',
          }}
          style={{ width: 100, height: 100 }}
        />
        {!this.state.alignsecond ? null : (
          <View style={{ margin: 10 }}>
            <Text
              style={{ color: '#114998', fontSize: 30, fontWeight: 'bold' }}>
              About React
            </Text>
          </View>
        )}
      </View>
    );
  }
}