import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
      subscribe: false
    };
  }

  changeMessage(subscribe) {
    if (!subscribe) {
      this.setState({
        message: "Thank you for Subscribing",
        subscribe: true
      });
    } else {
      this.setState({
        message: "Welcome Visitor",
        subscribe: false
      });
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage(this.state.subscribe)}>
          Subscribe
        </button>
      </div>
    );
  }
}

export default Message;
