import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div id="notfound">
      <h1 id="webError">404</h1>
      <div>
        <Link id="not-found-to-home" to="/">
          Take Me Home
        </Link>
      </div>
      <div id="dumbledore-text">
        <p>Accio Page! 🧙‍♀️ ... Page Not Found.</p>
      </div>
      <div id="dumbledore">
        <img
          id="404gif"
          src="https://media.tenor.com/7wkkQajA8t0AAAAC/dumbledore-well.gif"
          alt="dumbledore"
        />
      </div>
    </div>
  );
};

export default NotFound;
