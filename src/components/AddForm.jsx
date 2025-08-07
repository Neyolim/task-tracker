import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTodo } from '../features/ToDo/ToDoSlice';
import "../Todo.css"


export default function AddForm() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const submitHandler = (evt) => {
        evt.preventDefault();
        dispatch(addTodo(task));
        setTask("");
    };

    return (
        <div>
            <form onSubmit={submitHandler} className="add-form">
                <input
                    type="text"
                    value={task} 
                    onChange={(e) => setTask(e.target.value)}
                />
                <button>Add Task</button>
            </form>
        </div>
    );
}