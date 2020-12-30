import React from 'react';
import '../App.css';

function Todo({todo, index, completedTodo}) {
    return(
        <div className="todo" style={{ textDecoration: todo.isCompleted ? 'line-through': ''}}>
            {todo.text}
            <div>
            <button onClick={() => completedTodo(index)}>Complete</button>
            </div>
        </div>

    )


}

export default Todo