/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// Router taken from here: https://github.com/aksonov/react-native-redux-router

import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import CookieManager from 'react-native-cookies';
import {Router, routerReducer, Route, Container, Animations, Schema} from 'react-native-redux-router';
import {
  AppRegistry,
  Button,
  NavigatorIOS,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import {NavBar, NavBarModal} from './components/NavBar';
import LoginScreen from './components/LoginScreen';
import MainView from './components/MainView';
import CatalogListView from './components/Lists/CatalogListView';
import ItemsListView from './components/Items/ItemsListView';
import AddNewListView from './components/AddNewListView';
import AddNewItemView from './components/AddNewItemView';

let store = createStore(combineReducers({routerReducer}));

export class InitialComponent extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false, 
      loadedCookie: false
    };
  }

  render() {
    console.log('########### InitialComponent - Render ########################');
    return (
        <View style={styles.container}>
          <View style={{position:'absolute',left:0,right:0,top:0,bottom:0,backgroundColor:'#F5FCFF'}}/>
              <Router>
                  <Schema name="modal" sceneConfig={Animations.FlatFloatFromBottom} navBar={NavBarModal}/>
                  <Schema name="default" sceneConfig={Animations.FlatFloatFromRight} navBar={NavBar}/>
                  <Schema name="withoutAnimation" navBar={NavBar}/>
                  <Schema name="tab" navBar={NavBar}/>

                  <Route name="main" component={MainView} title="Main" hideNavBar={true}/>
                  <Route name="main2" component={MainView} initial={true} title="Main2" schema="popup"/>

                  <Route name="catalog" component={CatalogListView} title="Catalog"/>
                  <Route name="newCatalog" component={AddNewListView} title=" + list" schema="modal" />

                  <Route name="items" component={ItemsListView} schema="withoutAnimation" type="push" title="Items"/>
                  <Route name="itemsNew" component={ItemsListView} type="replace" title="Items"/>
                  <Route name="newItem" component={AddNewItemView} schema="modal" title="Add item"/>

                  <Route name="login" component={LoginScreen} schema="modal"/>
                  <Route name="login2" component={LoginScreen} schema="withoutAnimation"/>
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
    console.log('index.ios: ########### Render a7 ########################');
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
