import React from "react";
import styled from "styled-components";
import "./cssimplementation.css";

function Cssimplementation(props) {
  const H1 = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: violet;
  `;
  const mystyle = {
    color: "lightgreen",
  };
  return (
    <div>
      <h1 style={{ color: "pink" }}>React Styled Components demo</h1>
      <h4 style={mystyle}>Random text with no meaning</h4>
      <h5>External CSS</h5>
      <H1>This is some random text</H1>
      <H1 style={{ color: "green" }}>Sample Text</H1>
    </div>
  );
}

export default Cssimplementation;
