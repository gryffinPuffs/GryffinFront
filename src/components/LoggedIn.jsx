import React from "react";

const LoggedIn = (props) => {
  const user = props.user;

  return (
    <div>
      <h2>Howdy, {user.username ? user.username : "Guest"}</h2>
      <h3>Your account information is available here.</h3>
    </div>
  );
};

export default LoggedIn;
