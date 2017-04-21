import {
    ListView, 
    ScrollView, 
    StyleSheet, 
    TouchableHighlight, 
    Text, 
    View
} from 'react-native';
import React, {Component} from 'react';
import * as apis from './api'; 
import _ from 'lodash';

export default class ItemsListView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('ItemsListView, this.props:',this.props.items);
        
        return (
            <View style={styles.main}>
                {this.props.items.map(i => this.renderRow(i))}
            </View>
        );
    }

    // render() {
    //     console.log('ItemsListView - render, this.props:', styles.main);
    //     return <View style={styles.main} ><Text>title here</Text></View>;
    // }

    renderRow(itemId) {
        var item = apis.getItem(itemId);
        console.log('ItemsListView, renderRow, item:', item)
    
        return (
            <Text>here {item.title}</Text>
        )
    }
}

var styles = StyleSheet.create({
main: {
        flex: 1,
        //alignItems: 'stretch',
         marginTop: 30,
         padding: 20,
        //  flexDirection: 'column',
    },
});