

function AddTodoForm(props) {

    const handleAddTodo = (event) => {
        event.preventDefault();
        const todoTitle = event.target.elements.todoTitle.value;
        console.log(todoTitle);
        event.target.reset();
        props.onAddTodo(todoTitle);
    };

    return (
        <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title</label>
        <input type="text" id="todoTitle" name="title" />
        <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;