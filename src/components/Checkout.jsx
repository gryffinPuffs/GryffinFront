import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ({user}) => {
  const navigate=useNavigate()
  return (
    <div id="Checkout">
      <h1> Thank you for your order</h1>
      <h3>Thank you {user.username} for your order! Please allow 1-2 weeks for your new adventures to arrive!</h3>
      <div onClick={()=>{navigate("/allbooks")}}>Keep Shopping</div>

    </div>
  );
};

export default Checkout;
