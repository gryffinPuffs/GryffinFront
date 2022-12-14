import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authUser, loginUser } from "./api-adapter";
import { toast } from "react-toastify";

const Login = ({ loggedIn, setLoggedIn, user, setUser }) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  // const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();
    const {token,  user, message } = await loginUser(username, password);
    const userCart = await authUser(token);
    console.log(user, token);

    localStorage.removeItem("token");
    localStorage.setItem("token", token);
    setUsername("");
    setPassword("");
    setUser(user, userCart);

    if (token) {
      setLoggedIn(true);
      toast.success("Login Successful", {
        position: toast.POSITION.TOP_LEFT
      });
      navigate("/");
    } else {
      toast.error(`${message}`, {
        position: toast.POSITION.TOP_LEFT
      });
    }

    //work on logout function
  }
  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          className="login-line"
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
          className="login-line"
          type="password"
          name="password"
          placeholder="password *"
          required
          onChange={function (event) {
            setPassword(event.target.value);
          }}
        />
        <button className="buttons" type="submit">
          Login
        </button>
      </form>
      <br />
      <h3>Not Yet a User?</h3>
      <Link to="/address" className="link">
        Register
      </Link>
      {/* {error ? (
        <div>
          <h3>{`${error}`}</h3>
        </div>
      ) : null} */}
    </div>
  );
};

export default Login;
