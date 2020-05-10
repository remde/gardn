import React from "react";
import "./onlinelist.css";

class OnlineList extends React.Component {

  render() {

    this.props.userList.map((user) => {
      return (
        <div className="online-list">
          <div className="whos-on">{this.user}</div>
        </div>
      );
    });
  };
};

export default OnlineList;
