import React, { useState } from "react";
import TodoList from "../TodoList";
import "./index.css";
function Todo() {
  const [add, setAdd] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  function addToList() {
    setTodos((prevTodos) => [...prevTodos, inputValue]);
    setInputValue("");
    setAdd(true);
  }
  function removeFromList(index) {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos.splice(index, 1);
      return newTodos;
    });
  }
  return (
    <div className="input">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="addBtn"
        onClick={() => {
          if (inputValue.length > 0) {
            addToList();
          }
        }}
      >
        ADD
      </button>
      <ul className="list">
        {add && <TodoList todos={todos} remove={removeFromList} />}
      </ul>
    </div>
  );
}

export default Todo;
