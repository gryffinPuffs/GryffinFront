import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import accioScroll from "./AccioScroll.png";

const Navbar = (props) => {
  const setLoggedIn = props.setLoggedIn;
  const loggedIn = props.loggedIn;

  return (
    <>
      <div id="navbar">
        <div>
          <img id="accioImg" src={accioScroll} alt="Accio Logo"></img>
        </div>
        <h2> Accio Books!</h2>
        <div className="links">
          <NavLink className="linkBar" to="/">
            Home
          </NavLink>
          {loggedIn ? (
            <>
              <NavLink
                className="linkBar"
                onClick={() => {
                  localStorage.removeItem("token");
                  setLoggedIn(false);
                }}
              >
                LogOut
              </NavLink>
              <NavLink className="linkBar" to="/profile">
                Profile
              </NavLink>
            </>
          ) : (
            <NavLink className="linkBar" to="/login">
              Login
            </NavLink>
          )}
          <NavLink className="linkBar" to="/cart">
            Cart
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
