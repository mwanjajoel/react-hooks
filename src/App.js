import React, { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([
    {
      text: 'Learn about Hooks',
      isCompleted: true
    }, 
    {
      text: 'I think hooks are important',
      isCompleted: false
    }
  ]);

  return (
    <div className="app">
      <div className="todo">
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
      </div>
    </div>
  )


}

export default App;