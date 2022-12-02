import React, { useReducer } from "react";
import { NavLink } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div id="navbar2">
      <NavLink className="linkBook" to="/allbooks">
        All Books
      </NavLink>
      <NavLink className="linkBook" to="/childproducts">
        Children
      </NavLink>
      <NavLink className="linkBook" to="/teenproducts">
        Teens
      </NavLink>
      <NavLink className="linkBook" to="/adultproducts">
        Adult
      </NavLink>
    </div>
  );
};

export default Navbar2;
