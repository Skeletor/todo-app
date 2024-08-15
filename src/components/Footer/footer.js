
import { useContext } from 'react'

import ActiveTodoCountContext from '../../context/active-todo-count-context'
import DeleteCompletedContext from '../../context/delete-completed-context'
import TodoFilters from '../TodoFilters/todo-filters'

import './footer.css'

const Footer = (props) => {
    const activeTasks = useContext(ActiveTodoCountContext)
    const deleteCompleted = useContext(DeleteCompletedContext)

    const itemsLeftString = (activeTasks === 1 ? 'item' : 'items') + ' left'

    return (
        <footer className='footer'>
            <span className="todo-count">{ activeTasks } { itemsLeftString }</span>

            <TodoFilters onChangeFilter={ props.onChangeFilter }/>

            <button className="clear-completed"
                    onClick={ deleteCompleted }>
                        Clear completed
            </button>
        </footer>
    )
}

export default Footer