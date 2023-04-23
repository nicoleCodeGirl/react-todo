import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from './AddTodoForm';

// Above the App functional component, create a new function named useSemiPersistentState which will be a custom hook
function useSemiPersistentState() {
  // Cut (copy/remove) the useState and useEffect hooks from App into useSemiPersistentState
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("savedTodoList")) || []);

  // define a useEffect hook with todoList as a dependency
  useEffect(() => {
    // inside the side-effect handler function, save the todoList inside localStorage with the key "savedTodoList"
    // Update your side-effect function to convert todoList to a string before saving in localStorage
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]); // specify todoList as a dependency of the useEffect hook

  // Add a return statement in useSemiPersistentState that returns the todoList state variable and setter in an Array (just like how it's returned from the useState hook)
  return [todoList, setTodoList];
}

function App() {
  // Update App to use the new custom hook
  const [todoList, setTodoList] = useSemiPersistentState();

  function addTodo (newTodo){
    setTodoList([...todoList, newTodo]);
  }

  return (
    // update the JSX to use a Fragment
    <>
      <h1>ToDo List</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
