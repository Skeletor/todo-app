
import TaskList from '../TaskList/TaskList';
import Footer from '../Footer/Footer';
import { useState, useEffect } from 'react';

import { copy } from '../../service/copy';

import './Section.css'

const Section = (props) => {
    const [ filteredTodos, setFilteredTodos ] = useState(props.list)
    const [ currentFilterFunc, setCurrentFilterFunc ] = useState(() => () => true)

    const filterTodos = (filterFunc) => {
        const newFilteredTodos = copy(props.list).filter(filterFunc)

        setCurrentFilterFunc(() => filterFunc)
        setFilteredTodos(newFilteredTodos)
    }

    useEffect(() => {
        filterTodos(currentFilterFunc)
    }, [ props.list ])

    return (
        <div className='main'>
                <TaskList list={ filteredTodos } 
                          onDeleted={ props.onDeleted } 
                          onComplete={ props.onComplete }
                          onEdit={ props.onEdit } />

                <Footer remainingTaskCount={ props.list.reduce((prev, current) => {
                    return current.completed ? prev : prev + 1
                }, 0) }
                        changeFilter={ filterTodos } 
                        onDeleteCompleted={ props.onDeleteCompleted }/>
            </div>
    )
}

export default Section