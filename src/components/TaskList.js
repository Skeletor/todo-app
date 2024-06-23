
import { Component } from 'react';

import Task from './Task'
//import { formatDistanceToNow } from "date-fns";
//creationDate={formatDistanceToNow(props.list[0].creationDate)}

import './TaskList.css'

export default class TaskList extends Component {

    render() {
        const items = this.props.list.map((item) => {

            return (
                <Task key={item.id}
                    id={item.id}
                    description={item.description} 
                    completed={item.completed}
                    editing={item.editing} 
                    creationDate={item.creationDate}
                    onDeleted={() => this.props.onDeleted(item.id)} 
                    onComplete={this.props.onComplete}/>
            )
        });

        return (
            <div>
                <ul className='todo-list'>
                    { items }
                </ul>
            </div>
        );
    }
    
}

