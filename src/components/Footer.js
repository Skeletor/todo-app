
import TaskFilter from './TaskFilter';
import './Footer.css'

const Footer = (props) => {
    return (
        <div className='footer'>
            <span className='todo-count'>
                {props.remainingTaskCount} item{props.remainingTaskCount !== 1 ? `s` : ''} left
            </span>
            <TaskFilter changeFilter={props.changeFilter}/>
            <button className='clear-completed'
                    onClick={() => props.onDeleteCompleted()}>Clear completed</button>
        </div>
    );
}

export default Footer;