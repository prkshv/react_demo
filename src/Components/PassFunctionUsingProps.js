import React from "react";
import User from "./User";
import BasicformValidation from "./BasicformValidation";

export default function PassFunctionUsingProps(props) {
  function getData() {
    alert("Hello from function");
  }
  return (
    <div>
      <User Data={getData} />
      <BasicformValidation Data={getData} />
    </div>
  );
}
