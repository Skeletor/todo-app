import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header/header'
import Section from './components/Section/section'

import TodoListContext from './context/todo-list-context';
import ActiveTodoCountContext from './context/active-todo-count-context';
import DeleteCompletedContext from './context/delete-completed-context';
import EditTodoContext from './context/edit-todo-context';
import SetCompletedContext from './context/set-completed-context';
import DeleteTodoContext from './context/delete-todo-context';

import { copy } from './service/copy';

import './index.css'

let id = 1

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (text, minutes, seconds) => {
    const todo = {
      id: id++,
      creationDate: new Date(),
      text: text,
      completed: false,
      seconds: minutes * 60 + seconds,
    }

    const newTodos = copy(todos)
    newTodos.push(todo)
    setTodos(newTodos)
  }

  const deleteTodo = (id) => modifyTodo(id)

  const editTodo = (id, newText) => {
    const index = todos.findIndex((todo) => todo.id === id)
    const todo = copy(todos[index])
    todo.text = newText
    modifyTodo(id, todo)
  }

  const setCompleted = (id, completed) => {
    const todo = todos.find((todo) => todo.id === id)
    if (!todo)
      return

    const todoCopy = copy(todo)
    todoCopy.completed = completed
    modifyTodo(id, todoCopy)
  }

  const modifyTodo = (id, newItem) => {
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

  const deleteCompleted = () => {
    const todosCopy = copy(todos)
    const filtered = todosCopy.filter((todo) => !todo.completed)
    setTodos(filtered)
  }

  const countActiveTodos = () => todos.reduce((prev, current) => prev + Number(!current.completed), 0)

  return (
    <TodoListContext.Provider value={ todos }>
      <ActiveTodoCountContext.Provider value={ countActiveTodos() }>
        <DeleteCompletedContext.Provider value={ deleteCompleted }>
          <EditTodoContext.Provider value={ editTodo }>
            <SetCompletedContext.Provider value={ setCompleted }>
              <DeleteTodoContext.Provider value={ deleteTodo }>

                <section className='todoapp'>
                  <Header onAddTodo={ addTodo } />
                  <Section />
                </section>

              </DeleteTodoContext.Provider>
            </SetCompletedContext.Provider>
          </EditTodoContext.Provider>
        </DeleteCompletedContext.Provider>
      </ActiveTodoCountContext.Provider>
    </TodoListContext.Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
