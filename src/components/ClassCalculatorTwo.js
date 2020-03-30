import React, { Component } from "react";

const button = {
  fontSize: "40px",
  marginRight: "20px",
  marginTop: "40px",
  padding: "5px",
  paddingLeft: "20px",
  paddingRight: "20px"
};

const textbox = {
  marginTop: "100px",
  fontSize: "50px",
  textAlign: "right"
};

class ClassCalculatorTwo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount = () => {
    this.inputRef.current.focus();
  };
  componentDidUpdate = () => {
    this.inputRef.current.focus();
  };

  state = { value1: 0, value2: 0, value: "", op: "" };

  addition = () => {
    this.setState({
      value1: this.state.value,
      value: "",
      op: "+"
    });
  };
  substraction = () => {
    this.setState({
      value1: this.state.value,
      value: "",
      op: "-"
    });
  };
  multiplication = () => {
    this.setState({
      value1: this.state.value,
      value: "",
      op: "*"
    });
  };
  division = () => {
    this.setState({
      value1: this.state.value,
      value: "",
      op: "/"
    });
  };
  calculate = () => {
    this.setState(
      {
        value2: this.state.value
      },
      () => {
        switch (this.state.op) {
          case "+":
            this.setState({ value: this.state.value1 + this.state.value2 });
            break;
          case "-":
            this.setState({ value: this.state.value1 - this.state.value2 });
            break;
          case "*":
            this.setState({ value: this.state.value1 * this.state.value2 });
            break;
          case "/":
            this.setState({ value: this.state.value1 / this.state.value2 });
            break;
          default:
            this.setState({ value: this.state.value });
        }
      }
    );
  };

  render() {
    return (
      <div>
        <input
          ref={this.inputRef}
          style={textbox}
          value={this.state.value}
          onChange={event => {
            this.setState({ value: Number(event.target.value) });
          }}
        />
        <br />
        <button style={button} onClick={this.addition}>
          +
        </button>
        <button style={button} onClick={this.substraction}>
          -
        </button>
        <button style={button} onClick={this.multiplication}>
          *
        </button>
        <button style={button} onClick={this.division}>
          /
        </button>
        <button style={button} onClick={this.calculate}>
          =
        </button>
      </div>
    );
  }
}

export default ClassCalculatorTwo;
