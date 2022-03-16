import React, { useState } from 'react'

function TodoForm() {

    const [input, setInput] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div>
            <form onsubmit={handleSubmit}>
                <input type="text"
                    placeholder='Add a todo'
                    value={input}
                    name="todo"
                    className='todo'></input>

                <button className='add-todo'>Add Todo</button>
            </form>
        </div>
    )
}

export default TodoForm