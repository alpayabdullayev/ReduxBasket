

import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = {
    value: 0
}

const averageSlice = createSlice({
    name:"average",
    initialState,
    reducers:{
        calcAverage:(state,action)=>{
            state.value = (parseInt(action.payload.num1) + parseInt(action.payload.num2)) / 2
        }
    }

})

export const {calcAverage} = averageSlice.actions

export default averageSlice.reducer