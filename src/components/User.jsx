import React, { useEffect } from "react";
import { getAllUsers } from "./api-adapter";

const User = ({ user, setUser }) => {
  useEffect(() => {
    async function usersList() {
      const user = await getAllUsers();
      setUser(user);
    }
    usersList();
  }, []);
  //console.log(user, "getting all users")
  return (
    <>
      <div className="usersColumn">
        <h2 className="usersHeader">all users:</h2>
        {user.length ? (
          user.map((user) => {
            return <singleUser user={user} key={`user_id-${user.id}`} />;
          })
        ) : (
          <div>loading users...</div>
        )}
      </div>
    </>
  );
};

export default User;
