// basketSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBasket: (state, action) => {
      const elementIndex = state.value.findIndex((x) => x.id === action.payload.id);
      if (elementIndex === -1) {
        state.value.push({ ...action.payload, count: 1 });
      } else {
        state.value[elementIndex].count += 1;
      }
    },
    deleteBasket:(state,action)=>{
        state.value = state.value.filter((x)=>x.id !== action.payload)
    },
    getTotal:(state,action)=>{
        state.value = state.value.filter((x)=>x.id !== action.payload)
    }
  },
});

export const { addBasket,deleteBasket } = basketSlice.actions;
export default basketSlice.reducer;
