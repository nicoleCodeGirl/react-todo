import React from "react";

const todoList = [
    { id: 1, title: 'Complete assignment' },
    { id: 2, title: 'Buy groceries' },
    { id: 3, title: 'Go for a run' },
  ];

function TodoList() {
  return (
    <ul>
    {todoList.map((item) => (
      <li key={item.id}>{item.title}</li>
    ))}
  </ul>
  );
}

export default TodoList;
