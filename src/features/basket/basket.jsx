import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBasket,deleteBasket } from './basketSlice';

const Basket = () => {
  const basket = useSelector((state) => state.basketS.value);
  const dispatch = useDispatch();
  const [prodcut, setProduct] = useState([])

  async function getProducts() {
    try {
      const response = await fetch('https://northwind.vercel.app/api/categories');
      const data = await response.json();
        setProduct(data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);


  function handleBasket(item) {
    dispatch(addBasket(item))
  }
  function removeBasketitems(id) {
    dispatch(deleteBasket(id))
  }

  return (
    <>
      {prodcut.map((item) => (
        <ul key={item.id}>
          <li>{item.name}</li>
          <button onClick={()=>handleBasket(item)}>addbasket</button>
        </ul>
      ))}



      {
        basket.map((item)=>(
            <>
            <div>{console.log(item)}</div>
            <ul key={item.id} >
                <li>{item.name}</li>
                <li>{item.count}</li>
                <button onClick={()=>removeBasketitems(item.id)}>delete</button>
            </ul>

            </>
        ))
      }
      
    </>
  );
};

export default Basket;
