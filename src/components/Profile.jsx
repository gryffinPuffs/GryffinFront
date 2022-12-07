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
      <div id="profile-main">
      <h2>profile</h2>
      <LoggedIn user={user} />
      </div>

     <div id="profileLinks"> 
     <Link to={"/userinfo"}><button type="User Info" className="buttons">
        User Info
      </button></Link>
      <Link to={"/favorite"}><button type="favorite" className="buttons">
        Favorites
      </button></Link>
      

      {user && user.admin ? (
        <>
          <Link to={"/users"}>
            <button type="all users" className="buttons">
              All Users
            </button>
          </Link>
          <Link to={"/makeproduct"}><button type="Create Product" className="buttons">
            Create Product
          </button></Link>
        </>
      ) : null}</div>
    </div>
  );
};

//buttons for Address, purchase History, wish list,

//Add user purchase history (have not created)

export default Profile;
