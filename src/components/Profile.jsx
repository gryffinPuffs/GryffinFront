import React from "react";
import { Link } from "react-router-dom";
//need to add a route on main for Profile to render <Profile/>
//will need to pass in the logged in state
const Profile = (props) => {
  const loggedIn = props.loggedIn;
  const username = localStorage.getItem("username");

  return (
    <div>
    {loggedIn === true ? (
      <h1>{`Welcome ${username}`}</h1>
    ) : (
<div>
      <h1>Please register or login</h1>
      <Link to = "/register"></Link>
</div>    
    )}
  </div>
  );
};
//instead of I am profile in the H2, replace with a ternary that checks if user is logged in, and return"welcome ${username}" or return a button to Register/login page.
//Add user purchase history (have not created)
//Add user wish list (need to create component)
//add a button with an onsubmit handler to link to a "shop all books or Shop by genre"
export default Profile;
