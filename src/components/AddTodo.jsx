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
    <div className="flex gap-5 p-5">
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        id="standard-basic"
        label="Add Task"
        variant="standard"
        className="w-full"
      />
      <button
        className="bg-green-400 text-white rounded-full p-3 transition duration-75 ease-linear hover:scale-105"
        onClick={handleAddTodo}
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
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
};

export default AddTodo;
