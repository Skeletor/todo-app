
import { Component } from 'react';

import './NewTaskForm.css'

export default class NewTaskForm extends Component {
    
    state = {
        text: ''
    }
    
    onInputChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        if (!this.state.text.trim())
            return

        this.props.onAddTask(this.state.text)
        this.setState({
            text: ''
        });
    }

    render() {
        return (
            <form onSubmit={ this.onSubmit }>
                <input className="new-todo" 
                        placeholder="What needs to be done?" 
                        autoFocus
                        type="text"
                        onChange={ this.onInputChange }
                        value={ this.state.text }></input>
            </form>
        );
    }
}
