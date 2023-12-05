import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, cixma, multi, bolme } from "./calculatorSlice";

const Calculator = () => {
  const calc = useSelector((state) => state.calculator.value);
  const dispatch = useDispatch();

  const [number1, setnumber1] = useState("");
  const [number2, setnumber2] = useState("");

  function handleClickAdd() {
    dispatch(add({ num1: number1, num2: number2 }));
  }
  function handleCixma() {
    dispatch(cixma({ num1: number1, num2: number2 }));
  }
  function handleBolme() {

    console.log(number2);
    console.log(calc);
    console.log(number1);
    if (number2 === 0) {

      alert("0 bolme yoxdur");
    } else {
      dispatch(bolme({ num1: number1, num2: number2 }));
    }
  }

  return (
    <>
      <input type="number" onChange={(e) => setnumber1(e.target.value)} />
      <input type="number" onChange={(e) => setnumber2(e.target.value)} />

      <button onClick={handleClickAdd}>+</button>
      <button onClick={handleCixma}>-</button>
      <button onClick={() => dispatch(multi({ num1: number1, num2: number2 }))}>
        *
      </button>
      <button onClick={handleBolme}>/</button>
      <h1>{calc}</h1>
    </>
  );
};

export default Calculator;
