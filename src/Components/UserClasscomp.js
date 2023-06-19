import React, { Component } from "react";

export class UserClassComp extends Component {
  constructor() {
    console.log("constructor called");
    super();
    this.state = {
      count: 0,
    };
  }
  shouldComponentUpdate() {
    console.log("Should component update");
    return true;
  }

  componentDidUpdate() {
    console.log("did update called");
  }
  componentDidMount() {
    console.log("did mount called");
  }

  render() {
    console.log("render called");
    return (
      <div>
        <h1>This is a simple class Component {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click
        </button>
      </div>
    );
  }
}

// lifecycle of class component

// first
// constructor is called
// render is called
// did mount called

//after the event is triggered or some changes are made

// should component update called
// render called again
// did update called
