import React, { useState, useEffect } from "react";
import { getInactiveCartByUsername } from "./api-adapter";

const OrderHistory = ({ user }) => {
  const [oldOrders, setOldOrders] = useState([]);

  useEffect(() => {
    async function getUserCart() {
      const userCarts = await getInactiveCartByUsername(user.username);
      setOldOrders(userCarts);
    }
    getUserCart();
  }, []);

  return (
    <div id="OrderHistory">
      <h2> Your order history</h2>
      {oldOrders.length ? (
        oldOrders.map((cart) => {
          return (
            <div id="order" key={`order-${cart.id}`}>
              {cart.products.length ? (
                cart.products.map((prod) => {
                  return (
                    <div id="prod" key={`prod-${prod.id}`}>
                      <img
                        src={prod.image_url}
                        alt="book image"
                        className="oldBooks"
                      ></img>
                      <div>{prod.name}</div>
                      <div>Quantity:{prod.quantity}</div>
                    </div>
                  );
                })
              ) : (
                <h1>hi</h1>
              )}
            </div>
          );
        })
      ) : (
        <h2>No past orders yet</h2>
      )}
    </div>
  );
};

export default OrderHistory;
