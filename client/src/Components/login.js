import React from "react";

import "./login.css";

class Login extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
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
              ></input>
              <button className="ui button">Entrar</button>
            </div>
          </form>
          <div className="space"></div>
          <div className="visitante">
            <button
              type="button"
              className="link-button"
              onClick={this.onButtonClick}
            >
              ou clique aqui para entrar como visitante
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
