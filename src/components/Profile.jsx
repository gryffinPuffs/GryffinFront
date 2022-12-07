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
      <LoggedIn user={user} />

      
     <Link to={"/userinfo"}><button type="User Info" className="buttons">
        User Info
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
      ) : null}
    </div>
  );
};



export default Profile;
