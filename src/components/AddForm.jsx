import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTodo } from '../features/ToDo/ToDoSlice';

export default function AddForm() {
    const [task, setTask ] = useState("");
    const dispatch = useDispatch();

    const submitHandler = (evt) => {
        evt.preventDefault();
        dispatch(addTodo(task));
    }
  return (
    <div>
        <form onSubmit={submitHandler} >
            <input type="text" onChange={(e)=> setTask(e.target.value)} /> &nbsp;&nbsp;
            <button>Add Task</button>
        </form>
    </div>
  )
}
