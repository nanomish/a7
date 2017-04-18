import React, { Component } from 'react';
import CookieManager from 'react-native-cookies';
import ItemsListView from './ItemsListView';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

export default class MainView extends Component {
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.mainScreen}>
                    <ItemsListView/>
                    {/*<Text >Main View Screen asdadasfsfsdfsdfsdf1</Text>*/}
            
                </View>
                <View style={styles.navigator}>
                    
                    <TouchableHighlight style={styles.button}
                        underlayColor='#99d9f4'>
                        <Text style={styles.buttonText}>New</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button}
                        underlayColor='#99d9f4'>
                        <Text style={styles.buttonText}>Menu#2</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button}
                        underlayColor='#99d9f4'>
                        <Text style={styles.buttonText}>Menu#3</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button}
                        underlayColor='#99d9f4'>
                        <Text style={styles.buttonText}>Log Out</Text>
                    </TouchableHighlight>
                </View>
            </View>);
    }
}

 const styles = {
    main: {
         flexDirection: 'column',
         //width: '99%'
    },
    mainScreen: {
        flex: 3,
        marginTop: 20,
        width: 300
    },
    navigator: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 5,
    },
    
    buttonText: {
        fontSize: 12,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginLeft: 2,
        marginRight: 2,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    }