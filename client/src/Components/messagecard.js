import React from "react";

class MessageCard extends React.Component {
  render() {
    return (
      <div>
        <div className="ui segment">
          {this.props.username}: {this.props.message}
        </div>
      </div>
    );
  }
}

export default MessageCard;
