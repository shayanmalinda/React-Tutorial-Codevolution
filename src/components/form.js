import React, { Component } from "react";

class Form extends Component {
  state = {
    username: "",
    password: ""
  };

  usernameChangeHandler = event => {
    this.setState({
      username: event.target.value
    });
  };

  passwordChangeHandler = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleSubmit = event => {
    alert(this.state.username + " " + this.state.password);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <p>Username</p>
          <input
            type="text"
            value={this.state.username}
            onChange={this.usernameChangeHandler}
          />
          <p>Password</p>
          <input
            type="text"
            value={this.state.password}
            onChange={this.passwordChangeHandler}
          />
          <br></br>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
