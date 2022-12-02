import React, { useState, useEffect } from "react";
import { getActiveCartByUsername } from "./api-adapter";

const Cart = ({ user, setUser, theCart, setTheCart }) => {
  const [quantity, setQuantity]=useState(1)

  useEffect(() => {
    async function getUserCart() {
      const userCart = await getActiveCartByUsername(user.username);
      setTheCart(userCart.products);
    }
    getUserCart();
  }, []);


function price(product, quantity){
  const thePrice= (product * quantity)/100
  return thePrice
}
function subOne(){
if (quantity<=1){setQuantity(1)}
else
  {setQuantity(quantity - 1)}
}

console.log(theCart, "should be a cart")
  return (
    <div id="cart">
      <h2>CART</h2>
      {theCart && theCart.length ?
      theCart.map((product)=>{
        return(<div className="cartProds" key={`products-${product.id}`}>
          <div>{product.name}</div>
          <div>Price: ${price(product.price, quantity)}</div>
          <div>{quantity}</div>

          <button onClick={() => setQuantity(quantity + 1) }>
        +
      </button>
      <button onClick={() => subOne()}>
        -
      </button>
      <button>Delete item</button>
          </div>
        )
      }): <h2>Nothing in cart yet. Find some books!</h2> }
    </div>
  );
};

export default Cart;
