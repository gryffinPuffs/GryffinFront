import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "./api-adapter";
import { toast } from "react-toastify";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  async function handleRegister(event) {
    event.preventDefault();
    console.log(username, password);
    const { token } = await registerUser(username, password, name, email);
    localStorage.removeItem("token");
    localStorage.setItem("token", token);

    if (token) {
      toast.success("Register Successful");
      navigate("/Home");
    } else {
      toast.error("Register Failed");
      navigate("/Register");
    }
  }

  return (
    <div className="register-container">
      <h2 className="register-header">Register</h2>
      <form onSubmit={handleRegister}>
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
          type="text"
          name="name"
          placeholder="name *"
          required
          value={name}
          onChange={function (event) {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          name="email"
          placeholder="email *"
          required
          value={email}
          onChange={function (event) {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="password *"
          required
          value={password}
          onChange={function (event) {
            setPassword(event.target.value);
          }}
        />
        <br />
        <small>*password must be 8 characters or more</small>
        <br />

        <button className="register-button" type="submit">
          Register
        </button>
      </form>

      <br />
      <h3>Already a User?</h3>
      <Link to="/login" className="link">
        Login
      </Link>
    </div>
  );
};

export default Register;
