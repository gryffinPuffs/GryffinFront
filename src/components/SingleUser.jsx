import React from "react";
 
const SingleUser = (props) =>{
    const user = props.user
    return(
    <div className="singleUser">
<h3>name: {user.name}</h3>
<h3>username: {user.username}</h3>
<h3>Address: {user.address}</h3>



    </div>
  )
}

export default SingleUser