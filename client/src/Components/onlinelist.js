import React from "react";
import "./onlinelist.css";

class OnlineList extends React.Component {
  render() {
    const userName = this.props.userList.map((user) => {
      return user;
    });

    return (
      <div className="online-list">
        <div className="whos-on">{userName}</div>
      </div>
    );
  }
}

export default OnlineList;
