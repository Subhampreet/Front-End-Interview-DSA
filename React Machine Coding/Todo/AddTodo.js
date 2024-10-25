import { useState } from "react";

export default function AddTodo({ onSubmitTodo }) {
  [title, setTitle] = useState("");

  return (
    <div>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={() => {
            onSubmitTodo(title);
            setTitle("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
