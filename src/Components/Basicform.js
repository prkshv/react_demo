import React, { useState } from "react";

function Basicform(props) {
  const [name, setName] = useState();
  const [selected, setSelected] = useState("");
  const [tnc, setTnc] = useState(false);

  function getFormData(e) {
    e.preventDefault();
    console.log(name, selected, tnc);
  }
  return (
    <div>
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <select onChange={(e) => setSelected(e.target.value)}>
          <option>Item1</option>
          <option>Item2</option>
          <option>Item3</option>
        </select>
        <br />
        <br />
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
        <span>Accept terms and conditions</span>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Basicform;
