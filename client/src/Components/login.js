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
          <h1>GARDN.IO</h1>
          <form onSubmit={this.onFormSubmit}>
            <div className="ui action input">
              <input
                type="text"
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
                placeholder="Insira seu nome"
                required
                pattern="[A-Za-z0-9]{1,20}"
                title="1 a 20 dígitos sem caracteres especiais"
              ></input>
              <button
                type="button"
                onClick={this.onFormSubmit}
                className="ui button"
              >
                Entrar
              </button>
            </div>
          </form>
          <div className="space"></div>
          <div className="visitante">
            <button className="link-button" onClick={this.onButtonClick}>
              ou clique aqui para entrar como visitanty
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
