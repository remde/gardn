import React from "react";
import "./messagecard.css";

class MessageCard extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.messageId === this.props.localId ? "card-left" : "card-right"
        }
      >
        <div className="author-style"> {this.props.author}</div>
        <div className="message-style">{this.props.message}</div>
        <div className="date-style">{this.props.date}</div>
      </div>
    );
  }
}

export default MessageCard;
