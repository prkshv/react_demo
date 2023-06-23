import React from "react";

function Todos({ todos, addTodo }) {
  console.log("Child component");
  return (
    <>
      <h2>My todo list</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Item</button>
    </>
  );
}

export default Todos;
