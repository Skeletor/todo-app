
import Task from '../Task/Task'
import { formatDistanceToNow } from "date-fns"

import './TaskList.css'

const TaskList = (props) => {

    const items = props.list.map((item) => {
        return (
            <Task key={ item.id }
                  id={ item.id }
                  description={ item.description } 
                  completed={ item.completed }
                  editing={ item.editing } 
                  creationDate={ formatDistanceToNow(item.creationDate, {
                    addSuffix: true,
                    includeSeconds: true
                }) }
                onDeleted={ () => props.onDeleted(item.id) } 
                onComplete={ (completed) => props.onComplete(item.id, completed) }
                onEdit={ (text) => props.onEdit(item.id, text) } />
        )
    })

    return (
        <div>
            <ul className='todo-list'>
                    { items }
                </ul>
        </div>
    )
}

export default TaskList
