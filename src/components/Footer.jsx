import React from "react";
import gitHub from "./gitHub.png";

const Footer = () => {
  const url = "https://github.com/orgs/gryffinPuffs/repositories";
  return (
    <>
      <div id="footer">
        <a href={url}>
          <img id="githubImg" src={gitHub} alt="thumb" />
        </a>
      </div>
    </>
  );
};

export default Footer;
