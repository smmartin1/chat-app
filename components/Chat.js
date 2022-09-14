import React, { Component } from 'react';
import { StyleSheet, View, Platform, KeyboardAvoidingView } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';

export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      messages: [],
    }
  }

  componentDidMount(){
    //Name choosen
    let name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });

    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello, ' + name,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 2,
          text: name + ' has entered the chat',
          createdAt: new Date(),
          system: true
        }
      ],
    })
  }

  onSend(messages = []) {
   this.setState(previousState => ({
     messages: GiftedChat.append(previousState.messages, messages),
   }))
  }

  renderBubble(props) {
    return(
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#000'
          }
        }}
      />
    )
  }

  render() {
    let color = this.props.route.params.color;  //Background Color

    return(
      <View style={{flex:1, backgroundColor: color}}>
        <GiftedChat
          renderBubble={this.renderBubble.bind(this)}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
        { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null }
      </View>
    )
  }
}

/*
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
*/
