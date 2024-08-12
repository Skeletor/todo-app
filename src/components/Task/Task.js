import { useState } from 'react'
import { PropTypes } from 'prop-types'
import './Task.css'

const Task = (props) => {
    const [ currentText, setCurrentText ] = useState(props.description)
    const [ editing, setEditing ] = useState(props.editing)
    const [ completed, setCompleted ] = useState(props.completed)

    const { creationDate } = props

    const onCheckBoxClick = () => {
        const isAboutToBeCompleted = !completed
        setCompleted(isAboutToBeCompleted)
        props.onComplete(isAboutToBeCompleted);
    }

    const onEditButtonClick = () => setEditing(true)

    const onInputChange = (e) => {
        const value = e.target.value
        setCurrentText(value)
    }

    const onEditingFinished = () => {
        setEditing(false)
        props.onEdit(currentText)
    }

    let classNames = []
    if (completed)
        classNames.push('completed')

    if (editing)
        classNames.push('editing')

    classNames = classNames.join(' ')

    return (
        <li className={ classNames }>
            <div className='view'>
                <input  className='toggle'
                        type='checkbox' 
                        checked={ completed }
                        value={ completed }
                        onChange={ onCheckBoxClick } />

                <label>
                    <span className='description'>{ currentText }</span>
                    <span className='created'>{ creationDate }</span>
                </label>

                <button className='icon icon-edit' onClick={ onEditButtonClick }></button>
                <button className='icon icon-destroy' onClick={ props.onDeleted }></button>
            </div>

            <input  type='text' className='edit' autoFocus
                    value={ currentText }
                    onChange={ onInputChange }
                    onBlur={ onEditingFinished }
                    onKeyDown={ (e) => {
                        if (e.code === 'Enter') {
                            onEditingFinished()
                        }
                    } }>
            </input>
        </li>
    );
}

Task.propTypes = {
    completed: PropTypes.bool,
    editing: PropTypes.bool,
    currentText: PropTypes.string
}

export default Task
