import React from "react";
import Navbar from "../Components/navbar";
import MainScreen from "../Components/mainscreen";
import TextInput from "../Components/textinput";
import socketIOClient from "socket.io-client";
import "./chat.css";

const socket = socketIOClient("http://161.35.136.196:5000/");

class Chat extends React.Component {
  state = { messageList: [], messageKey: 0, userList: [] };

  componentDidMount = () => {
    socket.emit("user update", this.props.username);
    this.userListReceive();
    this.messageReceive();
  };

  getTime = () => {
    console.log(this.state.userList);
    var myDate = new Date()
      .toTimeString()
      .replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
    return myDate.slice(0, 5);
  };

  userListReceive = () => {
    socket.on("user update", (userList) => {
      this.setState({ userList: userList });
    });
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
      <div className="chat">
        <div className="ui container">
          <Navbar
            unauthenticator={this.props.unauthenticator}
            username={this.props.username}
          />
          <MainScreen
            messageList={this.state.messageList}
            id={socket.id}
            key={this.state.messageKey}
            userList={this.state.userList}
            messageSend={this.messageSend}
          />
          <TextInput messageSend={this.messageSend} />
        </div>
      </div>
    );
  }
}

export default Chat;
