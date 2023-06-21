import React, { useReducer } from "react";

const initialstate = 0;

const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default:
      return false;
  }
};

function Usereducer(props) {
  const [count, dispatch] = useReducer(reducer, initialstate);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          dispatch("Increment");
        }}
      >
        +++
      </button>
      <button
        onClick={() => {
          dispatch("Decrement");
        }}
      >
        ---
      </button>
    </div>
  );
}

export default Usereducer;
