import React from "react";
import { Link } from "react-router-dom";
import { LoggedIn } from "./";

const Profile = (props) => {
  const user = props.user;
  return (
    <div>
      <div id="profile-main">
        <LoggedIn user={user} />
      </div>

      <div id="profileLinks">
        <Link to={"/userinfo"}>
          <button type="User Info" className="buttons">
            User Info
          </button>
        </Link>
        <Link to={"/favorite"}>
          <button type="favorite" className="buttons">
            Favorites
          </button>
        </Link>

        {user && user.admin ? (
          <>
            <Link to={"/users"}>
              <button type="all users" className="buttons">
                All Users
              </button>
            </Link>
            <Link to={"/makeproduct"}>
              <button type="Create Product" className="buttons">
                Create Product
              </button>
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Profile;
