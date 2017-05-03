import {
  ListView, 
  ScrollView, 
  StyleSheet, 
  TouchableHighlight, 
  Text, 
  View
} from 'react-native';
import React, {Component} from 'react';
import {Actions} from 'react-native-redux-router';

import * as apis from '../api';
import {Catalog} from '../../data/Catalog';
import {TimeUtils} from '../../utils/times';

export default class CatalogListView extends Component {
    constructor(props) {
      super(props);
      this.catalog = new Catalog();
      this.timeUtils = new TimeUtils();
      this.dataSource = new ListView.DataSource(
        {
            rowHasChanged: (r1, r2) => r1.id !== r2.id
        });
      apis.getCatalogAsync()
          .then(catalog => {
              this.catalog.set(catalog);
              this._updateState();
              console.log('CatalogListView - constructor, after async')
          });
  
      this.state = {
        dataSource: this.dataSource.cloneWithRows([]),
        catalogUpdateTime: new Date(),
      };
    
    }

    _updateState() {
        var catalog = this.catalog.get();
        this.setState({
            catalogLength:  catalog.length,
            dataSource: this.dataSource.cloneWithRows(catalog),
            catalogUpdateTime: this.catalog.getUpdateTime()
        });
    }

    componentDidUpdate() {
        if (this.timeUtils._timeCompare(this.catalog.getUpdateTime(), this.state.catalogUpdateTime) < 0) {
            apis.getCatalogAsync()
                .then(catalog => {
                    this.catalog.set(catalog);
                    this._updateState();
                });
        }
    }

    componentDidMount() {
      this._updateState();
    }

    renderRow(rowData) {
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
      Actions.items({items: rowData.list_items, title: 'Items of ' + rowData.title, listId: rowData.id});
    }

    render() {
        return (
          <View style={styles.main}>
              <Text>Catalog of lists ({this.state.catalogLength})</Text>
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
    marginTop: 10,
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
