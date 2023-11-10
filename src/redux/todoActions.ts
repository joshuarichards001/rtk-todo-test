import { createAction } from "@reduxjs/toolkit";

export const addTodo = createAction<ITodo>("ADD_TODO");
export const toggleTodo = createAction<number>("TOGGLE_TODO");
export const deleteTodo = createAction<number>("DELETE_TODO");
