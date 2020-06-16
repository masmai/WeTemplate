import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const SlideLeftText = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: widthPercentageToDP(72),
        duration: 2000,
      }
    ).start();
  }, [])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        //opacity: fadeAnim,         // Bind opacity to animated value
        marginLeft:fadeAnim
      }}
    >
      {props.children}
    </Animated.View>
  );
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default (props) => {
  return (
    //<View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start', height: 50, backgroundColor: 'powderblue'}}>
      <SlideLeftText style={{width:widthPercentageToDP(100)}}>
        <Text style={{fontSize: 48, textAlign: 'left' ,color:props.color }}>{props.textData}</Text>
      </SlideLeftText>
      //</View>
  )
}
