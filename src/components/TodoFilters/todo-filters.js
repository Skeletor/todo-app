
import './todo-filters.css'

const TodoFilters = (props) => {
    const changeFilterHandler = (e, newFilter) => {
        const classSelected = 'selected'
        const currentButton = e.currentTarget
        if (currentButton.classList.contains(classSelected))
            return

        const activeButton = document.querySelector(`.filters button.${classSelected}`)
        activeButton.classList.remove(classSelected)
        currentButton.classList.add(classSelected)

        props.onChangeFilter(newFilter)
    }

    return (
        <ul className="filters">
            <li>
                <button className="selected"
                        onClick={ (e) => changeFilterHandler(e, () => true)}>
                            All
                </button>
            </li>

            <li>
                <button onClick={ (e) => changeFilterHandler(e, (item) => !item.completed)}>
                    Active
                </button>
            </li>

            <li>
                <button onClick={ (e) => changeFilterHandler(e, (item) => item.completed)}>
                    Completed
                </button>
            </li>
        </ul>
    )
}

export default TodoFilters