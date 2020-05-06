import React from "react";
import ReactDOM from "react-dom";
import Login from "./Components/login";
import Chat from "./Components/chat";

class App extends React.Component {
  state = { username: "", isAuthenticated: false, response: "" };

  Authenticator = (username) => {
    this.setState({ username: username, isAuthenticated: true });
  };

  Unauthenticator = () => {
    this.setState({ username: "", isAuthenticated: false });
  };

  render() {
    return (
      <div>
        <div className="App">
          <p className="App-intro">{this.state.response}</p>
        </div>
        {this.state.isAuthenticated === false ? (
          //not authenticated
          <Login authenticator={this.Authenticator} />
        ) : (
          //authenticated
          <Chat
            username={this.state.username}
            unauthenticator={this.Unauthenticator}
          />
        )}
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
