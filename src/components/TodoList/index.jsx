import React, { useState } from "react";
import "./index.css";
function TodoList({ todos, remove }) {
  return (
    <>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button className="deleteBtn" onClick={() => remove(index)}>
            Delete
          </button>
        </li>
      ))}
    </>
  );
}

export default TodoList;
