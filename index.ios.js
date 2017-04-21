/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//https://github.com/aksonov/react-native-redux-router

import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import CookieManager from 'react-native-cookies';
var {Router, routerReducer, Route, Container, Animations, Schema} = require('react-native-redux-router');
import {
  AppRegistry,
  Button,
  NavigatorIOS,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import AuthService from './IOSComponents/AuthService';
import LoginScreen from './IOSComponents/LoginScreen';
import MainView from './IOSComponents/MainView';
import CatalogListView from './IOSComponents/CatalogListView';
import NewCatalogView from './IOSComponents/NewCatalogView';
import ItemsListView from './IOSComponents/ItemsListView';

let store = createStore(combineReducers({routerReducer}));

export class InitialComponent extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false, 
      loadedCookie: false
    };
  }

  /** this method should check local storage for last 
 * view which was used and try to show it, 
 * if not then show list */
  showCurrentView() {
    console.log('###################################################### index.ios, showing mainView');
    return <MainView/>;
  }

  componentWillMount() {
      //TODO: create one file with constants
      console.log('###################################################### index.ios, componentWillMount');
      this.state.loggedIn = this.isUserLoggedIn();
  }

  isUserLoggedIn() {
    return false;
  }

  render() {
    console.log('########### InitialComponent - Render ########################');
    return (
      /*<View style={styles.container}>
        {this.state.loggedIn ? this.showCurrentView() : <LoginScreen/>}
      </View>*/
          <View style={styles.container}>
                <Router>
                    {/*<Schema name="modal" sceneConfig={Animations.FlatFloatFromBottom} navBar={NavBarModal}/>
                    <Schema name="default" sceneConfig={Animations.FlatFloatFromRight} navBar={NavBar}/>
                    <Schema name="withoutAnimation" navBar={NavBar}/>
                    <Schema name="tab" navBar={NavBar}/>*/}

                    <Route name="main" component={MainView} initial={true} hideNavBar={true} title="Main"/>
                    <Route name="catalog" component={CatalogListView} title="Catalog"/>
                    <Route name="newCatalog" component={NewCatalogView} title="New Catalog" type="replace"/>
                    <Route name="login" component={LoginScreen} schema="modal"/>
                    <Route name="login2" component={LoginScreen} schema="withoutAnimation"/>
                    <Route name="items" component={ItemsListView}/>
                    <Route name="main2" component={MainView} schema="popup"/>
                </Router>
            </View>
    );
  }  
}

export default class a7 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('########### Render ########################');
    console.log('########### Render, this.props:', this.props);
    return (
       <Provider store={store}>
           <InitialComponent />
       </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
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
