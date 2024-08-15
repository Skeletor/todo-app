
import { useState, useEffect } from 'react'
import { formatDistanceToNow } from 'date-fns'

import './todo.css'

const Todo = (props) => {
    const [currentText, setCurrentText] = useState(props.text)
    const [editing, setEditing] = useState(false)
    const [completed, setCompleted] = useState(props.completed)
    const [seconds, setSeconds] = useState(props.seconds)
    const [shouldTimerRun, setShouldTimerRun] = useState(true)

    const timer = shouldTimerRun ? setTimeout(() => setSeconds(seconds + 1), 1000) : null
    useEffect(() => () => clearTimeout(timer), [timer])

    const { id, text, creationDate, shouldHide } = props

    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds - minutes * 60 

    const li = document.getElementById(`${id}`)
    const playButton = li?.querySelector('button.icon-play')
    const stopButton = li?.querySelector('button.icon-pause')

    const onCheckBoxClick = () => {
        const isAboutToBeCompleted = !completed

        toggleTimer()
        setCompleted(isAboutToBeCompleted)
        props.onComplete(isAboutToBeCompleted)
    }

    const startTimer = () => {
      playButton?.classList.add('hidden')
      stopButton?.classList.remove('hidden')
      setShouldTimerRun(true)
    }

    const stopTimer = () => {
      playButton?.classList.remove('hidden')
      stopButton?.classList.add('hidden')
      setShouldTimerRun(false)
    }

    const toggleTimer = () => shouldTimerRun ? stopTimer() : startTimer()

    const onInputChange = (e) => {
      const value = e.target.value
      setCurrentText(value)
    }

    const onInputBlur = (e) => {
      setEditing(false)
      setCurrentText(text)
    }

    const onInputKeyDown = (e) => {
      if (e.code === 'Enter') {
        setEditing(false)

        const value = e.target.value
        props.onEdit(value)
      }
    }

    let liClassnames = []
    
    if (completed)
        liClassnames.push('completed')

    if (editing)
        liClassnames.push('editing')

    if (shouldHide)
      liClassnames.push('hidden')

    liClassnames = liClassnames.join(' ')

    return (
        <li id={ id } className={ liClassnames }>
            <div className="view">
              <input className="toggle"
                     type="checkbox"
                     onChange={ onCheckBoxClick }
                     value={ completed } />
              <label>
                <span className="title">{ text }</span>

                <span className="description">
                  <button className="icon icon-play hidden"
                          style={{ marginRight: '10px' }}
                          onClick={ startTimer }></button>

                  <button className="icon icon-pause"
                          style={{ marginRight: '10px' }}
                          onClick={ stopTimer }></button>

                  { minutes }m { remainingSeconds }s
                </span>

                <span className="description">{ formatDistanceToNow(creationDate, {
                  addSuffix: true,
                  includeSeconds: true
                }) }</span>
              </label>
              <button className="icon icon-edit"
                      onClick={ () => setEditing(true) }></button>
              <button className="icon icon-destroy"
                      onClick={ props.onDelete }></button>
            </div>

            <input className='edit'
                   type='text'
                   autoFocus
                   value={ currentText }
                   onChange={ onInputChange }
                   
                   onBlur={ onInputBlur }
                   onKeyDown={ onInputKeyDown } />
        </li>
    )
}

export default Todo