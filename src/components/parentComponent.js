import React, { Component } from "react";
import ChildComponent from "./childComponent";

class ParentComponent extends Component {
  state = {
    parentName: "Parent"
  };

  constructor(props) {
    super(props);
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent() {
    alert(`Hello ${this.state.parentName}`);
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
