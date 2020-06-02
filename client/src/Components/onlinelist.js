import React from "react";
import "./onlinelist.css";

class OnlineList extends React.Component {
  render() {
    const userName = this.props.userList.map((user) => {
      return <div className="whos-on">- {user}</div>;
    });

    return (
      <div className="online-list">
        <div className="online-title">ONLINE</div>
        <div className="users">{userName}</div>
      </div>
    );
  }
}

export default OnlineList;
