import React from "react";
import TodoItems from "./TodoItems";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="space-y-2 w-full max-w-md p-3">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItems
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))
      ) : (
        <p className="text-center text-gray-500 mt-10">No tasks found</p>
      )}
    </ul>
  );
};

export default TodoList;
