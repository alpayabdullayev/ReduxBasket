import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from '../features/calculator/calculatorSlice';
import todoReducer from '../features/todos/todoSlice';
import averageReducer from '../features/average/averageSlice';
import countReducer from '../features/count/countSlice';
import todosReducer2 from '../features/todos2/todosSlice2';
import basketReducer from '../features/basket/basketSlice';

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    todos: todoReducer,
    average : averageReducer,
    counter: countReducer,
    todos2 : todosReducer2,
    basketS:basketReducer
    
  },
});
