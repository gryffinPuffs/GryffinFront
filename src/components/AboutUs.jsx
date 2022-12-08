import React from "react";
import "../components/about-us.css";
import jessica from "./headshots/jessica.jpeg";
import jen from "./headshots/jen.jpeg";
import kevin from "./headshots/kevin.png";
import randy from "./headshots/randy.jpg";

const AboutUs = () => {
  const jess_url = "https://www.linkedin.com/in/jessica-piesco-60622513a/";
  const jen_url = "https://www.linkedin.com/in/jenniffermelchiade/";
  const kev_url = "https://www.linkedin.com/in/krlars27/";
  const randy_url = "https://www.linkedin.com/in/randy-pellegrin-879390256/";

  return (
    <div>
      <h1 id="header">Meet the Developers</h1>
      <div id="home-img"></div>

      <div className="developers">
        <div id="left-container">
          <div>
            <a href={jess_url}>
              <img id="jess" src={jessica} alt="jess" />
            </a>
            <h3 className="bio">
              Jessy is an amazing mother to a delightful three year old. She's a
              proud geek through and through. She finds passion in figuring out
              issues and problem solving. Her favorite book is the "Wheel of
              Time" by Robert Jordan.
            </h3>
          </div>
        </div>

        <div>
          <a href={jen_url}>
            <img id="jen" src={jen} alt="jen" />
          </a>
          <h3 className="bio">
            Jenniffer is a software developer looking through the lense of
            possibility. A maverick, with a spirit of curiosity and adventure,
            she's fueled by her intellect and creativity towards innovation and
            social well-being. Her favorite fantasy book is Dune by Frank
            Herbert.
          </h3>
        </div>
      </div>

      <div id="right-container">
        <div>
          <a href={kev_url}>
            <img id="kev" src={kevin} alt="kev" />
          </a>
          <h3 className="bio">
            Kevin is a software developer that moonlights as a Bassoonist. In
            his spare time he likes short walks on the beach, watching the
            latest popular show on Netflix, and catching up on tik toks. His
            favorite book in the Harry Potter series is Prisoner of Azkaban.
          </h3>
        </div>

        <div>
          <a href={randy_url}>
            <img id="randy" src={randy} alt="randy" />
          </a>
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
