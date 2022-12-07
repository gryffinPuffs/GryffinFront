import React, { useEffect, useState } from "react";
import { getAllUsers } from "./api-adapter";
import { SingleUser } from "./"
const User = ({ user, setUser }) => {
    const [allUsers, setAllUsers] = useState([])
  useEffect(() => {
    async function usersList() {
      const results = await getAllUsers();
      console.log(user, "getting more users")
      setAllUsers(results);
    }
    usersList();
  }, []);
  //console.log(user, "getting all users")
  return (
    <>
      <div className="usersColumn">
        <h2 className="usersHeader">all users:</h2>
        {allUsers.length ? (
          allUsers.map((e) => {
            return <SingleUser user={e} key={`user_id-${e.id}`} />;
          })
        ) : (
          <div>loading users...</div>
        )}
      </div>
      <button
        id="admin-return"
        className="buttons"
        onClick={() => {
          navigate("/admin");
        }}
      >
        Go Back!
      </button>
    </>
    
  );
};

export default User;
