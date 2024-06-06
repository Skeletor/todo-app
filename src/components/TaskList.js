
import Task from './Task'
import { formatDistanceToNow } from "date-fns";
//creationDate={formatDistanceToNow(props.list[0].creationDate)}

import './TaskList.css'

const TaskList = (props) => {

    return (
        <div>
            <ul className='todo-list'>
                <li className='completed'>
                    <Task description={props.list[0].description}
                    creationDate={"created 17 seconds ago"} />
                </li>

                <li className='editing'>
                    <Task description={props.list[1].description}
                    creationDate={"created 5 minutes ago"} />
                    <input type="text" class="edit" value="Editing task"></input>
                </li>

                <li>
                    <Task description={props.list[2].description}
                    creationDate={"created 5 minutes ago"} />
                </li>
            </ul>
        </div>
    );
}

export default TaskList;