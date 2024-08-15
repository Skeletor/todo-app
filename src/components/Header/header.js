import { useState } from 'react'

import './header.css'

const Header = (props) => {
    const [text, setText] = useState('')
    const [minutes, setMinutes] = useState('')
    const [seconds, setSeconds] = useState('')

    const { onAddTodo } = props
    const maxDigitLength = 2

    const onSubmit = (e) => {
        e.preventDefault()

        const numMinutes = Number(minutes)
        const numSeconds = Number(seconds)
        const canSubmit = Boolean(text.trim()) && numMinutes >= 0 && numSeconds >= 0

        if (!canSubmit)
            return

        onAddTodo(text.trim(), numMinutes, numSeconds)

        setText('')
        setMinutes('')
        setSeconds('')
    }

    const onInputChange = (e) => setText(e.target.value)

    const onMinutesChange = (e) => {
        sliceDigits(e.target)
        setMinutes(e.target.value)
    }

    const onSecondsChange = (e) => {
        sliceDigits(e.target)
        setSeconds(e.target.value)
    }

    const sliceDigits = (target) => target.value = target.value.slice(0, maxDigitLength)

    return (
        <header className='header'>
            <h1>todos</h1>

            <form className='new-todo-form' onSubmit={ onSubmit }>
                <input className="new-todo"
                       placeholder="Task"
                       autoFocus
                       value={ text }
                       onChange={ onInputChange } />

                <input className="new-todo-form__timer"
                       placeholder="Min"
                       autoFocus
                       type='number'
                       maxLength={ maxDigitLength }
                       onChange={ onMinutesChange }
                       value={ minutes } />

                <input className="new-todo-form__timer"
                       placeholder="Sec"
                       autoFocus
                       type='number'
                       maxLength={ maxDigitLength }
                       onChange={ onSecondsChange }
                       value={ seconds } />

                <button type='submit' />
            </form>
        </header>
    )
}

export default Header