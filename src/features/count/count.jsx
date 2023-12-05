import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './countSlice'

const Count = () => {
    const count = useSelector(state=>state.counter.value)
    const dispatch = useDispatch()

    function handleIncrement(params) {
        dispatch(increment())
    }

    function handleDecrement() {
        dispatch(decrement())
    }


  return (
    <>
    
    <button onClick={handleIncrement}>+</button>
    <button onClick={handleDecrement}>-</button>
    <h1>{count}</h1>
    </>
  )
}

export default Count
