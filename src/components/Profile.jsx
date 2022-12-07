import React from "react";
import { Link } from "react-router-dom";
import { LoggedIn } from "./";
import { useNavigate } from "react-router-dom";

const Profile = (props) => {
  const navigate = useNavigate();
  const user = props.user;
  console.log(user);
  return (
    <div className="profile-info">
      <h2 id="profile-header"></h2>
      <LoggedIn user={user} />

      <Link to={"/userinfo"}>
        <button type="User Info" className="userInfo">
          User Info
        </button>
      </Link>
      <Link className="profile-links" to={"/orderhistory"}>
        <button type="text" className="orderHistory">
          Order History
        </button>
      </Link>

      {user && user.admin ? (
        <>
          <Link className="profile-links" to={"/users"}>
            <button type="all users" className="allUsers">
              All Users
            </button>
          </Link>
          <Link className="profile-links" to={"/makeproduct"}>
            <button type="Create Product" className="createProduct">
              Create Product
            </button>
          </Link>
        </>
      ) : null}
    </div>
  );
};

//buttons for Address, purchase History, wish list,

//Add user purchase history (have not created)

export default Profile;
