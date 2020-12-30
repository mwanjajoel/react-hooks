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

  // function to mark a to do as completed 
  const completedTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos)


  }

  // function to remove todo
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} index={index} completedTodo={completedTodo} removeTodo={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  )


}

export default App;