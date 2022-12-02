import React from "react";
// import { Link } from "react-router-dom";
import { LoggedIn } from "./"

const Profile = (props) => {
  const user = props.user;
console.log(user)
  return(
   <div>
   <h2>profile</h2>
   <LoggedIn user = {user} />
   


   <button type="purchase history" className="purchaseHistory">Purchase History</button>
   <button type="Wish List" className="wishList">Adult Books</button>
   <button type="User Info" className="userInfo">User Info</button>
    
    {admin ? (<>
    <button type="all users" className="allUsers">All Users</button>
    <button type="Create Product" className="createProduct">Create Product</button>
    </>) : (null)}
    
    </div>
  )
}




  


//buttons for Address, purchase History, wish list, 



//Add user purchase history (have not created)
//Add user wish list (need to create component)
//add a button with an onsubmit handler to link to a "shop all books or Shop by genre"
export default Profile;
