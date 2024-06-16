
import TaskList from './TaskList';
import Footer from './Footer';
import './Section.css'

const Section = (props) => {

    return (
        <div className='main'>
            <TaskList list={props.list} onDeleted={props.onDeleted} />
            <Footer />
        </div>
    );
}

export default Section;