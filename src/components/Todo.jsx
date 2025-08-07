import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "../features/ToDo/ToDoSlice";
import "../Todo.css";

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const clickHandler = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleMarkAsDone = (id) => {
        dispatch(markAsDone(id));
    };

    return (
        <div className="todo-container">
            <h3>Todo List App</h3>
            <AddForm />
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <div
                            style={{
                                textDecoration: todo.isDone ? "line-through" : "none",
                                display: "flex",
                                alignItems: "center",
                                flexGrow: 1,
                            }}
                        >
                            <input
                                type="checkbox"
                                checked={todo.isDone}
                                onChange={() => handleMarkAsDone(todo.id)}
                            />
                            {todo.task}
                        </div>
                        <button onClick={() => clickHandler(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}