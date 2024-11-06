import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
const TodoItems = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className={`flex justify-between items-center p-3 rounded-lg shadow-md ${todo.completed ? 'bg-gray-200' : 'bg-white'} hover:bg-gray-100 transition-colors duration-200`}>
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="cursor-pointer h-5 w-5 text-green-500 rounded focus:ring-0"
        />
        <div className="flex flex-col gap-1">
          <span
            className={`text-lg font-medium ${todo.completed ? "line-through text-gray-500" : "text-zinc-800"}`}
          >
            {todo.text}
          </span>
          <span className="text-sm text-zinc-400">
            {todo.completed ? "Done ✅" : "In Progress 🎯"}
          </span>
        </div>
      </div>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="p-2 rounded-full bg-gray-200 hover:bg-rose-500 hover:text-white transition-colors duration-200"
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
