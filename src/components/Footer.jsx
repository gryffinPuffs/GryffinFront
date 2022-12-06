import React from "react";
import gitHub from "./gitHub.png";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  const url = "https://github.com/orgs/gryffinPuffs/repositories";
  return (
    <>
      <div id="footer">
        <div className="footerLinks">
          <section>
            <h3 id="helplinks">Customer Care</h3>

            <NavLink className="linkBar" to="/subscribe">
              Subscribe to Accio Newsletters
            </NavLink>
            <NavLink className="linkBar" to="/profile">
              Account
            </NavLink>

            <NavLink className="linkBar" to="/policy">
              Policy
            </NavLink>
            <NavLink className="linkBar" to="/Contact">
              Contact
            </NavLink>
            <NavLink className="linkBar" to="/AboutUs">
              About Us
            </NavLink>
          </section>
          {/* <NavLink className="footerNav" to="/">
            Contact
          </NavLink>
          <NavLink className="footerNav" to="/">
            About Us
          </NavLink> */}
          <a href={url}>
            <img id="githubImg" src={gitHub} alt="thumb" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
