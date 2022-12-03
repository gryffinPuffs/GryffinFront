import React, { useState } from "react";
import { NavLink, useResolvedPath } from "react-router-dom";

import books from "./flyingbooks.png";
import wand from "./wand.png";

const Navbar = (props) => {
  const setLoggedIn = props.setLoggedIn;
  const loggedIn = props.loggedIn;
  const user = props.user;
  console.log(user);
  return (
    <>
      <div id="navbar">
        <div id="navbarImgs">
          <img id="wandImg" src={wand} alt="wand img"></img>
          <img id="booksImg" src={books} alt="books img"></img>
        </div>
        <div id="navbarTitle">
        <h1 id="titleNavbar"> Accio Books!</h1>
        </div>
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
              {loggedIn && user.admin ? (
                <NavLink className="linkBar" to="/admin">
                  Admin
                </NavLink>
              ) : null}
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
