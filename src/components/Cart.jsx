import React, { useState, useEffect } from "react";
import { getActiveCartByUsername } from "./api-adapter";

const Cart = ({user, setUser}) => {
  const [theCart, setTheCart]=useState([])
  console.log(user, "here user")

useEffect(()=>{
  async function getUserCart(){
    const userCart = await getActiveCartByUsername(user.username);
    console.log(userCart, "usercart!!!")
    setTheCart(userCart.products);
  }
  getUserCart();
}, []);
function price(product, quantity){
  const thePrice= (product * quantity)/100
  return thePrice
}

console.log(theCart, "should be a cart")
  return (
    <div id="cart">
      <h2>CART</h2>
      {theCart && theCart.length ?
      theCart.map((product)=>{
        return(<div className="cartProds" key={`products-${product.id}`}>
          <div>{product.name}</div>
          <div>Price: ${price(product.price, product.quantity)}</div>
          <div>{product.quantity}</div>
          </div>
        )
      }): <h2>Nothing in cart yet. Find some books!</h2> }
    </div>
  );
};

export default Cart;
