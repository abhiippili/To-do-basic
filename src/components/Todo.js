import React, { useState } from "react";
let globalCounter = 0;
function Todo() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const saveTodo = (e) => {
    globalCounter++;
    e.preventDefault();
    setTodos((oldTodos) => {
      setTask("");
      return [...oldTodos, { data: task, id: globalCounter }];
    });
  };
  //   const checkForEnterKey = (e) => {
  //     if (e.keyCode === 13) saveTodo();
  //   };
  const deleteTodo = (id) => {
    setTodos((oldTodos) => {
      return oldTodos.filter((todo) => todo.id !== id);
    });
  };
  const todosRender = todos.map((todo) => {
    return (
      <li key={todo.id}>
        <div style={{ margin: "10px" }}>
          {todo.data}
          <button
            style={{ margin: "0 10px" }}
            onClick={() => deleteTodo(todo.id)}
          >
            delete
          </button>
        </div>
      </li>
    );
  });
  return (
    <div>
      Tasks to do for today
      <div>
        <form onSubmit={saveTodo}>
          <input
            type="text"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
            // onKeyDown={checkForEnterKey}
          />
          <button style={{ margin: "0 10px" }} onClick={saveTodo}>
            submit
          </button>
        </form>
        <ul>{todosRender}</ul>
      </div>
    </div>
  );
}

export default Todo;
