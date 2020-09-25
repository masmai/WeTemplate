
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions
} from "react-native";


class MountingState extends Component {
    constructor(props){
      super(props);
        this.state = {
          message: 'hello world', 
        }
      }
      
      static getDerivedStateFromProps(props, state) {
        console.warn('props',props,'state',state)
        
        return {
           message: props.route.params.title,
        }
      }
      componentDidMount() {
        // fetch('https://api.mydomain.com')
        //   .then(response => response.json())
        //   .then(data => this.setState({ message: data.message })); // data.message = 'updated message'
      }
      
      render(){
        return(
          <View>
            {/* 'updated message' will be rendered as soon as fetch return data */}
            <Text>{this.state.message}</Text>
            
          </View>
        )
      }
}
export  {MountingState};