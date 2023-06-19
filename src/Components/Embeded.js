import React from "react";

export default function Embeded() {
  const mystyle = {
    color: "violet",
    backgroundColor: "pink",
    padding:'5px',
    border:'solid red 3px'
  };
  return (
    <div>
      <h1 style={mystyle}>Emb Style CSS</h1>
    </div>
  );
}
