
import './TaskFilter.css'

const TaskFilter = (props) => {
    const changeFilterHandler = (e) => {
        const classSelected = 'selected'
        const currentButton = e.currentTarget
        if (currentButton.classList.contains(classSelected))
            return

        const activeButton = document.querySelector(`.filters button.${classSelected}`)
        activeButton.classList.remove(classSelected)

        currentButton.classList.add(classSelected)
    }

    return (
        <div>
            <ul className='filters'>
                <li>
                    <button className='selected' onClick={(e) => {
                        changeFilterHandler(e)
                        props.changeFilter(() => true)
                        }}>
                            All
                    </button>
                </li>
                
                <li>
                    <button onClick={(e) => {
                        changeFilterHandler(e)
                        props.changeFilter((item) => !item.completed)
                        }}>
                            Active
                    </button>
                </li>

                <li>
                    <button onClick={(e) => {
                        changeFilterHandler(e)
                        props.changeFilter((item) => item.completed)
                        }}>
                            Completed
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default TaskFilter