import { Component } from 'react'
import { PropTypes } from 'prop-types'
import './Task.css'

export default class Task extends Component {
    
    state = {
        completed: this.props.completed,
        editing: this.props.editing,
        currentText: this.props.description
    }

    static defaultProps = {
        completed: false,
        editing: false,
    }

    static propTypes = {
        completed: PropTypes.bool,
        editing: PropTypes.bool,
        currentText: PropTypes.string
    }

    onEditButtonClick = () => {
        this.setState((state) => {
            return {
                editing: true
            }
        })
    }

    onInputChange = (e) => {
        const value = e.target.value
        this.setState({
            currentText: value
        })
    }

    onEditingFinished = () => {
        this.setState((state) => {
            return {
                editing: false
            }
        })

        this.props.onEdit(this.props.id, this.state.currentText);
    }

    onCheckBoxClick = () => {        
        this.setState((state) => {
            return {
                completed: !state.completed
            }
        });

        // !this.state.completed  потому что setState асинхронный... мда
        this.props.onComplete(this.props.id, !this.state.completed);
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
            <li className={ classNames }>
                <div className='view'>
                    <input className='toggle'
                             type='checkbox' 
                             checked={ completed }
                             value={ completed }
                             onChange={ this.onCheckBoxClick } />
                    <label>
                        <span className='description'>{ this.props.description }</span>
                        <span className='created'>{ this.props.creationDate }</span>
                    </label>
                    <button className='icon icon-edit' onClick={ this.onEditButtonClick }></button>
                    <button className='icon icon-destroy' onClick={ this.props.onDeleted }></button>
                </div>
                <input type='text' className='edit' autoFocus
                        value={ this.state.currentText }
                        onChange={ this.onInputChange }
                        onBlur={ this.onEditingFinished }
                        onKeyDown={ (e) => {
                            if (e.code === 'Enter') {
                                this.onEditingFinished()
                            }
                        } }></input>
            </li>
        );
    }
}

