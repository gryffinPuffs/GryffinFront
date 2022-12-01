import React, { useState, useEffect } from "react";
import { getActiveCartByUsername } from "./api-adapter";

const Cart = ({user, setUser}) => {
  const [theCart, setTheCart]=useState({})
  console.log(user, "here user")

useEffect(()=>{
  async function getUserCart(){
    const userCart = await getActiveCartByUsername(user.username);
    console.log(userCart, "usercart")
    setTheCart(userCart);
  }
  getUserCart();
}, []);
console.log(theCart)
  return (
    <div id="cart">
      <h2> I am cart</h2>
    </div>
  );
};

export default Cart;
