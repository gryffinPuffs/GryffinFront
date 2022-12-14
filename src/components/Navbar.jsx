import React, { useState } from "react";
import { NavLink, useNavigate, useResolvedPath } from "react-router-dom";
import books from "./flyingbooks.png";
import wand from "./wand.png";
import accioBooks from "./accioBooks.png";
import cart from "./cart.png";
import profileIcon from "./personicon.png";
import wizard from "./wizard.png";

const Navbar = (props) => {
  const setLoggedIn = props.setLoggedIn;
  const loggedIn = props.loggedIn;
  const user = props.user;
  const setUser = props.setUser;
  const navigate = useNavigate();
  return (
    <>
      <div id="navbar">
        <div id="navbarImgs">
          <img id="wandImg" src={wand} alt="wand img"></img>
          <img id="booksImg" src={books} alt="books img"></img>
        </div>
        <img id="accioImg" src={accioBooks} alt="thumb" />

        <div className="links">
          <div id="username">
            {loggedIn ? <h5>Welcome, {`${user.username}`}</h5> : null}
          </div>
          <NavLink className="linkBar" to="/">
            Home
          </NavLink>
          {loggedIn ? (
            <>
              <NavLink
                to={"/"}
                className="linkBar"
                onClick={() => {
                  navigate("/login");
                  localStorage.removeItem("token");
                  setLoggedIn(false);
                  setUser(null);
                }}
              >
                LogOut
              </NavLink>

              <NavLink className="linkBar" to="/profile">
                <span id="profile-hover" data-hover="my account">
                  <img
                    className="profileIcon"
                    src={profileIcon}
                    data-hover="My Account"
                  ></img>
                </span>
              </NavLink>
              {loggedIn && user.admin ? (
                <NavLink className="linkBar" to="/admin">
                  <span id="wizard-hover" data-hover="Admin">
                    <img className="wizard" src={wizard} alt="wizard"></img>
                  </span>
                </NavLink>
              ) : null}
            </>
          ) : (
            <NavLink className="linkBar" to="/login">
              Login
            </NavLink>
          )}
          <NavLink className="linkBar" to="/cart">
            <img id="cartNav" src={cart} alt="cart"></img>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
