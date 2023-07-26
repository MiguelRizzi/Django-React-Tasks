import { useEffect} from 'react';
import { getTasks } from '../services/tasks.api';

export function TasksList() {
    useEffect(() => {
        function loadTasks(){
            const res = getTasks();
            console.log(res);
        }

        loadTasks();
    },[]);

    return (
        <div>
            <h1>Tasks List</h1>
        </div>)
}