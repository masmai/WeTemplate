import React from 'react';
import {
  StyleSheet, Text,
  TextInput, View,TouchableOpacity,
  Button, ImageEditor,
} from 'react-native';
import firebaseSvc from '../FirebaseSvc';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
class CreateAccount extends React.Component {
  static navigationOptions = {
    title: 'Scv Chatter',
  };

  state = {
    name: 'Alex B',
    email: 'test3@gmail.com',
    password: 'test123',
    avatar: '',
  };

  onPressCreate = async () => {
    console.log('create account... email:' + this.state.email);
    try {
      const user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        avatar: this.state.avatar,
      };
      await firebaseSvc.createAccount(user);
    } catch ({ message }) {
      console.log('create account failed. catch error:' + message);
    }
  };

  onChangeTextEmail = email => this.setState({ email });
  onChangeTextPassword = password => this.setState({ password });
  onChangeTextName = name => this.setState({ name });

  

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
        <Text style={styles.title}>Name:</Text>
        <TextInput
          style={styles.nameInput}
          onChangeText={this.onChangeTextName}
          value={this.state.name}
        />
        
        <View style={{ flex:1, flexDirection: 'row', marginTop: heightPercentageToDP(10) }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              title="Login 2"
              style={styles.primaryButtonText}
              onPress={this.onPressCreate}
            ><Text style={{ textAlign: 'center', justifyContent: 'center' }}>Create Account</Text>
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

export default CreateAccount;
