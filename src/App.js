import React from 'react';

const todoList = [
  { id: 1, title: 'Complete assignment' },
  { id: 2, title: 'Buy groceries' },
  { id: 3, title: 'Go for a run' },
];

function App() {
  return (

    <div>
    <h1>Todo List</h1>
    <ul>
        {todoList.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
  </div>

  );
}

export default App;
