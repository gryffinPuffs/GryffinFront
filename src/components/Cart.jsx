import React, { useState, useEffect } from "react";
import { deleteProductInCart, getActiveCartByUsername } from "./api-adapter";

const Cart = ({ user, setUser, theCart, setTheCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  console.log(user, "look here");

  useEffect(() => {
    async function getUserCart() {
      const userCart = await getActiveCartByUsername(user.username);
      setTheCart(userCart.products);
    }
    getUserCart();
  }, []);

  async function handleDeleteCartItem(event) {
    event.preventDefault();
    const toDelete = event.target.id;
    const token = localStorage.getItem("token");
    const deleted = await deleteProductInCart(toDelete);
    const cartList = userCart.products.filter((product) => {
      return product.id !== deleted.id;
    });
    const cartCopy = { ...theCart };
    cartCopy = cartList;
    setTheCart(cartCopy);
  }

  function price(product, quantity) {
    const thePrice = (product * quantity) / 100;
    return thePrice;
  }
  function subOne() {
    if (quantity <= 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  }

  console.log(theCart, "should be a cart");
  return (
    <div id="cart">
      <h2>CART</h2>
      {theCart && theCart.length ? (
        theCart.map((product) => {
          return (
            <div className="cartProds" key={`products-${product.id}`}>
              <div>{product.name}</div>
              <div>Price: ${price(product.price, quantity)}</div>
              <div>{quantity}</div>

              <button onClick={() => setQuantity(quantity + 1)}>+</button>
              <button onClick={() => subOne()}>-</button>
              <button id={product.id} onClick={handleDeleteCartItem}>
                Delete item
              </button>
            </div>
          );
        })
      ) : (
        <h2>Nothing in cart yet. Find some books!</h2>
      )}
      <h2>Total: {totalPrice}</h2>
    </div>
  );
};

export default Cart;
