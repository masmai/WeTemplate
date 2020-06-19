import React from 'react';
import {
  StyleSheet, Text,
  TextInput, TouchableOpacity, View,
  Button, ImageEditor,
} from 'react-native';
import firebaseSvc from '../FirebaseSvc';
// import firebase from '@react-native-firebase/app';
// import { auth, initializeApp, storage } from 'firebase';
import uuid from 'uuid';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

class Login extends React.Component {
  static navigationOptions = {
    title: 'Scv Chatter',
  };
  constructor(props){
    super(props);
    props.navigation.setOptions({ title: "Messenger" })
  }
 
  state = {
    name: 'Alex B',
    email: 'test3@gmail.com',
    password: 'test123',
    avatar: '',
    roomName: 'Messages'
  };

  // using Fire.js
  onPressLogin = async () => {
    console.log('pressing login... email:' + this.state.email);
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      avatar: this.state.avatar,
      roomName: this.state.roomName
    };

    const response = firebaseSvc.login(
      user,
      this.loginSuccess,
      this.loginFailed
    );
  };

  loginSuccess = () => {
    console.log('login successful, navigate to chat.');
    this.props.navigation.navigate('Chat', {
      name: this.state.name,
      email: this.state.email,
      avatar: this.state.avatar,
      roomName: this.state.roomName
    });
  };
  loginFailed = () => {
    console.log('login failed ***');
    alert('Login failure. Please tried again.');
  };


  onChangeTextEmail = email => this.setState({ email });
  onChangeTextPassword = password => this.setState({ password });
  onChangeRoom = roomName => this.setState({ roomName });

  render() {
    return (
      <View>
        <Text style={styles.title}>Email:</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="test3@gmail.com"
          onChangeText={this.onChangeTextEmail}
          value={this.state.email}
        />
        <Text style={styles.title}>Password:</Text>
        <TextInput
          style={styles.nameInput}
          onChangeText={this.onChangeTextPassword}
          value={this.state.password}
        />
        <Text style={styles.title}>RoomID:</Text>
        <TextInput
          style={styles.nameInput}
          onChangeText={this.onChangeRoom}
          value={this.state.roomName}
        />
        <View style={{ flex:1, flexDirection: 'row', marginTop: heightPercentageToDP(10) }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              title="Login 2"
              style={styles.primaryButtonText}
              onPress={this.onPressLogin}
            ><Text style={{ textAlign: 'center', justifyContent: 'center' }}>Login</Text></TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              title="Go to create new account"
              style={styles.buttonText}
              onPress={() => this.props.navigation.navigate("CreateAccount")}
            ><Text style={{ textAlign: 'center', justifyContent: 'center' }}>SignUp</Text>
            </TouchableOpacity>
          </View>



        </View>
      </View>
    );
  }
}

const offset = heightPercentageToDP(2);
const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  nameInput: {
    //height: offset * 2,
    margin: heightPercentageToDP(1),
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderBottomWidth: 0.4,
    //fontSize: offset,
  },
  primaryButtonText: {
    marginHorizontal: offset,
    fontSize: 42,
    marginTop: heightPercentageToDP(3),
    backgroundColor: '#35d0ba',
    height: heightPercentageToDP(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25

  },
  buttonText: {
    marginHorizontal: offset,
    fontSize: 42,
    marginTop: heightPercentageToDP(3),
    backgroundColor: 'gray',
    height: heightPercentageToDP(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25

  }
});

export default Login;