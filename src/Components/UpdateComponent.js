import React, { useState } from "react";

function UpdateComponent(OriginalComponent, increaseCount) {
  function NewComponent(props) {
    const [counter, setCounter] = useState(0);

    return (
      <OriginalComponent
        name="testing"
        counter={counter}
        incrementCounter={() => setCounter((size) => size + increaseCount)}
      />
    );
  }
  return NewComponent;
}

export default UpdateComponent;
