import React from "react";
import duneBanner from "./duneBanner.jpg";

const Home = () => {
  return (
    <div id="Home">
      <img id="dune" src={duneBanner} alt="dune"></img>
      <h2 id="home-quote">
        Fantasy is silver and scarlet, indigo and azure, obsidian veined with
        gold and lapis lazuli. Reality is plywood and plastic, done up in mud
        brown and olive drab. Fantasy tastes of habaneros and honey, cinnamon
        and cloves, rare red meat and wines as sweet as summer. Reality is beans
        and tofu, and ashes at the end.”
        <br />
        ― George R.R. Martin
      </h2>
      <div id="home-img">
        {/* <img id="accioImg" src={accioScroll} alt="Accio Logo"></img> */}
      </div>
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
