import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: "abc",
      task: "Demo-task",
      isDone: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    markAsDone: (state, action) => {
      // Correct way: return a new array from map
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone }; // Toggle isDone
        }
        return todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;
export default todoSlice.reducer;