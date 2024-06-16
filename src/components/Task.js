
import { Component } from 'react'

import './Task.css'

export default class Task extends Component {
    
    state = {
        completed: false,
        editing: this.props.editing,
    }

    onCheckBoxClick = () => {
        this.setState((state) => {
            return {
                completed: !state.completed
            }
        });
    }

    render() {

        let classNames = []
        const { completed, editing } = this.state
        
        if (completed)
            classNames.push('completed')

        if (editing)
            classNames.push('editing')

        classNames = classNames.join(' ')

        return (
            <li className={classNames}>
                <div className='view'>
                    <input className='toggle' type='checkbox' onClick={ this.onCheckBoxClick }/>
                    <label>
                        <span className='description'>{ this.props.description }</span>
                        <span className='created'>{ this.props.creationDate }</span>
                    </label>
                    <button className='icon icon-edit'></button>
                    <button className='icon icon-destroy' onClick={this.props.onDeleted}></button>
                </div>
                <input type="text" className="edit" value="Editing task"></input>
            </li>
        );
    }
}

