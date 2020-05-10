import React from "react";
import MessageList from "./messagelist";
import OnlineList from "./onlinelist";
import "./mainscreen.css";

class MainScreen extends React.Component {
  render() {
    return (
      <div className="mainScreen">
        <MessageList
          messageList={this.props.messageList}
          id={this.props.id}
          key={this.props.key}
        />
        <OnlineList
          userList={this.props.userList}
        />
      </div>
    );
  }
}

export default MainScreen;
