// variables
// properties
// type of object
// similar to html attributes
// additional info about that element but it is read only
// can't change the value of props

import React from "react";
import Demo from "./Demo";

const PropsinFunctioncomp = (props) => {
  return (
    <div>
      <h1>My name is {props.name}</h1>
      <Demo title="props example" />
    </div>
  );
};

export default PropsinFunctioncomp;
