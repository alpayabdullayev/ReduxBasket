import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcAverage } from "./averageSlice";

const Average = () => {
  const averageValue = useSelector((state) => state.average.value);
  const dispatch = useDispatch();

  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");


  function handleAverage() {
    dispatch(calcAverage({ num1: number1, num2: number2 }))
  }
  return (
    <>
      <input type="number" onChange={(e) => setNumber1(e.target.value)} />
      <input type="number" onChange={(e) => setNumber2(e.target.value)} />

      <button onClick={handleAverage}>average</button>

      <h1>{averageValue}</h1>
    </>
  );
};

export default Average;
