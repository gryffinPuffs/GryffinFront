import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { createCart, authUser } from "./api-adapter";

const Checkout = ({user,setUser, setTheCart}) => {
  const navigate=useNavigate()

  useEffect(() => {
    async function doThething(){
  const userStuff = await authUser(localStorage.getItem('token'))
  setUser(userStuff)
  setTheCart(userStuff.cart.products)
  }
   doThething()
   //authUser again and setUser in main. should have new cart on it.
  }
  , []);

  return (
    <div id="Checkout">
      <h1> Thank you for your order</h1>
      <h3>Thank you {user.username} for your order! Please allow 1-2 weeks for your new adventures to arrive!</h3>
      <div id="keepShop" onClick={()=>{navigate("/allbooks")}}>Keep Shopping</div>

    </div>
  );
};

export default Checkout;
