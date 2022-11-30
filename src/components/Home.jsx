import React from "react";
import accioScroll from "./AccioScroll.png";

const Home = () => {
  return (
    <div id="Home">
      <h2> I am Home</h2>
      <img id="accioImg" src={accioScroll} alt="Accio Logo"></img>

    </div>
  );
};
//insert random featured book (map through all products and return random book)

export default Home;
