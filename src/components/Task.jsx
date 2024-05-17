import React from 'react'
import { MdEdit, MdDelete } from "react-icons/md";
import { useTaskContext } from './TaskProvider';

function Task({ item }) {

    const { task, done, id } = item;

    const { toggleTask, handleDelete, editTask } = useTaskContext();

    return (
        <div className={done ? "bg-rojo-claro my-2 rounded-lg py-1 px-2 w-80 flex flex-row justify-between items-center brak-all" :
            "bg-verde-claro my-2 rounded-lg py-1 px-2 w-80 flex flex-row justify-between items-center"}>
            <div className='w-full flex overflow-auto'>
                <input
                    className='mr-1'
                    type="checkbox"
                    checked={done}
                    onChange={() => toggleTask(id)} />
                <p className={done ? "line-through break-all" : "break-all"}>{task}</p>
            </div>
            <div className='w-12 my-2 mr-1  flex flex-row items-center justify-between'>
                <MdEdit size={20} onClick={() => editTask(item)} />
                <MdDelete size={20} onClick={() => handleDelete(id)} />
            </div>
        </div>
    )
}

export default Task