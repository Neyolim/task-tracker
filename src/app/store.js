import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/ToDo/todoSlice";

export const store = configureStore({
    reducer: todoReducer,
});