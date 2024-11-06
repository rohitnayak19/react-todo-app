import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
const TodoItems = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <div className="flex flex-col gap-1 items-centers justify-start">
          <span
            className={`text-lf ${todo.completed
              ? "line-through text-zinc-500 text-xl"
              : "text-zinc-700 font-mono text-xl    "
              }`}
          >
            {todo.text}
          </span>
          <span className="font-mono text-zinc-400 text-sm">
            {todo.completed ? "Done✅" : "In Progress 🎯"}
          </span>
        </div>
      </div>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="mr-1.5 text-rose-500 bg-gray-100 p-1 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </li>
  );
};

export default TodoItems;
