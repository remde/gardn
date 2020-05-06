import React from "react";
import "./navbar.css";

class Navbar extends React.Component {
  onButtonClick = (event) => {
    this.props.unauthenticator();
  };

  render() {
    return (
      <div className="navbar">
        <div className="welcome">
          Seja bem-vindo, <span className="bolded">{this.props.username}</span>
        </div>
        <div className="leave">
          <button className="leaveButton">Sair</button>
        </div>
      </div>
    );
  }
}

export default Navbar;
