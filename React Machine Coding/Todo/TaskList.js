import { useState } from "react";

export default function TaskList({ todos, handleEdit, deleteItem }) {
  return (
    <div>
      <div>
        {todos.map((todo) => (
          <p key={todo.id}>
            <Task todo={todo} onEdit={handleEdit} onDelete={deleteItem} />
          </p>
        ))}
      </div>
    </div>
  );
}

function Task({ todo, onEdit, onDelete }) {
  const [editing, setEditing] = useState(false);
  return (
    <div className="todo_item">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onEdit({ ...todo, done: e.target.checked });
        }}
      />

      <div>
        {editing ? (
          <div className="todo_item">
            <input
              type="text"
              value={todo.title}
              onChange={(e) => onEdit({ ...todo, title: e.target.value })}
              className="todo_name"
            />
            <button onClick={(e) => setEditing(false)} className="todo_name">
              ✅ Save
            </button>
          </div>
        ) : (
          <div className="todo_item">
            <p className="todo_name">{todo.title}</p>{" "}
            <button onClick={() => setEditing(true)} className="todo_name">
              ✏️ Edit
            </button>
          </div>
        )}
      </div>

      <button onClick={() => onDelete(todo.id)}>🗑️ Delete</button>
    </div>
  );
}
