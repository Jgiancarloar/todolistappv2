import React, { useEffect, useState } from 'react'
import { useTaskContext } from './TaskProvider'
import Task from './Task';

function List() {

    const { tasks, setTasks, cleanAll } = useTaskContext();

    useEffect(() => {
        let data = localStorage.getItem("tasks")
        if (data) {
            setTasks(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    let notCompleted = tasks.filter(task => task.done === false);
    let completed = tasks.filter(task => task.done === true);

    return (
        <div className='my-2'>
            <div>
                {notCompleted.length > 0 ? <p className='text-verde-oscuro font-bold'>Not completed {notCompleted.length}</p> : ""}
                {notCompleted.map(item => (
                    <Task key={item.id} item={item} />
                ))}
            </div>
            <div>
                {completed.length > 0 ? <p className='text-rojo-oscuro font-bold'>Completed {completed.length}</p> : ""}
                {completed.map(item => (
                    <Task key={item.id} item={item} />
                ))}
            </div>
            <p className='text-center'>You have {notCompleted.length} tasks pending.</p>
            {completed.length > 0 ? <p className='text-center'>You have {completed.length} tasks completed.</p> : ""}
            <button
                className={tasks.length > 0 ? 'bg-marron py-2 px-5 mt-4 rounded-md mx-auto block font-bold text-piel' : 'hidden'}
                onClick={cleanAll}>
                Clean All
            </button>
        </div>
    )
}

export default List