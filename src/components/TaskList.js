
import { Component } from 'react';

import Task from './Task'
//import { formatDistanceToNow } from "date-fns";
//creationDate={formatDistanceToNow(props.list[0].creationDate)}

import './TaskList.css'

export default class TaskList extends Component {

    state = {
        
    }
    


    render() {
        const items = this.props.list.map((item) => {
            
            return (
                //<li className={classNames}>
                    <Task key={item.id}
                        description={item.description} 
                        completed={item.completed}
                        editing={item.editing} 
                        creationDate={item.creationDate}
                        onDeleted={() => this.props.onDeleted(item.id)} />
                    //<input type="text" className="edit" value="Editing task"></input>
                //</li>
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

