import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "./api-adapter";
import { ToastContainer, toast } from "react-toastify";

const Login = ({loggedIn, setLoggedIn, user, setUser}) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("")
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();
    const { token, user } = await loginUser(username, password);
    localStorage.removeItem("token");
    localStorage.setItem("token", token);
    setUsername("");
    setPassword("");
    setUser(user);
    
    if (token) {
      
      setLoggedIn(true);
      toast("Login Successful");
      navigate("/");
    } else {
      toast.error("Login Failed");
    }


    //work on logout function
  }
  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="username *"
          required
          value={username}
          onChange={function (event) {
            setUsername(event.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="password *"
          required
          onChange={function (event) {
            setPassword(event.target.value);
          }}
        />
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
      <br />
      <h3>Not Yet a User?</h3>
      <Link to="/register" className="link">
        Register
      </Link>
    </div>
  );
};

export default Login;
