import React, { useState, useEffect } from "react";
import { getInactiveCartByUsername } from "./api-adapter";



const OrderHistory = ({user}) => {
  const [oldOrders, setOldOrders]= useState([])

  useEffect(() => {
    async function getUserCart() {
      console.log(user, "should be the user")
      const userCarts = await getInactiveCartByUsername(user.username);
      setOldOrders(userCarts)
      console.log(userCarts, "are these carts?")

    }
getUserCart()

  }, []);

  return (
    <div id="OrderHistory">
      <h2> Your order history</h2>
      {oldOrders.length ? (
        oldOrders.map((cart)=>{
          return(
            <div id="order" key={`order-${cart.id}`}>
              {console.log(cart.products, "check this out")}
              {cart.products.length ? (cart.products.map((prod)=>{
                return(
                <div id="prod" key={`prod-${prod.id}`}>
                  {console.log(prod, "whats this")}

                  <img src={prod.image_url} alt="book image" className="oldBooks"></img>
                  <div>{prod.name}</div>
                  <div>Quantity:{prod.quantity}</div>

                </div>)
              })):(<h1>hi</h1>)}
            </div>
          )
        })
      ):(<h2>No past orders yet</h2>)}

    </div>
  );
};

export default OrderHistory;
