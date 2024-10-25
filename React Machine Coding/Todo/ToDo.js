import { useState } from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (title) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title: title,
        done: false,
      },
    ]);
  };

  const handleChangeTodo = (nextTodo) => {
    setTodos(
      todos.map((t) => {
        if (t.id == nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      })
    );
  };

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((t) => t.id !== todoId));
  };

  console.log(todos);

  return (
    <div className="todo">
      <div>
        <h1>📝 To-Do App </h1>
      </div>
      <AddTodo onSubmitTodo={handleSubmit} />
      <TaskList
        todos={todos}
        handleEdit={handleChangeTodo}
        deleteItem={deleteTodo}
      />
    </div>
  );
}
