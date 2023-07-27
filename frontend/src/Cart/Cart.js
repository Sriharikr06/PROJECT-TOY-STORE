import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../Home/FrontPage/Navbar';
import { cartProducts, removeCart } from '../Redux/actions/action';
import "../Home/All.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cart() {

  const prod=useSelector(state=>state)
  const dispatch=useDispatch()
  const source=prod.allProducts.cartProduct;
  const[total,setTotal]=useState(0);
  useEffect(()=>{
    // source.map((product)=>
    // setTotal(total=>total+product.dprice))
    setTotal(6998);
  },[])
  console.log(localStorage.getItem("lists"));
  
  return (
    <div>
        <NavBar/>
      <div className='main'>
      <ToastContainer/>
        {source.map((product)=>
          <div className='box' key={product.id}>
            <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
              <img src={product.link} className='image'></img>
              <div className='pri'>
                  <p id='name'>{product.name}</p>
                  <p id='price'> ₹{product.price}</p>
                  <p id='dprice'> ₹{product.dprice}</p>
                  <p id='dprice'> (Save {product.save}%)</p>
                </div>
                </div>
              <div className='flip-box-back'>
                <p>{product.desc}</p>
                <button type='button' class='bag' 
                  onClick={()=>{
                    dispatch(removeCart(product))
                    setTotal(total=>2999)
                    toast.error("Removed successfully")
                  }}
                  >Remove from cart</button>
              </div>
              </div>
          </div>
          </div>
        )}
      </div>
          {/* <div className='cartprice'>
          <h1>
            
            Total Price:{total}
            </h1>
        </div> */}
    </div>
  )
}