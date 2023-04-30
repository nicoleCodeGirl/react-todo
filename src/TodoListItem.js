import React from "react";

function TodoListItem({ todo, onRemoveTodo }) {
  const handleRemoveTodo = () => {
    onRemoveTodo(todo.id);
  };

  return (
    <div>
      <li>{todo.title}</li>
      <button type="button" onClick={handleRemoveTodo}>
        Remove
      </button>
    </div>
  );
}

export default TodoListItem;
