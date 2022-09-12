import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, ImageBackground, TouchableOpacity } from 'react-native';

export class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'User',       //Default Name
      color: '#B9C6AE'    //Default Color
    }
  }

  render() {
    return(
      <View style={styles.container} >
        <ImageBackground
          source={require('../assets/Background-Image.png')}
          style={styles.image}
        >
          <Text style={{flex: 2, marginTop: '20%', fontSize: 45, fontWeight: 'bold', color: '#ffffff'}}>Chat App</Text>

          <View style={styles.box}>
            <TextInput
              style={styles.name}
              onChangeText={(text) => this.setState({name: text})}
              value={this.state.text}
              placeholder='Your Name'
            />

            <Text style={{fontSize: 16, color: '#757083'}}>Choose Background Color:</Text>
            <View style={styles.colors}>
              <TouchableOpacity
                style={styles.color1}
                onPress={() => this.setState({ color: '#090C08' })}
              />
              <TouchableOpacity
                style={styles.color2}
                onPress={() => this.setState({ color: '#474056' })}
              />
              <TouchableOpacity
                style={styles.color3}
                onPress={() => this.setState({ color: '#8A95A5' })}
              />
              <TouchableOpacity
                style={styles.color4}
                onPress={() => this.setState({ color: '#B9C6AE' })}
              />
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Chat', { name: this.state.name, color: this.state.color })}
            >
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>Start Chatting</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    resizeMode: 'cover',
    alignItems: 'center'
  },
  box: {
    backgroundColor: '#ffffff',
    width: '88%',
    height: '44%',
    marginBottom: '6%',
    paddingTop: '6%',
    paddingBottom: '6%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    width: '88%',
    height: 50,
    padding: 10,
    borderWidth: 1,
    fontSize: 16,
    color: '#757083'
  },
  colors: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  color1: {
    width: 50,
    height: 50,
    backgroundColor: '#090C08',
    borderRadius: 25,
  },
  color2: {
    width: 50,
    height: 50,
    backgroundColor: '#474056',
    borderRadius: 25,
  },
  color3: {
    width: 50,
    height: 50,
    backgroundColor: '#8A95A5',
    borderRadius: 25,
  },
  color4: {
    width: 50,
    height: 50,
    backgroundColor: '#B9C6AE',
    borderRadius: 25,
  },
  button: {
    backgroundColor: '#757083',
    height: 50,
    width: '88%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
