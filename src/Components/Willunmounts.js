import React, { Component } from "react";
import Student from "./Student";

export default class Willunmounts extends Component {
  constructor() {
    console.log("Constructor is Called.");
    super();
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <div>
        {this.state.show ? <Student /> : <h1>Child comp is removed</h1>}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Remove Child Comp
        </button>
      </div>
    );
  }
}
