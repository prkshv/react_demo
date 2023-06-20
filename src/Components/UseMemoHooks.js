import React, { useMemo, useState } from "react";

function UseMemoHooks(props) {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const addTodo = () => {
    setTodos((t) => [...t, "New todo value"]);
  };

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <h2>Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add todos</button>
      <hr />
      <div>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increase Count</button>
        <h2>Expensive Calculation:</h2>
        {calculation}
      </div>
    </div>
  );
}
const expensiveCalculation = (num) => {
  console.log("calculating value....");
  for (let i = 0; i < 1000000; i++) {
    num += 1;
  }
  return num;
};

export default UseMemoHooks;
