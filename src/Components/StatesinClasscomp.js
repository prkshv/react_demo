import React, { Component } from "react";

export default class StatesinClasscomp extends Component {
  constructor() {
    super();
    this.state = { brand: "ford", model: "mustang", year: "1990" };
    // object property value
    // super: invoke parent constructor
    // to access the parent properties of that component
  }

  update = () => {
    this.setState({ year: "2000" });
    this.setState({ brand: "bmw" });
  };

  render() {
    return (
      <div>
        <h1>
          My car name is {this.state.brand} of model {this.state.model} released
          in {this.state.year}
        </h1>

        <button onClick={this.update}>Update Value</button>
      </div>
    );
  }
}
