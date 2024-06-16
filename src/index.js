import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header';
import Section from './components/Section';

import './index.css'

export default class App extends Component {

  state = {
    todos: [  
      { 
        id: 1,
        description: 'Completed task',
        creationDate: 'created 5 sec ago',
        completed: true,
        editing: false,
      },
      {
        id: 2,
        description: 'Editing task',
        creationDate: 'created 10 sec ago',
        completed: false,
        editing: true,
      },
      { 
        id: 3,
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
  
  render () {
    return (
    <div className='todoapp'>
      <Header />
      <Section list={this.state.todos} onDeleted={(id) => this.deleteTask(id)}/>
    </div>
    );
  
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
