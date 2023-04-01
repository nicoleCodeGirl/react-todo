// import React from 'react';
// import TodoList from "./TodoList";
// import AddTodoForm from './AddTodoForm';



// function App() {
//   return (

//     <div>
//     <h1>Todo List</h1>
//     <TodoList />
//     <AddTodoForm />
//   </div>

//   );
// }

// export default App;


import React, { useState } from 'react';
import TodoList from "./TodoList";
import AddTodoForm from './AddTodoForm';

function App() {
const [newTodo, setNewTodo] = useState("");

return (
  <div>
  <h1>Todo List</h1>
  <TodoList />
  <AddTodoForm onAddTodo={(todoTitle) => setNewTodo(todoTitle)} />
  <p>{newTodo}</p>
  </div>
  );
  }
  
  export default App;