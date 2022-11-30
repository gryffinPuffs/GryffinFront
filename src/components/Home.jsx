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

// function getRandomItem(arr) {
//   const randomProduct = Math.floor(Math.random() * arr.length);
//   const item = arr[randomProduct];

//   return item;
// }

// const array = [1, 'hello', 5, 8];

// const result = getRandomItem(array);
// console.log(result);

export default Home;
