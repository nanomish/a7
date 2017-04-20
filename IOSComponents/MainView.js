import React, { Component } from 'react';
import CookieManager from 'react-native-cookies';
import CatalogListView from './CatalogListView';
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
    constructor(props) {
        super(props);
    }
    render() {
        console.log('### MainView render, this.props:', this.props);
            /*return <View style={styles.main}>
                <Text>Main View Screen asdadasfsfsdfsdfsdf1</Text>
            </View>*/

        return (
            <View style={styles.main}>
                <View style={styles.mainScreen}>
                    <CatalogListView {...this.props}/>
            
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
        flex: 1,
        alignItems: 'stretch',
        marginTop: 30,
        padding: 20,
        //  flexDirection: 'column',
    },
    mainScreen: {
        flex: 3,
        justifyContent: 'flex-end',
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