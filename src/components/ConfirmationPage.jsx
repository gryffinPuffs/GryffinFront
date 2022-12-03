
import React, {useState, useEffect} from "react";
import { getActiveCartByUsername } from "./api-adapter";



const ConfirmationPage = ({user, theCart, totalPrice}) => {
  console.log(totalPrice, "price")

  useEffect(() => {
    async function getUserCart() {
      const userCart = await getActiveCartByUsername(user.username);

    }
    getUserCart();
  }, []);

  return (
    <div id="ConfirmationPage">

      <h1> {user.username} does everything look right?</h1>
      <h2>Total: {(totalPrice/100).toFixed(2)}</h2>
      {theCart && theCart.length ? (
        theCart.map((product)=>{
          return(
            <div className="ConfProds" key={`products-${product.id}`} >
             <img src={product.image_url} alt="book image"></img>
              <div>{product.name} </div>
            </div>
          )
        }
        )
      ) :(<h2>Your cart is empty</h2>)}


  </div>);
};

export default ConfirmationPage;
