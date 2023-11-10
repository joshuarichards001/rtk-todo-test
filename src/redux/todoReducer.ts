import { createReducer } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, toggleTodo } from "./todoActions";

export const todoReducer = createReducer<ITodo[]>([], (builder) =>
  builder
    .addCase(addTodo, (state, action) => {
      state.push(action.payload);
    })
    .addCase(toggleTodo, (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      
      if (todo) {
        todo.completed = !todo.completed;
      }
    })
    .addCase(deleteTodo, (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    })
);
