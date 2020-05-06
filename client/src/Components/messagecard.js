import React from "react";
import "./messagecard.css";

class MessageCard extends React.Component {
  render() {
    return (
      <div className="message-card">
        <div
          className={
            this.props.username === this.props.author
              ? "card-right"
              : "card-left"
          }
        >
          <div className="card-style">
            {this.props.author}: {this.props.message}
          </div>
        </div>
      </div>
    );
  }
}

export default MessageCard;
