import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <p>Accio Page! 🧙‍♀️ ... Page Not Found</p>
      <img
        id="404gif"
        src="https://media.tenor.com/7wkkQajA8t0AAAAC/dumbledore-well.gif"
        alt="dumbledore"
      />
      <div>
        <Link to="/">Back to Home</Link>
        <br></br>
      </div>
    </div>
  );
};

export default NotFound;
