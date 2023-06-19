import React from "react";
import { UserClassComp } from "./UserClasscomp";
import User from "./User";

const Demo = (props) => {
  const Info = {
    name: "xyz",
    class: "react class",
  };
  return (
    <div>
      <h2>{props.title}</h2>
      {/* <UserClassComp /> */}
      <h1>This text is from demo.js component</h1>
      <button>Click</button>

      <User Information={Info} />
    </div>
  );
};

function Demo2() {
  return (
    <div>
      <h1>This is a Demo2 functional component</h1>
    </div>
  );
}

function Demo3() {
  return (
    <div>
      <h1>This is a Demo3 functional component</h1>
    </div>
  );
}

export { Demo2, Demo3 };
export default Demo;
