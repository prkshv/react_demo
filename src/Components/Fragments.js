import React from "react";

function Fragments(props) {
  return (
    <>
      <h1>Hello</h1>
      <div>This is the div</div>
      <button>This is the button</button>
    </>
  );
}

export default Fragments;

// When we use <div> as a returning block all the tags inside it are considered as single entity
// when we use <> as a returning block all the tags inside will be considered as different entities
