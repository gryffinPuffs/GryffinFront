import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { registerUser } from "./api-adapter";
import { toast } from "react-toastify";

const Register = (props) => {
  //address and set address here for useState
  const { state:{address_id} } = useLocation()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  //useEffect for setAddress
// turnery for if address then register
  async function handleRegister(event) {
    event.preventDefault();
    console.log(username, password);
    const { token } = await registerUser(username, password, name, false, email, address_id);
    localStorage.removeItem("token");
    localStorage.setItem("token", token);

    if (token) {
      toast.success("Register Successful", {
        position: toast.POSITION.TOP_LEFT
      });
      navigate("/Login");
    } else {
      toast.error("User Already Exists", {
        position: toast.POSITION.TOP_LEFT
      });
      navigate("/Register");
    }
  }

  return (
    <div className="register-container">
      <h2 className="register-header">Register</h2>
      <form onSubmit={handleRegister}>
        <input
        className="register-line"
          type="text"
          name="username"
          placeholder="username *"
          required
          value={username}
          onChange={function (event) {
            setUsername(event.target.value);
          }}
        />
        <br />
        <input
        className="register-line"
          type="text"
          name="name"
          placeholder="name *"
          required
          value={name}
          onChange={function (event) {
            setName(event.target.value);
          }}
        />
        <br />
        <input
        className="register-line"
          type="text"
          name="email"
          placeholder="email *"
          required
          value={email}
          onChange={function (event) {
            setEmail(event.target.value);
          }}
        />
        <br />
        <input
        className="register-line"
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

        <button className="buttons" type="submit">
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
