

import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
const initialState = {
    value : 0
}

const CountSlice = createSlice({
    name:"count",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value +=1
        },
        decrement:(state)=>{
            state.value -=1
        }
    }

})

export const {increment,decrement} = CountSlice.actions

export default CountSlice.reducer
