import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header/Header'
import Section from './components/Section/Section'

import { copy } from './service/copy'

import './index.css'

let id = 1

const App = () => {
  const [todos, setTodos] = useState([])

  const deleteTask = (id) => modifyTask(id)

  const editTask = (id, newText) => {
    const index = todos.findIndex((todo) => todo.id === id)
    const todo = copy(todos[index])
    todo.description = newText
    modifyTask(id, todo)
  }

  const addTask = (text) => {
    const newTask = {
      id: id++,
      description: text,
      creationDate: new Date(),
      editing: false,
      completed: false
    }

    const newTodos = copy(todos)
    newTodos.push(newTask)
    setTodos(newTodos)
  }

  const deleteCompleted = () => {
    const todosCopy = copy(todos)
    const filtered = todosCopy.filter((todo) => !todo.completed)
    setTodos(filtered)
  }

  const setCompleted = (id, completed) => {
    const todo = todos.find((todo) => todo.id === id)
    if (!todo)
      return

    const todoCopy = copy(todo)
    todoCopy.completed = completed
    modifyTask(id, todoCopy)
  }

  const modifyTask = (id, newItem) => {
    const newTodos = copy(todos)
    const index = newTodos.findIndex((todo) => todo.id === id)

    if (index === -1)
      return

    if (!newItem)
      newTodos.splice(index, 1)
    else
      newTodos.splice(index, 1, newItem)
    
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Header onAddTask={ addTask } />
      <Section list={ todos }
              onDeleted={ deleteTask } 
              onDeleteCompleted={ deleteCompleted }
              onComplete={ setCompleted } 
              onEdit={ editTask } />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
