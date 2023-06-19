import React, { Component } from "react";

export default class Student extends Component {
  componentWillUnmount() {
    alert("Component is removed from DOM");
  }
  render() {
    return <div>comming from student component</div>;
  }
}
