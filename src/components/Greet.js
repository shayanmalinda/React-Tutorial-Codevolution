import React, { Component } from "react";
import Welcome from "./Welcome";

class Greet extends Component {
  state = {};
  render() {
    return (
      <div>
        <Welcome name="shayan" />
        <Welcome name="malinda" />
      </div>
    );
  }
}

export default Greet;
