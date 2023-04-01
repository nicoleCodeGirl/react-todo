import React, { useState } from "react";

function AddTodoForm() {
const [title, setTitle] = useState("");

const handleAddTodo = (event) => {
event.preventDefault();
const todoTitle = event.target.elements.todoTitle.value;
console.log(todoTitle);
setTitle("");
};

return (
<form onSubmit={handleAddTodo}>
<label htmlFor="todoTitle">Title</label>
<input type="text" id="todoTitle" name="todoTitle" value={title} onChange={(e) => setTitle(e.target.value)} />
<button type="submit">Add</button>
</form>
);
}

export default AddTodoForm;