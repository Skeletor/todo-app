
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import './Header.css'

const Header = (props) => {
    return (
        <div>
            <header className='header'>
                <h1>Todos</h1>
                <NewTaskForm onAddTask={ props.onAddTask }/>
            </header>
        </div>
    );
}

export default Header;