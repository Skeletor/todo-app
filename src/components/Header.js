
import NewTaskForm from './NewTaskForm';
import './Header.css'

const Header = (props) => {
    return (
        <div>
            <header className='header'>
                <h1>Todos</h1>
                <NewTaskForm />
            </header>
        </div>
    );
}

export default Header;