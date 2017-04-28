//@flow
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
import {Actions} from 'react-native-redux-router';
import React, {Component} from 'react';
import * as apis from './api'; 
import _ from 'lodash';

/**
 * Item includes following properties:
 * name, amount, created_by, date_created, date_updated, pictures, status
 */

export default class AddNewItemView extends Component {
     constructor(props) {
      super(props);
      this.state = {text: '', amount: 0};
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
        console.log('keyboard will show');
    }

    _keyboardDidHide() {
      console.log('Keyboard Hidden');
    }

    onSubmitForm() {
      Keyboard.dismiss();
      var id = apis.createNewItem(this.props.listId, {
          title: this.state.title,
          amount: this.state.amount,
        });
        console.log('AddNewItemView - onSubmitForm - this.props:', this.props);
      //Actions.items({items: [1], title: this.state.name});
    }

    onAddPicture() {
        console.log('camera is only available on real device');
    }

    render() {
        return (
          <View style={styles.main}>
              <TextInput
                style={{height: 40, borderWidth: 1, borderRadius: 8,  padding: 6}}
                placeholder="item description"
                onChangeText={title => this.setState({title})}
                //onSubmitEditing={this.onSubmit.bind(this)}
                autoCapitalize="none"
                autoFocus={true}
                autoCorrect={false}
                keyboardType="default"
                returnKeyType="next"
                />
              <TextInput
                style={{height: 40, marginTop:3, borderWidth: 1, borderRadius: 8,  padding: 6}}
                placeholder="amount"
                onChangeText={amount => this.setState({amount})}
                //onSubmitEditing={this.onSubmit.bind(this)}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
                returnKeyType="done"
                />
               
              <View style={{flex:1, height: 140, flexDirection: 'column', alignSelf: 'stretch', marginTop: 30}}>
                  <TouchableHighlight underlayColor="#fffeee"
                    style={styles.button}
                    onPress={() => this.onSubmitForm()}>
                        <Text style={{fontSize: 23}}>Save</Text>
                  </TouchableHighlight>
              </View>
          </View>);
    }
}

var styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'stretch',
        marginTop: 30,
        padding: 20,
        //height: '80%'
        flexDirection: 'column',
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
    },
    pictureButton: {
        alignSelf: 'center',
        borderRadius: 18,
        backgroundColor: "#EE4724",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        //height: 40,
        width: 140,
        padding: 8, 
    },
    button: {
        height: 36,
        //flex: 3,
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