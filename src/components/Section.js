
import TaskList from './TaskList';
import Footer from './Footer';
import './Section.css'

const Section = () => {
    const list = [
        {
            description: 'Completed task',
        },
        {
            description: 'Editing task',
        },
        {
            description: 'Active task'
        }
    ];

    return (
        <div className='main'>
            <TaskList list={list} />
            <Footer />
        </div>
    );
}

export default Section;