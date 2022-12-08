import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  createCart,
  getActiveCartByUsername,
  getAddressById,
  updateCart,
} from "./api-adapter";

const ConfirmationPage = ({ user, theCart, setTheCart, totalPrice }) => {
  const [address, setAddress] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserCart() {
      const userCart = await getActiveCartByUsername(user.username);
      setTheCart(userCart.products);
    }
    !theCart.length && getUserCart();
  }, []);

  useEffect(() => {
    async function gettingAddress() {
      const userAddress = await getAddressById(user.address_id);
      console.log(userAddress);
      setAddress(userAddress);
    }
    gettingAddress();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await updateCart(user.cart.id, user.id, false);
      await createCart(user.id);
      navigate("/checkout");
    } catch (error) {}
  }

  return (
    <div id="ConfirmationPage">
      {user ? (
        <h1>
          {" "}
          {user.name[0].toUpperCase() + user.name.substring(1)} does everything
          look right?
        </h1>
      ) : null}
      <div id="cartConfir">
        <h2> Cart total: {(totalPrice / 100).toFixed(2)}</h2>
        {theCart && theCart.length ? (
          theCart.map((product) => {
            return (
              <div className="ConfProds" key={`products-${product.id}`}>
                <img
                  className="cartprodimg"
                  src={product.image_url}
                  alt="book image"
                ></img>
                <div>{product.name} </div>
                <div>Quantity:{product.quantity}</div>
              </div>
            );
          })
        ) : (
          <h2>Your cart is empty</h2>
        )}
      </div>
      <div>
        <h2>Shipping to:</h2>
        <div id="addressConfi">
          {user ? (
            <div>{user.name[0].toUpperCase() + user.name.substring(1)}</div>
          ) : null}

          <div>{address.address_line1}</div>
          <div>{address.address_line2}</div>
          <div>
            {address.city}, {address.state} {address.zip_code}
          </div>
        </div>
      </div>
      <button className="Chbutton" onClick={handleSubmit}>
        Submit Order
      </button>
    </div>
  );
};

export default ConfirmationPage;
