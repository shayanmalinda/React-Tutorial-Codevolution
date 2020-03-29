import React, { Component } from "react";

class ListComponent extends Component {
  state = { list: [], name: "" };

  submit = () => {
    const x = this.state.list;
    this.setState({
      list: [...x, this.state.name]
    });
    console.log(this.state.list);
  };

  reset = () => {
    this.setState({
      list: []
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={event => this.setState({ name: event.target.value })}
        />
        <button onClick={this.submit}>Submit</button>
        <button onClick={this.reset}>Reset</button>

        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListComponent;
