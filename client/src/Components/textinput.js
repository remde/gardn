import React from "react";
import "./textinput.css";
import Send from "../Images/send.svg";

class TextInput extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.messageSend(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div className="text-input">
        <form className="input-form" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="Escreva sua mensagem"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
            required="required"
            pattern="\S+.*"
            title="A primeira letra não pode ser um espaço em branco"
          />
          <button>
            <img src={Send} alt="send message" />
          </button>
        </form>
      </div>
    );
  }
}

export default TextInput;
