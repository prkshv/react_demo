import React, { Component } from "react";

export default class PropsClasscomp extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h2>Hello My name is: {this.props.name}</h2>
      </div>
    );
  }
}
