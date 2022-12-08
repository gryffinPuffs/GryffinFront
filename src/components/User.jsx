import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "./api-adapter";
import { SingleUser } from "./";
const User = () => {
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function usersList() {
      const results = await getAllUsers();
      setAllUsers(results);
    }
    usersList();
  }, []);
  return (
    <>
      <div className="usersColumn">
        <h2 className="usersHeader">All users:</h2>
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
        Back
      </button>
    </>
  );
};

export default User;
