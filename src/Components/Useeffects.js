import React, { useState, useEffect } from "react";
import Products from "./Products";

function Useeffects(props) {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  //   useEffect(() => {
  //     console.log("use effect data called");
  //   }, [data]);

  //   useEffect(() => {
  //     console.log("use effect count called");
  //   }, [count]);

  return (
    <div>
      {/* <h1>This is useEffect Hook</h1> */}
      <Products data={data} count={count} />
      {/* <h2>Count: {count}</h2> */}
      {/* <h2>Data: {data}</h2> */}
      <button onClick={() => setCount(count + 1)}>Count update</button>
      <button onClick={() => setData(data + 1)}>Data update</button>
    </div>
  );
}

export default Useeffects;
