import React, { useState } from "react";
import UpdateComponent from "./UpdateComponent";

function Clickincrease(props) {
  const { counter, incrementCounter } = props;
  const [fontSize, setFontSize] = useState(20);

  return (
    <div>
      <button onClick={() => setFontSize((size) => size + 1)}>
        Increase With Click
      </button>

      <p style={{ fontSize }}>Size of font size</p>

      <p>value of name in hovercase: {props.name}</p>
      <button onClick={() => incrementCounter()}>Increase Counter</button>
      <p>value of counter is: {counter}</p>
    </div>
  );
}

export default UpdateComponent(Clickincrease, 10);
