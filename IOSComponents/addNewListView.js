import {
    Keyboard,
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

export default class AddNewListView extends Component {
     constructor(props) {
      super(props);
      this.state = {text: ''};
    }

    componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this._keyboardWillShow);
  }

    componentWillUnmount() {
      this.keyboardDidShowListener.remove();
      this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow() {
      //alert('Keyboard Shown');
      console.log('keyboard did show')
    }

    _keyboardWillShow() {
        console.log('keyboard will show')
    }

    _keyboardDidHide() {
      console.log('Keyboard Hidden');
    }

    onSubmit() {
      Keyboard.dismiss();
      apis.createNewList({title: this.state.text});
    }

    render() {
        console.log('## AddNewListView render, props', this.props);
        return (
          <View style={styles.main}>
              <TextInput
                style={{height: 40, borderWidth: 1, borderRadius: 8,  padding: 6}}
                placeholder="list name"
                onChangeText={(text) => this.setState({text})}
                onSubmitEditing={this.onSubmit.bind(this)}
                autoCapitalize="none"
                autoFocus={true}
                autoCorrect={false}
                keyboardType="default"
                returnKeyType="go"
                />
          </View>);
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
    thumb: 
    {
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