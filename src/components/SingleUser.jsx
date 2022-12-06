import React, {useState, useEffect} from "react";
import { getAddressById } from "./api-adapter"

const SingleUser = (props) =>{
    const user = props.user
    const [address, setAddress]=useState({})

    useEffect(() => {
      async function gettingAddress() {
        const userAddress = await getAddressById(user.address_id);
        console.log(userAddress)
        setAddress(userAddress)
  
      }
      gettingAddress();
    }, []);

    return(
    <div className="singleUser">
<h3>name: {user.name}</h3>
<h3>username: {user.username}</h3>
<h3>address:</h3>
  <div>{user.name}</div>
  <div>{address.address_line1}</div>
  <div>{address.address_line2}</div>
  <div>{address.city}, {address.state} {address.zip_code}</div>
<h3>user ID: {user.id}</h3>
<h3>Email: {user.email}</h3>




    </div>
  )
}

export default SingleUser