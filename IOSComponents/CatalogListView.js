import {
  ListView, 
  ScrollView, 
  StyleSheet, 
  TouchableHighlight, 
  Text, 
  View
} from 'react-native';
import React, {Component} from 'react';
var {Actions} = require('react-native-redux-router');
import ItemsListView from './ItemsListView';
import * as apis from './api';

export default class CatalogListView extends Component {
    constructor(props) {
      super(props);
      var dataSource = new ListView.DataSource(
        {rowHasChanged: (r1, r2) => r1.id !== r2.id});
      var catalog = apis.getCatalog();
  
      this.state = {
        dataSource: dataSource.cloneWithRows(catalog)
      };

    }

    renderRow(rowData) {
        console.log('## CatalogListView renderRow')
        return (
        <TouchableHighlight onPress={() => this.rowPressed(rowData)}
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

    rowPressed(rowData) {
      var str = rowData.items && rowData.items.length > 0 && rowData.items[0] && apis.getItem(rowData.items[0]).title || rowData.lister_url;
      console.log('rowPressed, rowData.items:', rowData.items);
      console.log('rowPressed, apis.getItem:', apis.getItem(rowData.items[0].id));
      //alert('row pressed 3: ' + str);
      
      Actions.items({items: rowData.items, title: 'Items of catalog', })
    }

    render() {
        console.log('## CatalogListView render');
        console.log('## CatalogListView render, props', this.props);
        return (
        <View style={styles.main}>
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
  main: {
    flex: 1,
    justifyContent: 'space-between',
  },
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
