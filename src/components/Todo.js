import React from 'react';
import '../App.css';

function Todo(props) {
    return(
        <div className="todo">
            {props.todo.text}
            <button type="checkbox" style={{ textDecoration: props.todo.isCompleted ? 'line-through': ''}}></button>
        </div>

    )


}

export default Todo