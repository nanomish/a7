import {
    ListView, 
    ScrollView, 
    StyleSheet, 
    TouchableHighlight, 
    Text, 
    TextInput,
    View
} from 'react-native';
import React, {Component} from 'react';
import * as apis from './api'; 
import _ from 'lodash';

export default class ItemsListView extends Component {
     constructor(props) {
      super(props);
      this.state = {text: ''};
    }

    render() {
        console.log('## addNewListView render, props', this.props);
        return (
          <View style={styles.main}>
              {/*<Text>List name</Text>*/}
              <TextInput
                style={{height: 40}}
                placeholder="name"
                onChangeText={(text) => this.setState({text})}
                />
          </View>);
    }

    rowPressed(rowData) {
        console.log('item row pressed:', rowData)
    }

    renderRow(rowData){
        console.log('ItemsListView, renderRow, rowData:', rowData)
    
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