import React, { useState } from "react";

function Getinputvalue(props) {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  const [data2, setData2] = useState(null);
  const [print2, setPrint2] = useState(false);

  function getData(val) {
    console.log(val.target.value);
    setData(val.target.value);
  }
  function ip2(val) {
    setData2(val.target.value);
  }
  return (
    <div>
      {print ? <h1>{data}</h1> : null}
      {print2 ? <h2>{data2}</h2> : null}
      <h1>Get input values</h1>
      {/* onfocus keyup keydown onsubmit onselect */}
      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}>send</button>
      <br />
      <input onChange={ip2} type="password" name="" id="" />
      <button onClick={() => setPrint2(true)}>Password</button>
    </div>
  );
}

export default Getinputvalue;
