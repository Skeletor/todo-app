
import { useState } from 'react';

import './NewTaskForm.css'

const NewTaskForm = (props) => {

    const [ text, setText ] = useState('')

    const onInputChange = (e) => setText(e.target.value)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text.trim())
            return

        props.onAddTask(text)
        setText('')
    }

    return (
    <>
        <form onSubmit={ onSubmit }>
                <input  className="new-todo" 
                        placeholder="What needs to be done?" 
                        autoFocus
                        type="text"
                        onChange={ onInputChange }
                        value={ text }>
                </input>
            </form>
    </>
    )
}

export default NewTaskForm;