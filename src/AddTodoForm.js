import React, { useState } from "react";

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
<label htmlFor="todoTitle">Title</label>
<input
     type="text"
     id="todoTitle"
     name="title"
     value={todoTitle}
     onChange={handleTitleChange}
   />
<button type="submit">Add</button>
</form>
);
}

export default AddTodoForm;