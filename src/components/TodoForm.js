import React, { useState } from 'react';

function ToDoForm(props) {

    const [value, setValue] = useState('');

    // function that handles the submitted values
    const handleSubmit = e => {
        e.preventDefault()

        // we do not want to submit empty values
        if(!value) return;

        // add the to do. addTodo is a property
        props.addTodo(value);

        // clear the form state 
        setValue('');

    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" 
            className="input" 
            value={value} 
            placeholder="Input a new to do"
            onChange={e => setValue(e.target.value)} />
        </form>
    )

}

export default ToDoForm;