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
  ])


}

export default App;