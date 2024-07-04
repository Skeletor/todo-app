
import TaskList from './TaskList';
import Footer from './Footer';
import { Component } from 'react';

import './Section.css'

export default class Section extends Component {

    state = {
        filteredTodos: this.props.list,
        currentFilter: 'all'
    }

    changeFilter = (filter) => {
        
        const filteredTodos = this.filterTodos(filter)

        this.setState({
            filteredTodos: filteredTodos,
            currentFilter: filter
        })
    }

    filterTodos = (filter) => {
        let filteredTodos;

        if (filter.toLowerCase() === 'all') {
            filteredTodos = this.props.list
        } else if (filter.toLowerCase() === 'active') {
            filteredTodos = this.props.list.filter((el) => !el.completed)
        } else {
            filteredTodos = this.props.list.filter((el) => el.completed)
        }

        return filteredTodos;
    }

    static getDerivedStateFromProps(props, state) {
        let filteredTodos;
        const currentFilter = state.currentFilter.toLowerCase()

        if (currentFilter === 'all') {
            filteredTodos = props.list
        } else if (currentFilter === 'active') {
            filteredTodos = props.list.filter((el) => !el.completed)
        } else {
            filteredTodos = props.list.filter((el) => el.completed)
        }

        return {
            filteredTodos: filteredTodos
        }
    }

    render() {
        return (
            <div className="main">
                <TaskList list={ this.state.filteredTodos } 
                        onDeleted={ this.props.onDeleted } 
                        onComplete={ this.props.onComplete }
                        onEdit={ this.props.onEdit } />

                <Footer remainingTaskCount={ this.props.list.reduce((prev, current) => {
                    return current.completed ? prev : prev + 1
                }, 0) }
                        changeFilter={ (filter) => this.changeFilter(filter) } 
                        onDeleteCompleted={ this.props.onDeleteCompleted }/>
            </div>
        );
    }
}
