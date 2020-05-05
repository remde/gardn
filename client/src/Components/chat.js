import React from "react";
import Navbar from "../Components/navbar";
import MessageList from "../Components/messagelist";
import TextInput from "../Components/textinput";
import socketIOClient from "socket.io-client";

const socket = socketIOClient("localhost:5000/");

class Chat extends React.Component {
  state = { messageList: [], socket: null };

  componentDidMount = () => {
    this.messageReceive();
  };

  messageReceive = () => {
    socket.on("chat message", (message) => {
      this.addMessage(message);
    });
  };

  messageSend = (message) => {
    this.addMessage(message);
    socket.emit("chat message", message);
  };

  onButtonClick = (event) => {
    this.props.unauthenticator();
  };

  addMessage = (message, author) => {
    console.log(this.state.messageList);
    let newEntry = { message: message, author: this.props.username };
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
        <MessageList messageList={this.state.messageList} />
        <TextInput messageSend={this.messageSend} />
      </div>
    );
  }
}

export default Chat;
