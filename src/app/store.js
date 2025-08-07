import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/ToDo/ToDoSlice.js";

export const store = configureStore({
    reducer: todoReducer,
});