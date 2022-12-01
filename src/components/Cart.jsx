import React, { useState, useEffect } from "react";
import { getActiveCartByUsername } from "./api-adapter";

const Cart = ({ user, setUser, theCart, setTheCart }) => {
  useEffect(() => {
    async function getUserCart() {
      const userCart = await getActiveCartByUsername(user.username);
      console.log(userCart, "usercart!!!");
      setTheCart(userCart.products);
    }
    getUserCart();
  }, []);

  console.log(theCart, "should be a cart");
  return (
    <div id="cart">
      <h2>CART</h2>
      {theCart && theCart.length ? (
        theCart.map((product) => {
          return (
            <div className="cartProds" key={`products-${product.id}`}>
              <div>{product.name}</div>
              <div>{product.price}</div>
            </div>
          );
        })
      ) : (
        <h2>Nothing in cart yet. Find some books!</h2>
      )}
    </div>
  );
};

export default Cart;
