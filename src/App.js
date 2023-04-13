import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from './AddTodoForm';

function App() {
// const [newTodo, setNewTodo] = useState('');
const [todoList, setTodoList] = useState([]); // add a new state variable for todoList

function addTodo (newTodo){
  setTodoList([...todoList, newTodo]); // call setTodoList and use the spread operator to add newTodo to the existing todoList array
  }

return (

   <div>
     <h1>ToDo List</h1>
     <AddTodoForm onAddTodo={addTodo}/>
     {/* <p>{}</p> */}
     <TodoList todoList={todoList} /> {/* pass todoList state as a prop named todoList to the TodoList component */}
   </div>

  );
}

export default App;