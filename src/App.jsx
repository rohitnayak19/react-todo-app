import React, { useEffect } from "react";
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos))
      } catch (error) {
        console.error("Error parseing todos from localStorage", error)
      }
    }
  }, []);

  useEffect(() => {
    if (todos.length) {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    const updatedTodo = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodo);
    localStorage.setItem('todos', JSON.stringify(updatedTodo))
  };

  return (
    <>
      <h1 className="text-white font-semibold text-lg bg-zinc-800 p-2 text-center">
        Todo app
      </h1>
      <div className="h-screen flex justify-center mt-1 w-full">
        <div className=" w-[450px] h-fit border rounded-md m-1">
          <AddTodo addTodo={addTodo} />
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </>
  );
};

export default App;
