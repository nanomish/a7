import {
    ListView, 
    ScrollView, 
    StyleSheet, 
    TouchableHighlight, 
    Text, 
    View
} from 'react-native';
import {Actions} from 'react-native-redux-router';
import React, {Component} from 'react';
import * as apis from './api'; 
import _ from 'lodash';

export default class ItemsListView extends Component {
     constructor(props) {
      super(props);
      var dataSource = new ListView.DataSource(
        {rowHasChanged: (r1, r2) => r1.id !== r2.id});
      //var items = apis.getItems(this.props.items);
      var listItems = apis.getListItems(this.props.items);
      this.state = {
        dataSource: dataSource.cloneWithRows(listItems)
      };
    }

    openAddNewItemView() {
      console.log('openAddNewItemView, props:', this.props)
      //Actions.newItem({...this.props});
    }

    render() {
        console.log('## ItemsListView render, props', this.props);
        return (
          <View style={styles.main}>
              <Text>List items and info</Text>
              <ScrollView>
                  <ListView
                      dataSource={this.state.dataSource}
                      enableEmptySections={true}
                      renderRow={this.renderRow.bind(this)}/>
              </ScrollView>    
              <View style={styles.navigator}>
                <TouchableHighlight style={styles.button} onPress={() => Actions.newItem({listId: this.props.listId})}
                          underlayColor='#99d9f4'>
                          <Text style={styles.buttonText}> + item</Text>
                </TouchableHighlight>
              </View>
          </View>);
    }

    rowPressed(rowData) {
        console.log('item row pressed:', rowData)
    }

    renderRow(rowData){
        console.log('listItems renderRow:', rowData)
      return (
            <TouchableHighlight onPress={() => this.rowPressed(rowData)}
            underlayColor='#dddddd'>
            <View>
            <View style={styles.rowContainer}>
                <View  style={styles.textContainer}>                
                <Text style={styles.title}
                        numberOfLines={1}>{rowData.title}</Text>
                <Text style={styles.url}
                        numberOfLines={1}>{rowData.url}</Text>        
                </View>
            </View>
            <View style={styles.separator}/>
            </View>
        </TouchableHighlight>
        )
    }
}

var styles = StyleSheet.create({
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    width: 100,
    marginBottom: 10,
    marginLeft: 2,
    marginRight: 2,
    alignSelf: 'center',
    justifyContent: 'center'
    },
  main: {
    flex: 1,
    //alignItems: 'stretch',
    marginTop: 30,
    padding: 20,
    //  flexDirection: 'column',
    },
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  navigator: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 5,
    alignSelf: 'flex-start'
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