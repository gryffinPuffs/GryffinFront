import React from "react";
 
const SingleUser = (props) =>{
    const user = props.user
    return(
    <div className="singleUser">
<h3>name: {user.name}</h3>
<h3>username: {user.username}</h3>
<h3>Address: {user.address_id}</h3>
<h3>user ID: {user.id}</h3>



    </div>
  )
}

export default SingleUser