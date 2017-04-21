import React, { Component } from 'react';
import CatalogListView from './CatalogListView';
import NewCatalogView from './NewCatalogView';
import {
  AppRegistry,
  Button,
  NavigatorIOS,
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
                    {/*<NavigatorIOS
                        style={styles.main}
                        initialRoute={{
                        title: 'InitialComponent title',
                        component: CatalogListView,
                        passProps: {...this.props},
        }}
      />*/}
            
                </View>
                <View style={styles.navigator}>
                    
                    <TouchableHighlight style={styles.button} onPress={() => this.openNewCatalogView()}
                        underlayColor='#99d9f4'>
                        <Text style={styles.buttonText}>+</Text>
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

    openNewCatalogView() {
        this.props.navigator.push({
        component: NewCatalogView,
        title: 'New catalog',
        backButtonTitle: 'Back there',
        passProps: {  }
      });
    }
}

 const styles = StyleSheet.create({
    main: {
        flex: 1,
        //alignItems: 'stretch',
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
        alignSelf: 'flex-start'
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
});