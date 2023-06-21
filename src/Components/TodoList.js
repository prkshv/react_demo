import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";

function TodoList(props) {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  function addtolist() {
    setList([...list, task]);
    setTask("");
    console.log(`"${task}" is added in the list`);
  }

  return (
    <div style={{ padding: "24px" }}>
      <h1>Your ToDo List</h1>
      <input
        style={{}}
        className="form-control mt-3"
        onChange={(e) => setTask(e.target.value)}
        type="text"
        value={task}
        placeholder="Enter the task"
      />
      <Button
        variant="outline-danger"
        className="btn outline-danger mt-3"
        onClick={addtolist}
      >
        Add Task to List
      </Button>
      {list.map((item, index) => {
        return (
          <h6
            className="form-control"
            style={{
              textAlign: "left",
              marginTop: "10px",
              backgroundColor: "lightpink",
            }}
            key={index}
          >
            {index + 1}: {item}
          </h6>
        );
      })}
    </div>
  );
}

export default TodoList;
