import React, { useReducer } from "react";

const initialTodos = [
  { id: 1, title: "task", complete: false },
  { id: 2, title: "task2", complete: false },
  { id: 3, title: "task3", complete: false },
  { id: 4, title: "task4", complete: false },
  { id: 5, title: "task5", complete: false },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function UseReducerhooks(props) {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
    console.log(todo.title, "completed");
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label htmlFor="">
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}

export default UseReducerhooks;
