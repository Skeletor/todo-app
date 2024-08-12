import TaskFilter from '../TaskFilter/TaskFilter'
import './Footer.css'

const Footer = (props) => {
    const wordSuffix = props.remainingTaskCount === 1 ? 'item' : 'items'

    return (
        <div className='footer'>
            <span className='todo-count'>
                { props.remainingTaskCount } { wordSuffix } left
            </span>

            <TaskFilter changeFilter={ props.changeFilter }/>
            
            <button className='clear-completed'
                    onClick={ props.onDeleteCompleted }>
                        Clear completed
            </button>
        </div>
    )
}

export default Footer;