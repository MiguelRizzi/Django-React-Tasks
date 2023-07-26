import moment from 'moment';
import { useNavigate } from "react-router-dom";

export function TaskCard({ task }) {
    const navigate = useNavigate()
    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.descrption}</p>
            <p>{moment(task.creation_date).format('DD/MM/YYYY')}</p>
            <p>{task.completed}</p>
            <button onClick={() => navigate(`/tasks/${task.id}`)}>Editar</button>
            <hr/>
        </div>)
    }