import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "./api-adapter";
import { toast } from 'react-toastify'; 


const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address_line1, setAddress_line1] = useState("");
  const [address_line2, setAddress_line2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip_code, setZip_code] = useState("");

  const navigate = useNavigate();

  async function handleRegister(event) {
    event.preventDefault();
    console.log(username, password);
    const { token } = await registerUser(username, password, address_line1, address_line2, city, state, zip_code);
    localStorage.removeItem("token");
    localStorage.setItem("token", token);
    setUsername("") //setting to empty string clears the field
    setPassword("")
    setAddress_line1("")
    setAddress_line2("")
    setCity("")
    setState("")
    setZip_code("")
    
    if (token) {
      toast.success("Register Successful")
      navigate("/Home");

    } else {
      toast.error("Register Failed")
      navigate("/Register")
    }

    

    
  }

  return (
    <div className="register-container">
      <h2 className="register-header">Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="username" placeholder="username *" required value={username}
          onChange={function (event) {
            setUsername(event.target.value)

          }}/>
        <input
          type="password"
          name="password"
          placeholder="password *"
          required
          value={password}
          onChange={function (event) {
            setPassword(event.target.value)

          }}
        />
        <input
          type="text"
          name="address_line1"
          placeholder="Address Line 1"
          required
          value={address_line1}
          onChange={function (event) {
            setAddress_line1(event.target.value)

          }}
        />
        <button className="register-button" type="submit">
          Register
        </button>
      </form>
      <small>*password must be 8 characters or more</small>
      <br />
      <h3>Already a User?</h3>
      <Link to="/login" className="link">Login</Link>
    </div>
  );
};

export default Register;
