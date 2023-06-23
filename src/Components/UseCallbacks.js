import React, { useCallback, useState } from "react";
import Todos from "./Todos";

function UseCallbacks(props) {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((t) => t + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <div>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Incremet</button>
      </div>
    </>
  );
}

export default UseCallbacks;
