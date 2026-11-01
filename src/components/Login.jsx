
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "./api-adapter";
import { toast } from "react-toastify";

const Login = ({ setLoggedIn, setUser }) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const result = await loginUser(username, password);

      if (!result || !result.token) {
        toast.error(result?.message || "Login failed. Please check your credentials.");
        return;
      }

      localStorage.setItem("token", result.token);
      setUser(result.user);
      setLoggedIn(true);

      setUsername("");
      setPassword("");

      toast.success("Login Successful", {
        position: toast.POSITION.TOP_LEFT,
      });

      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Unable to log in. Please try again.");
    }
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
          onChange={(event) => setUsername(event.target.value)}
        />

        <input
          className="login-line"
          type="password"
          name="password"
          placeholder="password *"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
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
    </div>
  );
};

export default Login;

