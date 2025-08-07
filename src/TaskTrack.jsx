 import React, { useState } from 'react';
import './ToDo.css';

function ToDo() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTasks = () => {
        if (inputValue.trim() !== '') {
            setTasks([...tasks, { text: inputValue, done: false }]);
            setInputValue('');
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const toggleTaskDone = (index) => {
        const newTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, done: !task.done };
            }
            return task;
        });
        setTasks(newTasks);
    };

    return (
        <div className="container">
            <h1>Task Tracker </h1>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter a task to do"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button onClick={addTasks}>Add</button>
            </div>
            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li key={index} className={task.done ? 'completed' : ''}>
                        <div>
                            <input
                                type="checkbox"
                                checked={task.done}
                                onChange={() => toggleTaskDone(index)}
                            />
                            <span>{task.text}</span>
                        </div>
                        <button className="delete-button" onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDo;
