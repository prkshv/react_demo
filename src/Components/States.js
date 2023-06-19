import React, { useState } from "react";

const States = (props) => {
  const [color, setColor] = useState("red");
  //   state object is where you store property values that belongs
  // to the component
  // state change -> component will rerender
  return (
    <div>
      <h1>My favorite colour is: {color}</h1>
      <button onClick={() => setColor("green")}>Change Colour</button>
      //we can't write function inside function directly
    </div>
  );
};

export default States;
