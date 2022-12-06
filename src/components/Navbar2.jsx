import React, { useReducer } from "react";
import { NavLink } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div id="navbar2">
      <NavLink className="linkBook" to="/allbooks">
        Shop All Books
      </NavLink>
      {/* <h3>Shop By Category:</h3> */}
      {/* <select name="genre" value="Shop By Genre">
        <option>Children's</option>
        <option>Teens</option>
        <option>Adult</option>
      </select> */}
      <NavLink className="linkBook" to="/childproducts">
        Children's
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
