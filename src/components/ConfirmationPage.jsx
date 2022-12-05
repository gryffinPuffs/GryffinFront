
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { createCart, getActiveCartByUsername, getAddressById, updateCart } from "./api-adapter";



const ConfirmationPage = ({user, theCart, setTheCart, totalPrice}) => {
  const [address, setAddress]=useState({})
  const [cart, setCart]=useState({})
  const navigate= useNavigate()
  console.log(user, "user")

  useEffect(() => {
    async function getUserCart() {
      const userCart = await getActiveCartByUsername(user.username);
      console.log(userCart, "is this cart?")
      setCart(userCart)
    }
    getUserCart();
  }, []);

  useEffect(() => {
    async function gettingAddress() {
      const userAddress = await getAddressById(user.address_id);
      console.log(userAddress)
      setAddress(userAddress)

    }
    gettingAddress();
  }, []);

  async function handleSubmit(event){
    event.preventDefault();
    try{
      console.log(user.id,"this?", user, theCart, "the Cart")
      const newCart= await updateCart(user.cart.id, user.id, false)
      const actualNewCart = await createCart(user.id)
      setTheCart(actualNewCart)
      console.log(newCart, "Problem??")
      navigate("/checkout")
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div id="ConfirmationPage">
      <h1> {user.username} does everything look right?</h1>
<div id="cartConfir">

      <h2> Cart total: {(totalPrice/100).toFixed(2)}</h2>
      {theCart && theCart.length ? (
        theCart.map((product)=>{
          return(
            <div className="ConfProds"  key={`products-${product.id}`} >
             <img className="cartprodimg" src={product.image_url} alt="book image"></img>
              <div>{product.name} </div>
            </div>
          )
        }
        )
      ) :(<h2>Your cart is empty</h2>)}

</div>
<div>
  <h2>Shipping to:</h2>
  <div id="addressConfi">
  <div>{user.name}</div>
  <div>{address.address_line1}</div>
  <div>{address.address_line2}</div>
  <div>{address.city}, {address.state} {address.zip_code}</div>
</div></div>
<button onClick={handleSubmit}>Submit Order</button>
  </div>);
};

export default ConfirmationPage;
