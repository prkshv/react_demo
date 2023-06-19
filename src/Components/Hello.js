import React from "react";

const Hello = () => {
  // return(
  //     <div>

  //     </div>
  // )
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello Everyone")
  );
  // this is how you create html element in js
};
export default Hello;
