import React, { useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

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

  // function to add todos
  const addTodo = text => {

    const newTodos = [...todos, { text }]
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  )


}

export default App;