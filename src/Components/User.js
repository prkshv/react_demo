import React from "react";
import Demo from "./Demo";

const User = (props) => {
  return (
    <div className="User">
      {/* <h1>I am comming from User component</h1>

      <i>My basic information is: {props.Information.name}</i>
      <br />
      <i>My course name is: {props.Information.class}</i> */}
      {/* <Demo /> */}
      <button onClick={props.Data}>Prop Funct</button>
    </div>
  );
};

export default User;
