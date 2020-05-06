import React from "react";
import MessageCard from "./messagecard";
import "./messagelist.css";

class MessageList extends React.Component {
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView();
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const messages = this.props.messageList.map((message) => {
      return (
        <MessageCard
          author={message.author}
          message={message.message}
          date={message.date}
          messageId={this.props.id}
          localId={message.id}
          key={message.key}
        />
      );
    });
    return (
      <div className="message-list">
        {messages}
        <div
          style={{ float: "left", clear: "both" }}
          ref={(el) => {
            this.messagesEnd = el;
          }}
        ></div>
      </div>
    );
  }
}

export default MessageList;
