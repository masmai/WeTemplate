
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
import { TouchableOpacity } from "react-native-gesture-handler";


class ListOfExample extends Component {
    constructor(props){
        super();
        this.state = {
          message: 'hello world', 
        }
      }
      
    
      componentDidMount() {
        fetch('https://api.mydomain.com')
          .then(response => response.json())
          .then(data => this.setState({ message: data.message })); // data.message = 'updated message'
      }
      
      render(){
        return(
          <View>
            {/* 'updated message' will be rendered as soon as fetch return data */}
            <Text>{this.state.message}</Text>
            <TouchableOpacity style={{height:30,backgroundColor:'pink'}} onPress={()=>{this.props.navigation.navigate("MountingState",{title:'fromSetting'})}}>
                <Text>
                    Class Component
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height:30,backgroundColor:'green',marginVertical:10}} onPress={()=>{this.props.navigation.navigate("HookScreen",{title:'Updating State'})}}>
                <Text>
                    Hook Function
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height:30,backgroundColor:'green',marginVertical:10}} onPress={()=>{this.props.navigation.navigate("Users",{title:'Updating State'})}}>
                <Text>
                Users Class
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height:30,backgroundColor:'green',marginVertical:10}} onPress={()=>{this.props.navigation.navigate("UsersHook",{title:'Updating State'})}}>
                <Text>
                    Users Hook
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height:30,backgroundColor:'green',marginVertical:10}} onPress={()=>{this.props.navigation.navigate("LineChartScreen",{title:''})}}>
                <Text>
                    Line Chart
                </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={{height:30,backgroundColor:'blue'}} onPress={()=>{this.props.navigation.navigate("MountingState",{title:'UnMounting State'})}}>
                <Text>
                    UnMounting State
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height:30,backgroundColor:'pink'}} onPress={()=>{this.props.navigation.navigate("MountingState",{title:'Error Handling State'})}}>
                <Text>
                    Error Handling State
                </Text>
            </TouchableOpacity> */}
          </View>
        )
      }
}
export  { ListOfExample };