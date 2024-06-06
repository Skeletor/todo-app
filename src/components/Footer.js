
import TaskFilter from './TaskFilter';
import './Footer.css'

const Footer = (props) => {
    return (
        <div className='footer'>
            <span className='todo-count'>1 item left</span>
            <TaskFilter />
            <button className='clear-completed'>Clear completed</button>
        </div>
    );
}

export default Footer;