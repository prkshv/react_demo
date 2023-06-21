import React, { useEffect, useRef, useState } from "react";
import Useeffects from "./Useeffects";

function Usereference(props) {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
    console.log("texting");
  }, []);

  return (
    <>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        type="text"
      />
      <h1>{count.current}</h1>
    </>
  );
}

export default Usereference;
