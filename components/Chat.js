import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  componentDidMount(){
    //Name choosen
    let name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });
  }

  alertMyText(input = []) {
    Alert.alert(input.text);
  }

  render() {
    let color = this.props.route.params.color;  //Background Color

    return(
      <View style={{flex:1, alignItems: 'center', justifyContent:'center', backgroundColor: color}}>
        <TextInput
          style={styles.message}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder='Type here...'
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {this.alertMyText({text: this.state.text})}}
        >
          <Text style={{fontSize: 16, color: 'black'}}>Enter</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  message: {
    height: 40,
    width: '88%',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#E6E6E6'
  },
  button: {
    backgroundColor: '#CCCCCC',
    height: 50,
    width: '88%',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
