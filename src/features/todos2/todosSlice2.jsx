import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState =  {
    value:[]
}

const TodosSlice2 = createSlice({
    name: "todos2",
    initialState,
    reducers: {
      addTodo: (state, action) => {
        state.value.push({ text: action.payload.text, id: action.payload.id });
      },
      deleteTodo: (state, action) => {
        console.log(action.payload);
        state.value = state.value.filter((x) => x.id !== action.payload);
      },
      editTodo: (state, action) => {
        const elementIndex = state.value.findIndex((x) => x.id === action.payload.id);
        state.value[elementIndex] = action.payload;
      },
    },
  });

export const { addTodo, deleteTodo, editTodo } = TodosSlice2.actions;

export default TodosSlice2.reducer
