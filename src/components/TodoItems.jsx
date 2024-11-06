import React from "react";
import Checkbox from '@mui/material/Checkbox';
const TodoItems = ({ todo, toggleTodo, deleteTodo }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <li
      className={`flex justify-between transition duration-200 ease-in hover:scale-105 items-center p-3 rounded-lg shadow-md ${todo.completed ? "bg-gray-200" : "bg-white"
        } hover:bg-gray-100 transition-colors duration-200`}
    >
      <div className="flex items-center gap-3">
        <Checkbox {...label} color="default" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
        <div className="flex flex-col space-y-1">
          <span
            className={`text-lg font-medium ${todo.completed ? "line-through text-gray-500" : "text-zinc-800"
              }`}
          >
            {todo.text}
          </span>
          <span className="text-sm text-zinc-400">
            {todo.completed ? "Done ✅" : "In Progress 🎯"}
          </span>
        </div>
      </div>

      <span className="text-xs text-zinc-400 italic ml-15">
        {todo.timestamp}
      </span>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="p-2 rounded-full bg-gray-200 hover:bg-rose-500 hover:text-white transition-colors duration-200"
        aria-label="Delete todo"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
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
