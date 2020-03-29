import React, { Component } from "react";

const button = {
  fontSize: "40px",
  marginRight: "20px",
  marginTop: "40px",
  padding: "5px",
  paddingLeft: "20px",
  paddingRight: "20px"
};

class ClassCalculator extends Component {
  state = {
    firstValue: 0,
    secondValue: 0,
    result: 0
  };

  addition = () => {
    this.setState({
      result: this.state.firstValue + this.state.secondValue
    });
  };
  substraction = () => {};
  multiplication = () => {};
  division = () => {};
  calculate = operator => {
    switch (operator) {
      case "+":
        this.setState({
          result: this.state.firstValue + this.state.secondValue
        });
        break;
      case "-":
        this.setState({
          result: this.state.firstValue - this.state.secondValue
        });
        break;
      case "*":
        this.setState({
          result: this.state.firstValue * this.state.secondValue
        });
        break;
      case "/":
        this.setState({
          result: this.state.firstValue / this.state.secondValue
        });
        break;
      default:
        this.setState({
          result: this.state.result
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <p>First Value</p>
        <input
          type="number"
          onChange={event => {
            this.setState({ firstValue: Number(event.target.value) });
          }}
          value={this.state.firstValue}
        />
        <br />

        <p>Second Value</p>
        <input
          type="number"
          onChange={event => {
            this.setState({ secondValue: Number(event.target.value) });
          }}
          value={this.state.secondValue}
        />
        <br />

        <p>Result</p>
        <input
          type="number"
          onChange={event => {
            this.setState({ value: Number(event.target.value) });
          }}
          value={this.state.result}
        />
        <br />

        <button style={button} onClick={() => this.calculate("+")}>
          +
        </button>
        <button style={button} onClick={() => this.calculate("-")}>
          -
        </button>
        <button style={button} onClick={() => this.calculate("*")}>
          *
        </button>
        <button style={button} onClick={() => this.calculate("/")}>
          /
        </button>
      </div>
    );
  }
}

export default ClassCalculator;
