import React from "react";

class Navbar extends React.Component {
  onButtonClick = (event) => {
    this.props.unauthenticator();
  };

  render() {
    return (
      <div>
        <div className="ui menu">
          <div className="item">
            <div onClick={this.onButtonClick} className="ui primary button">
              Sair
            </div>
          </div>
          <div className="item">
            <h5 className="ui header">Seja bem-vindo, {this.props.username}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
