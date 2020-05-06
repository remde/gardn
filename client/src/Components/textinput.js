import React from "react";
import "./textinput.css";

class TextInput extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.messageSend(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div className="ui container">
        <div className="text-input">
          <div className="ui form">
            <div className="field">
              <form onSubmit={this.onFormSubmit}>
                <label>Escreva sua mensagem</label>
                <input
                  type="text"
                  value={this.state.term}
                  onChange={(e) => this.setState({ term: e.target.value })}
                  required="required"
                  pattern="\S+.*"
                  title="A primeira letra não pode ser um espaço em branco"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TextInput;
