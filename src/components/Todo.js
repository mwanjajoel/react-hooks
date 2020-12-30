import React from 'react';
import '../App.css';

function Todo(props) {
    return(
        <div className="todo">
            {props.todo.text}
        </div>

    )


}

export default Todo