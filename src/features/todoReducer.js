import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      text: "попросить принести воду",
      done: false,
    },
    {
      text: "попросить стаканчики",
      done: true,
    },
    {
      text: "выполнить заново первые дела",
      done: false,
    },
  ],
};

export const add = createAction("add");
export const remove = createAction("remove");
export const completed = createAction("completed");

const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("add", (state, action) => {
      state.todos.unshift({
        text: action.payload,
        done: false,
      });
    })
    .addCase("remove", (state, action) => {
      state.todos = state.todos.filter(
        (item, index) => index !== action.payload
      );
    })
    .addCase("completed", (state, action) => {
      state.todos[action.payload].done = !state.todos[action.payload].done;
    });
});

export default todoReducer;
