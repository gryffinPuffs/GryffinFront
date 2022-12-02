import React, { useState, useEffect } from "react";
import {
  deleteProductInCart,
  getActiveCartByUsername,
  addItemToCart,
} from "./api-adapter";

const Cart = ({ user, setUser, theCart, setTheCart }) => {
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
    const cartList = theCart.filter((product) => {
      return product.cartProductId !== deleted.id;
    });
    setTheCart(cartList);
  }

  function totalItem(product, quantity) {
    const thePrice = (product * quantity) / 100;
    return thePrice;
  }

  async function cartChange(itemId, quantity, price, e) {
    console.log(itemId, price, quantity, e);
    if (quantity < 1) {
      handleDeleteCartItem(e);
    } else {
      const productToAdd = await addItemToCart(
        user.cart.id,
        itemId,
        price,
        quantity
      );
      let alreadyInCart = false;
      const cart = theCart.map((product) => {
        if (product.cartProductId == productToAdd.id) {
          alreadyInCart = true;
          return { ...product, quantity: productToAdd.quantity };
        } else {
          return product;
        }
      });
      if (alreadyInCart) {
        setTheCart(cart);
      } else {
        setTheCart([...cart, productToAdd]);
      }
    }
  }
  return (
    <div id="cart">
      <h2>CART</h2>
      {theCart && theCart.length ? (
        theCart.map((product) => {
          return (
            <div className="cartProds" key={`products-${product.id}`}>
              <div>{product.name}</div>
              <div>
                Total Price This Item: $
                {totalItem(product.price, product.quantity)}
              </div>
              <div>Price of Book: {product.price}</div>
              <div>{product.quantity}</div>

              <button
                id={product.id}
                onClick={(e) =>
                  cartChange(
                    e.target.id,
                    product.quantity + 1,
                    product.price,
                    e
                  )
                }
              >
                +
              </button>
              <button
                disabled={product.quantity == 1}
                id={product.id}
                onClick={(e) =>
                  cartChange(
                    e.target.id,
                    product.quantity - 1,
                    product.price,
                    e
                  )
                }
              >
                -
              </button>
              <button id={product.cartProductId} onClick={handleDeleteCartItem}>
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
