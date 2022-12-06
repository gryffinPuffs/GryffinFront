import React from "react";

const UserInfo = (props) => {
  const user = props.user;

  return (
    <div className="UserInfo">
      <h3>name: {user.name}</h3>
      <h3>username: {user.username}</h3>
      <h3>Address: {user.address_id}</h3>
      <h3>user ID: {user.id}</h3>
      <h3>Email: {user.email}</h3>
    </div>
  );
};

export default UserInfo;
