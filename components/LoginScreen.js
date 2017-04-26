import React, { Component } from 'react';
import CookieManager from 'react-native-cookies';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import AuthService from './AuthService';

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {username: '', password: ''};
  }

  onLoginSubmit() {
    console.log('AAAAAAAAA - onLoginSubmit');
  }

  onRegisterSubmit() {
      console.log('XXXXXXXXXX - onRegisterSubmit: ', AuthService.isA);;
      if (this.state.username && this.state.password) {
        isA = true;
      } else {
        console.log('AAAAAAAAA - onRegisterSubmit');
      }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Login Screen:
        </Text>
        <TextInput
          style={styles.inputField}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          placeholder=' username'
          autoCapitalize='none'
        />

        <TextInput
          style={styles.inputField}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          placeholder=' password'
          autoCapitalize='none'
        />

        <Button
        onPress={this.onLoginSubmit.bind(this)}
        title="Go"
        color="#841584"
        />
        <Button
        onPress={this.onRegisterSubmit.bind(this)}
        title="Register"
        color="#841584"
        />
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputField: {
    alignItems: 'center', 
    borderColor: 'gray', 
    borderWidth: 1,
    height: 40, 
    justifyContent: 'center', 
    textAlign: 'left',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 5,
    minWidth: 260,
    width: '80%',
  }
});