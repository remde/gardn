import React from "react";

import "./login.css";

class Login extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.term.match(/[A-Za-z0-9]{1,20}/) &&
      this.state.term.length <= 20
    ) {
      this.props.authenticator(this.state.term);
    } else {
      window.alert("1 a 20 dígitos sem espaços, apenas números e letras");
    }
  };

  onButtonClick = (event) => {
    if (
      this.state.term.match(/[A-Za-z0-9]{1,20}/) &&
      this.state.term.length <= 20
    ) {
      this.props.authenticator(this.state.term);
    } else {
      window.alert("1 a 20 dígitos sem espaços, apenas números e letras");
    }
  };

  render() {
    return (
      <div className="ui container">
        <div className="login">
          <section
            className="masthead"
            role="img"
            aria-label="Image Description"
          >
            <h1>Gardn.</h1>
            <p>Converse anonimamente.</p>
            <form onSubmit={this.onFormSubmit}>
              <div className="nameInput">
                <input
                  type="text"
                  value={this.state.term}
                  onChange={(e) => this.setState({ term: e.target.value })}
                  placeholder="Insira seu codinome"
                  required
                  title="1 a 20 dígitos sem caracteres especiais"
                ></input>
              </div>
              <input
                type="button"
                className="link-button"
                onClick={this.onButtonClick}
                value="Entrar"
                pattern="[A-Za-z0-9]{1,20}"
              ></input>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

export default Login;
