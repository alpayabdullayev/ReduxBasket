

import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = {
        value:0
}

const CalculatorSlice = createSlice({
    name:"calculator",
    initialState,
    reducers:{
        add:(state,action)=>{
            state.value = parseInt(action.payload.num1) + parseInt(action.payload.num2)
        },
        cixma:(state,action)=>{
            state.value = parseInt(action.payload.num1) - parseInt(action.payload.num2)
        },
        multi:(state,action)=>{
            state.value = parseInt(action.payload.num1) * parseInt(action.payload.num2)
        },
        bolme:(state,action)=>{
            state.value = parseInt(action.payload.num1) / parseInt(action.payload.num2)
        }
    }
})


export const {add,cixma,multi,bolme} = CalculatorSlice.actions

export default CalculatorSlice.reducer