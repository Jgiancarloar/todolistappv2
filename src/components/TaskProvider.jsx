import React, { useState, useContext } from 'react'

const taskContext = React.createContext();

export function useTaskContext() {
    return useContext(taskContext)
}

export const TaskProvider = (props) => {

    const [tasks, setTasks] = useState([])
    const [id, setId] = useState("")
    const [task, setTask] = useState("")
    const [edit, setEdit] = useState(false)

    const addTask = (e) => {
        e.preventDefault();
        if([task].includes("")){
            alert("please, enter a task!")
            return
        }
        setTasks([...tasks, {
            id: window.crypto.randomUUID(),
            task,
            done: false
        }])
        setTask("")
    }

    const editTask = (item) => {
        setId(item.id)
        setTask(item.task)
        setEdit(true)
    }

    const saveEdit = (e) => {
        e.preventDefault();
        const newTasks = tasks.map(t => t.id === id ? {...t, id, task } : t)
        setTasks(newTasks)
        setTask("")
        setEdit(false)
    }

    const handleDelete = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
    }

    const toggleTask = (id) => {
        setTasks(
            tasks.map(t => (t.id == id) ? { ...t, done: !t.done } : t)
        )
    }

    const cleanAll = () => {
        setTasks([])
    }

    const data = { tasks, setTasks, id, setId, task, setTask, edit, setEdit, addTask, saveEdit, toggleTask, handleDelete,editTask,cleanAll }

    return (
        <taskContext.Provider value={data}>
            {props.children}
        </taskContext.Provider>
    )
}