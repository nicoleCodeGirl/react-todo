import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      title: todoTitle,
      id: Date.now(),
    };
    onAddTodo(newTodo);
    setTodoTitle(""); // reset the todoTitle state variable to an empty string
  };

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        name="todoTitle" 
        value={todoTitle} 
        onChange={handleTitleChange}
        autoFocus={true}>
        Title
    </InputWithLabel>

      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
