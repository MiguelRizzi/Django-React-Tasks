import React, { useState, useEffect } from 'react';
import { getTasks } from '../services/tasks.api';
import { TaskCard } from './TaskCard';

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
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
}
