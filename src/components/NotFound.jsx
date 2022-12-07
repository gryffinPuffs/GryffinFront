import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div id="notfound">
      <h1 id="webError">404</h1>
      <div>
        <p>Accio Page! 🧙‍♀️ ... Page Not Found.</p>
      </div>
      <div>
        <img
          id="404gif"
          src="https://media.tenor.com/7wkkQajA8t0AAAAC/dumbledore-well.gif"
          alt="dumbledore"
        />
      </div>
      <div>
        <Link to="/">Home</Link>
        <br></br>
      </div>
    </div>
  );
};

export default NotFound;
