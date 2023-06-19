import React, { useState } from "react";

function Conditionaloperator(props) {
  const [loggedIn, setLoggedin] = useState(2);
  return (
    <div>
      {loggedIn === 1 ? (
        <h1>Welcome user 1</h1>
      ) : loggedIn === 2 ? (
        <h1>Welcome user 2</h1>
      ) : (
        <h1>Welcome guest</h1>
      )}
    </div>
  );
}

export default Conditionaloperator;
