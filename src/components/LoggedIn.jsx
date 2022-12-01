import React from "react";

const LoggedIn = (props) => {
    const user = props.user

    return(

        <div>
           <h1>Welcome, {user.username ? user.username : "Guest"}</h1>
            </div>
    )
};

export default LoggedIn