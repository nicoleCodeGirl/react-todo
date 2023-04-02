import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
    { id: 1, title: 'Complete assignment' },
    { id: 2, title: 'Buy groceries' },
    { id: 3, title: 'Go for a run' },
  ];

function TodoList() {
  return (
    <ul>
    {todoList.map((item) => (
      <TodoListItem key={item.id} todo={item}/>
    ))}
  </ul>
  );
}

export default TodoList;