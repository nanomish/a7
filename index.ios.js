/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import CookieManager from 'react-native-cookies';
import LoginScreen from './IOSComponents/LoginScreen';
import MainView from './IOSComponents/MainView';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import AuthService from './IOSComponents/AuthService';

export default class a7 extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false, 
      loadedCookie: false
    };
  }

  render() {
    console.log('########### Render ########################');
    console.log('########### Render, AuthService');
    return (
      <View style={styles.container}>
        {this.state.loggedIn ? this.showCurrentView() : <LoginScreen/>}
      </View>
    );
  }
/** this method should check local storage for last 
 * view which was used and try to show it, 
 * if not then show list */
  showCurrentView() {
    return <MainView/>;
  }

  componentWillMount() {
      //TODO: create one file with constants
      console.log('###################################################### index.ios, componentWillMount');
      this.state.loggedIn = this.isUserLoggedIn();
  }

  isUserLoggedIn() {
    return true;
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
    margin: 30,

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
    textAlign: 'center',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 5,
    width: '80%',
  }
});

AppRegistry.registerComponent('a7', () => a7);