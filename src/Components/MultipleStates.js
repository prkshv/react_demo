import React, { useState } from "react";

function MultipleStates(props) {
  const [brand, setBrand] = useState("BMW");
  const [model, setModel] = useState("5 series");
  const [year, setYear] = useState("2022");
  const [color, setColor] = useState("White");
  return (
    <div>
      <h1>{brand}</h1>
      <p>
        It is a {color} {model} from {year}
      </p>
      {/* {} is jsx format(combination of js and xml) */}
    </div>
  );
}

export default MultipleStates;
