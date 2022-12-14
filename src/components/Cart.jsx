import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteProductInCart,
  getActiveCartByUsername,
  addItemToCart,
} from "./api-adapter";


const Cart = ({
  user,
  setUser,
  theCart,
  setTheCart,
  totalPrice,
  setTotalPrice,
  loggedIn,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserCart() {
      const userCart = await getActiveCartByUsername(user.username);

      let runningTotal = 0;
      userCart.products.forEach((element) => {
        runningTotal += element.price * element.quantity;
      });
      setTotalPrice(runningTotal);
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
    setTotalPrice(totalPrice - deleted.price * deleted.quantity);
    setTheCart(cartList);
  }

  function totalItem(product, quantity) {
    const thePrice = ((product * quantity) / 100).toFixed(2);
    return thePrice;
  }

  async function cartChange(itemId, quantity, price, e) {
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
          if (product.quantity < productToAdd.quantity) {
            setTotalPrice(totalPrice + product.price);
          }
          if (product.quantity > productToAdd.quantity) {
            setTotalPrice(totalPrice - product.price);
          }
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
  function handleSubmitConfirmation() {
    setTotalPrice(totalPrice);
    navigate("/confirmationpage");
  }
  return (
    <div id="cart">
      {loggedIn ? (
        <>
          <h2 id="cartTitle">Your Cart</h2>
          {theCart && theCart.length ? (
            theCart.map((product) => {
              return (
                <div className="cartProds" key={`products-${product.id}`}>
                  <img
                    className="cartprodimg"
                    src={product.image_url}
                    alt="book image"
                  ></img>
                  <div>{product.name}</div>
                  <div>
                    Total Price This Item: $
                    {totalItem(product.price, product.quantity)}
                  </div>
                  <div>Price of Book: {(product.price / 100).toFixed(2)}</div>
                  <div>{product.quantity}</div>
                  <div>
                    <button
                      className="qButton"
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
                      className="qButton"
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
                    <button
                      className="Cbutton"
                      id={product.cartProductId}
                      onClick={handleDeleteCartItem}
                    >
                      Delete item
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <>
              <h2>Nothing in cart yet. Find some books!</h2>
            </>
          )}
        </>
      ) : (
        <>
          <h2>Please log in to see cart</h2>
          <button
            className="shopButtons"
            onClick={() => {
              navigate("/login");
            }}
          >
            Log In
          </button>
        </>
      )}

      <h2>Total: ${(totalPrice / 100).toFixed(2)}</h2>

      {loggedIn && theCart.length ? (
        <button className="Chbutton" onClick={handleSubmitConfirmation}>
          Checkout
        </button>
      ) : null}
    </div>
  );
};

export default Cart;
