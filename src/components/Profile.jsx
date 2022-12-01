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
   {/* <h3>Welcome {user.username}</h3> */}
    </div>
  )
}
  





//instead of I am profile in the H2, replace with a ternary that checks if user is logged in, and return"welcome ${username}" or return a button to Register/login page.
//Add user purchase history (have not created)
//Add user wish list (need to create component)
//add a button with an onsubmit handler to link to a "shop all books or Shop by genre"
export default Profile;
