import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { getTasks } from '../services/tasks.api';

export function TasksList() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        async function loadTasks(){
            const res = await getTasks();
            console.log(res);
            setTasks(res.data);
        }

        loadTasks();
    },[]);

    return (
        <div>
            <h1>Tasks List</h1>
            {tasks.map(task => (
                <div key={task.id}>
                    <h1>{task.title}</h1>
                    <p>{task.descrption}</p>
                    <p>{moment(task.creation_date).format('DD/MM/YYYY')}</p>
                    <p>{task.completed}</p>

                </div>

            ))}
        </div>
    );
}
