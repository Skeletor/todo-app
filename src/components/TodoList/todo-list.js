
import { useContext } from 'react'

import Todo from '../Todo/todo'

import TodoListContext from '../../context/todo-list-context'
import EditTodoContext from '../../context/edit-todo-context'
import SetCompletedContext from '../../context/set-completed-context'
import DeleteTodoContext from '../../context/delete-todo-context'

import './todo-list.css'

const TodoList = (props) => {
    const todos = useContext(TodoListContext)
    const edit = useContext(EditTodoContext)
    const setCompleted = useContext(SetCompletedContext)
    const deleteTodo = useContext(DeleteTodoContext)

    const { currentFilter } = props

    const items = todos.map((todo) => {
        const shouldHide = !currentFilter(todo)

        return <Todo key={ todo.id }
                     id={ todo.id }
                     text={ todo.text }
                     creationDate={ todo.creationDate }
                     seconds={ todo.seconds }
                     shouldHide={ shouldHide }
                     onEdit={ (text) => edit(todo.id, text)}
                     onComplete={ (completed) => setCompleted(todo.id, completed) }
                     onDelete={ () => deleteTodo(todo.id) } />
    })

    return (
        <ul className='todo-list'>
            { items }
        </ul>
    )
}

export default TodoList