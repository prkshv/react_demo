import React, { Component } from "react";
import { First } from "react-bootstrap/esm/PageItem";

export default class Classcomponentlifecycle extends Component {
  constructor() {
    console.log("Constructor is Called.");
    super();
    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate() {
    console.log("Sould component update Called");
    return true;
  }

  // before that getsnapshot otherwise won't work
  getSnapshotBeforeUpdate(preProps, preState) {
    console.log("get snapshot called", preState);
    return true;
  }

  componentDidUpdate(preProps, preState, snapshot) {
    console.log("Did update called");
    console.log("snapshot value: ", snapshot);
    console.log("did update called", preState.count, this.state.count);
    if (preState.count === this.state.count) {
      alert("data is already same");
    }
  }

  componentDidMount() {
    console.log("Did mount called");
  }

  render() {
    console.log("Render is Called");
    return (
      <div>
        <h1>This is simple class component</h1>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click to Count and display the different phases of class component
        </button>
        {/* <button onClick={() => this.setState({ count: 1 })}>
          Click to Count and display the different phases of class component
        </button> */}
      </div>
    );
  }
}

// this is the class component lifecycle

// mounting putting elements into the dom
// First
// constructor is called
// render is called
// did mount called

// after the event is triggered or some changes are matchMedia
// render is called again
// did update called

// after implementing should update
// contructor is called
// render is called
// did mount called
// after triggering some activity
// should component update called
// if it is true
// render is called
// did update called
// if it is false
// stop at should component update
