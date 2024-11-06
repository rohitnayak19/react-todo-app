import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };
  return (
    <div className="flex items-center gap-4 p-2 rounded-lg shadow-sm">
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        id="standard-basic"
        label="Add Task"
        variant="standard"
        className="w-full"
        InputProps={{
          className: 'text-zinc-800',
        }}
        InputLabelProps={{
          className: 'text-zinc-500',
        }}
      />

      <button
        className="bg-green-500 text-white rounded-full p-3 transition-transform duration-200 ease-out hover:bg-green-600 hover:scale-110 focus:ring-2 focus:ring-green-300 focus:outline-none"
        onClick={handleAddTodo}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>


  );
};

export default AddTodo;
