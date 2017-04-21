import React, {Component} from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

export default class NewCatalogView extends Component {
    render() {
        return (<View style={styles.main}><Text>New catalog</Text></View>);
    }
}

var styles = StyleSheet.create({
    main: {
        flex: 1,
    },
});