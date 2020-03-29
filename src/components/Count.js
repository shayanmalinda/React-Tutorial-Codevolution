import React, { Component } from "react";

class Count extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    const count = this.state.count;
    return <button onClick={this.increment}>Clicked {count} times</button>;
  }
}

export default Count;
