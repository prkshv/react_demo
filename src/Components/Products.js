import React, { useEffect } from "react";

function Products(props) {
  useEffect(() => {
    console.log("useeffect called only for data values");
  }, [props.data]);
  return (
    <div>
      <h2>Count value: {props.count}</h2>
      <h2>Data value: {props.data}</h2>
    </div>
  );
}

export default Products;
