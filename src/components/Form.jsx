import React from 'react'
import { useTaskContext } from './TaskProvider';

const Form = () => {

    const data = useTaskContext();
    const { task, setTask, addTask, edit, saveEdit } = data;

    return (
        <div className='flex flex-col items-center'>
            <h1 className='font-semibold text-2xl my-2'>TODO LIST</h1>
            <form onSubmit={edit ? saveEdit : addTask}>
                <input
                    className='bg-piel w-80 py-1 px-3 border-2 border-marron rounded-lg place placeholder:text-marron focus:outline-none'
                    type="text"
                    placeholder='Enter your new task ...'
                    value={task}
                    onChange={(e) => setTask(e.target.value)} />
            </form>

        </div>
    )
}

export default Form