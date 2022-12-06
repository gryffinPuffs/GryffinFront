import React, { useState } from "react";
import { NavLink, useResolvedPath } from "react-router-dom";
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
  return (
    <>
      <div id="navbar">
        <div id="navbarImgs">
          <img id="wandImg" src={wand} alt="wand img"></img>
          <img id="booksImg" src={books} alt="books img"></img>
        </div>
        <div>
          <img id="accioImg" src={accioBooks} alt="thumb" />
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
                  setUser(null);
                }}
              >
                LogOut
              </NavLink>
              <div id="username">
                {loggedIn ? <h5>{`${user.username}`}</h5> : null}
              </div>
              <NavLink className="linkBar" to="/profile">
                <img id="profileIcon" src={profileIcon} alt="profileIcon"></img>
              </NavLink>
              {loggedIn && user.admin ? (
                <NavLink className="linkBar" to="/admin">
                  ADMIN
                  <img id="wizard" src={wizard} alt="wizard"></img>
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
