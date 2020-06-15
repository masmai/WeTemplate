/*This is an Example of Animated Splash Screen*/
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import SlideLeftText from './SlideLeftText'
import SlideRightText from './SlideRightText';
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
        this.setState({ align: 'flex-start' }, function () {
          this.setState({
            alignsecond: true,
          });
        }),
      3000
    );
  }

  // render() {
  //   return (
  //     <View
  //       style={{
  //         flex: 1,
  //         alignItems: 'center',
  //         flexDirection: 'row',
  //         justifyContent: this.state.align,
  //         marginHorizontal: 40,
  //       }}>
  //       <Image
  //         source={{
  //           uri:
  //             'https://raw.githubusercontent.com/AboutReact/sampleresource/master/react_logo.png',
  //         }}
  //         style={{ width: 100, height: 100 }}
  //       />
  //       {!this.state.alignsecond ? null : (
  //         <View style={{ margin: 10 }}>
  //           <Text
  //             style={{ color: '#114998', fontSize: 30, fontWeight: 'bold' }}>
  //             About React
  //           </Text>
  //         </View>
  //       )}
  //     </View>
  //   );

  // }
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    //this.animation.play(30, 120);

  }
  render() {

    return <View style={{ flex: 1 ,backgroundColor:'white'}}>
      <View style={{flex:1, margin: wp(2), justifyContent: 'flex-end', alignItems: 'center' }}>
        {/* <Text style={{fontSize:72,color:'#35d0ba'}}>Weable</Text> */}
        <SlideRightText textData="Weable" color="#35d0ba"></SlideRightText>
      </View>
      {/* <View style={{ flex:2,justifyContent: 'center', alignItems: 'center', width: wp('40%'), height: wp('40%') ,backgroundColor:'pink'}}>
</View> */}
        <LottieView ref={animation => {
          this.animation = animation;
        }}
          source={require('../assets/lottiefiles/17750-developer.json')} autoPlay loop
          style={{flex:4,width:wp(40),height:hp(40),alignSelf:'center',alignItems:'center'}}
        />
        <View style={{flex:1, margin: wp(2), justifyContent: 'flex-start', alignItems: 'center' }}>
        {/* <Text style={{fontSize:48,color:'#35d0ba'}}>We can do.</Text> */}
        <SlideLeftText textData="We can do." color="#35d0ba"></SlideLeftText>
      </View>
     </View>;
  }
}