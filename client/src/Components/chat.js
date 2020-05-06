import React from "react";
import Navbar from "../Components/navbar";
import MessageList from "../Components/messagelist";
import TextInput from "../Components/textinput";
import socketIOClient from "socket.io-client";

const socket = socketIOClient("localhost:5000/");

class Chat extends React.Component {
  state = { messageList: [], socket: null, messageKey: 0 };

  getTime = () => {
    var myDate = new Date()
      .toTimeString()
      .replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
    return myDate;
  };

  componentDidMount = () => {
    this.messageReceive();
  };

  messageReceive = () => {
    socket.on("chat message", (message) => {
      this.addMessage(message);
    });
  };

  messageSend = (message) => {
    let newMessageKey;
    message = {
      message: message,
      author: this.props.username,
      date: this.getTime(),
      id: socket.id,
      key: this.state.messageKey,
    };
    newMessageKey = 1 + this.state.messageKey;
    this.setState({ messageKey: newMessageKey });
    this.addMessage(message);
    socket.emit("chat message", message);
  };

  onButtonClick = (event) => {
    this.props.unauthenticator();
  };

  addMessage = (message) => {
    let newEntry = message;
    let newState = this.state.messageList;
    newState.push(newEntry);
    this.setState((state) => ({
      messageList: newState,
    }));
  };

  render() {
    return (
      <div className="ui container">
        <Navbar
          unauthenticator={this.props.unauthenticator}
          username={this.props.username}
        />
        <MessageList
          messageList={this.state.messageList}
          id={socket.id}
          key={this.state.messageKey}
        />
        <TextInput messageSend={this.messageSend} />
      </div>
    );
  }
}

export default Chat;
