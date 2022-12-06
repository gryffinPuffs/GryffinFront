import React from "react";
import { Link } from "react-router-dom";
import { LoggedIn } from "./";
import { useNavigate } from "react-router-dom";

const Profile = (props) => {
  const navigate = useNavigate();
  const user = props.user;
  console.log(user);
  return (
    <div>
      <h2>profile</h2>
      <LoggedIn user={user} />

      
     <Link to={"/userinfo"}><button type="User Info" className="userInfo">
        User Info
      </button></Link>

      {user && user.admin ? (
        <>
          <Link to={"/users"}>
            <button type="all users" className="allUsers">
              All Users
            </button>
          </Link>
          <Link to={"/makeproduct"}><button type="Create Product" className="createProduct">
            Create Product
          </button></Link>
        </>
      ) : null}
    </div>
  );
};

//buttons for Address, purchase History, wish list,

//Add user purchase history (have not created)

export default Profile;
