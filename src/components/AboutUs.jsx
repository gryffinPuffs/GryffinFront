import React from "react";
import "../components/about-us.css";
import jessica from "./headshots/jessica.jpeg";
import jen from "./headshots/jen.JPG";
import kevin from "./headshots/kevin.png";
import randy from "./headshots/randy.jpg";

const AboutUs = () => {
  return (
    <div>
      <h1 id="header">Meet the Developers</h1>
      <div id="home-img"></div>

      <div className="developers">
        <div id="left-container">
          <div>
            <img id="jess" src={jessica} alt="jess"></img>
            <h3 className="bio">
              Jessy is an amazing mother to a delightful three year old. She's a
              proud geek through and through. She finds passion in figuring out
              issues and problem solving. Her favorite book is the "Wheel of
              Time" by Robert Jordan
            </h3>
          </div>
        </div>

        <div>
          <img id="jen" src={jen} alt="jen"></img>
          <h3 className="bio">
            Jenniffer is a software developer with a background in Landscape
            Architecture. With a spirit of curiosity and adventure, she's fueled
            by her intellectual and creative powers towards innovation. Seeing
            through the lense of possibility, Jenniffer fantasizes about
            improving social well-being, gaming, and emerging technologies. Her
            favorite fantasy book is Dune by Frank Herbert.
          </h3>
        </div>
      </div>

      <div id="right-container">
        <div>
          <img id="kev" src={kevin} alt="kev"></img>
          <h3 className="bio">
            Kevin is a software developer that moonlights as a Bassoonist. In
            his spare time he likes short walks on the beach, watching the
            latest popular show on Netflix, and catching up on tik toks. His
            favorite book in the Harry Potter series is Prisoner of Azkaban.
          </h3>
        </div>

        <div>
          <img id="randy" src={randy} alt="randy"></img>
          <h3 className="bio">
            "My name is Randy and I am an aspiring software developer. I am 31
            years old and from Louisiana. My main hobby is spending time with my
            five year old Corgi, Bloo. My favorite book in the Harry Potter
            series is Goblet of Fire."
          </h3>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
