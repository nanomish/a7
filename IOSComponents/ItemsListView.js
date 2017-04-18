import {ListView, ScrollView, StyleSheet, TouchableHighlight, Text, View} from 'react-native';
import React, {Component} from 'react';
import api, {listsData} from './api';

export default class ItemsListView extends Component {
    constructor(props) {
        super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.id !== r2.id});
    this.state = {
      dataSource: dataSource.cloneWithRows(listsData)
    };

    }

    renderRow(rowData) {
        return (
        <TouchableHighlight onPress={() => this.rowPressed(rowData.lister_url)}
            underlayColor='#dddddd'>
            <View>
            <View style={styles.rowContainer}>
                <View  style={styles.textContainer}>                
                <Text style={styles.title}
                        numberOfLines={1}>{rowData.title}</Text>
                <Text style={styles.lister_url}
                        numberOfLines={1}>{rowData.lister_url}</Text>        
                </View>
            </View>
            <View style={styles.separator}/>
            </View>
        </TouchableHighlight>
        );
    }

    rowPressed(url) {
        alert('row pressed: ' + url);
    }

    render() {
        return (
        <View>
            <Text>Some icon or info</Text>
            <ScrollView>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}/>
            </ScrollView>    
        </View>);
    }
}

const styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  lister_url: {
    fontSize: 13,
    color: '#e0e0e0'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
});
