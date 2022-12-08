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
    </div>
  );
};

export default Home;
