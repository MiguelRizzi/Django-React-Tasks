import moment from 'moment';

export function TaskCard({ task }) {
    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.descrption}</p>
            <p>{moment(task.creation_date).format('DD/MM/YYYY')}</p>
            <p>{task.completed}</p>
            <hr/>
        </div>)
    }