import React from "react";

class MessageCard extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.author === "self"
            ? "right floated left aligned six wide column"
            : "left floated right aligned six wide column"
        }
      >
        <div className="ui segment">
          {this.props.author}: {this.props.message}
        </div>
      </div>
    );
  }
}

export default MessageCard;
