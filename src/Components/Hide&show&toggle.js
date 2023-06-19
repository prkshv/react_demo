import React, { useState } from "react";

function Hideshowtoggle(props) {
  const [status, setStatus] = useState(true);
  return (
    <div>
      {status ? <h1>Hello Everyone</h1> : null}

      {/* normal method */}
      {/* <button onClick={() => setStatus(false)}> Hide </button>
      <button onClick={() => setStatus(true)}> Show </button> */}
      {/* toggle method */}
      <button onClick={() => setStatus(!status)}>Toggle Hide/Show</button>
    </div>
  );
}

export default Hideshowtoggle;
