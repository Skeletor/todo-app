
import { Component } from 'react'
import './TaskFilter.css'

export default class TaskFilter extends Component {

    changeFilterHandler = (e) => {
        const classSelected = 'selected'
        const currentButton = e.currentTarget
        if (currentButton.classList.contains(classSelected))
            return

        const activeButton = document.querySelector(`.filters button.${classSelected}`)
        activeButton.classList.remove(classSelected)

        currentButton.classList.add(classSelected)
    }

    render() {
        return (
            <div>
                <ul className='filters'>
                    <li>
                        <button className='selected' onClick={(e) => {
                            this.changeFilterHandler(e);
                            this.props.changeFilter('All')
                            }}>All</button>
                    </li>
                    
                    <li>
                        <button onClick={(e) => {
                            this.changeFilterHandler(e);
                            this.props.changeFilter('Active')
                            }}>Active</button>
                    </li>

                    <li>
                        <button onClick={(e) => {
                            this.changeFilterHandler(e);
                            this.props.changeFilter('Completed')
                            }}>Completed</button>
                    </li>
                </ul>
            </div>
        );
    }
}
