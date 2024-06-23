import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header';
import Section from './components/Section';

import './index.css'

export default class App extends Component {

  id = 1;
  
  state = {
    todos: [  
      { 
        id: this.id++,
        description: 'Completed task',
        creationDate: 'created 5 sec ago',
        completed: true,
        editing: false,
      },
      {
        id: this.id++,
        description: 'Editing task',
        creationDate: 'created 10 sec ago',
        completed: false,
        editing: true,
      },
      { 
        id: this.id++,
        description: 'Active task',
        creationDate: 'created yday',
        completed: false,
        editing: false,
      }
    ]
  }

  deleteTask = (id) => {

    this.setState((state) => {

      const todos = state.todos
      const index = todos.findIndex((todo) => todo.id === id)
      const newState = todos.toSpliced(index, 1)

      return {
        todos: newState
      }
    })
  }

  deleteCompleted = () => {

    this.setState((state) => {
      return {
        todos: state.todos.filter((el) => !el.completed)
      }
    })
  }

  setCompleted = (id, completed) => {

    this.setState((state) => {

      const index = state.todos.findIndex((el) => el.id === id)
      const task = { ...state.todos[index], completed };
      const todos = state.todos.toSpliced(index, 1, task)

      return {
        todos: todos
      }
    })
  }

  addTask = (text) => {

    this.setState((state) => {

      const todos = state.todos
      const task = {
        id: this.id++,
        description: text,
        creationDate: 'created now',
        completed: false,
        editing: false
      }

      return {
        todos: [...todos, task]
      }
    })
  }
  
  render () {
    return (
    <div className='todoapp'>
      <Header onAddTask={(text) => this.addTask(text)} />
      <Section list={this.state.todos}
              onDeleted={(id) => this.deleteTask(id)} 
              onDeleteCompleted={() => this.deleteCompleted()}
              onComplete={(id, completed) => this.setCompleted(id, completed)} />
    </div>
    );
  
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
