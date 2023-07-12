import React, { useState } from "react";
import UpdateComponent from "./UpdateComponent";

function Hoverincrease(props) {
  const [fontSize, setFontSize] = useState(10);
  const { counter, incrementCounter } = props;
  return (
    <div>
      <button onMouseOver={() => setFontSize((size) => size + 1)}>
        Increase with Hover
      </button>
      <p style={{ fontSize }}>
        Size of font size in onmouseover function: {fontSize}
      </p>

      <p>value of name in hovercase: {props.name}</p>
      <button onClick={() => incrementCounter()}>Increase Counter</button>
      <p>value of counter is: {counter}</p>
    </div>
  );
}

export default UpdateComponent(Hoverincrease, 10);
