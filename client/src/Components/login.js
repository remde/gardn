import React from "react";

import "./login.css";

class Login extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.authenticator(this.state.term);
  };

  onButtonClick = (event) => {
    this.props.authenticator("visitante");
  };

  render() {
    return (
      <div className="login">
        <section className="masthead" role="img" aria-label="Image Description">
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
                pattern="[A-Za-z0-9]{1,20}"
                title="1 a 20 dígitos sem caracteres especiais"
              ></input>
            </div>
            <div className="space"></div>
            <div className="visitante">
              <button
                type="submit"
                className="link-button"
                onClick={this.onFormSubmit}
              >
                Entrar
              </button>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default Login;
