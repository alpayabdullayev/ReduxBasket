import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

const TodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.value = state.value.filter(x => x.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      const elementIndex = state.value.findIndex(todo => todo.id === action.payload.id);
      state.value[elementIndex] = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
