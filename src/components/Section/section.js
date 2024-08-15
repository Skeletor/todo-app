import { useState } from 'react'

import Footer from '../Footer/footer'
import TodoList from '../TodoList/todo-list'

import './section.css'

const Section = (props) => {
    const [currentFilter, setCurrentFilter] = useState(() => () => true)

    return (
        <section className='main'>
            <TodoList currentFilter={ currentFilter }/>
            <Footer onChangeFilter={ (filter) => setCurrentFilter(() => filter) }/>
        </section>
    )
}

export default Section