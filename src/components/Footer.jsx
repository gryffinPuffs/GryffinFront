import React from "react";
import gitHub from "./gitHub.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const url = "https://github.com/orgs/gryffinPuffs/repositories";
  return (
    <>
      <div id="footer">
        <div className="footerLinks">
          <section>
            <h3 id="helplinks">Customer Care</h3>
            <a className="sublinks" href="">
              Subscribe to Accio Newsletters
            </a>
            <a className="sublinks" href="">
              Account
            </a>
            <a className="sublinks" href="">
              Policies
            </a>
            <a className="sublinks" href="">
              Contact
            </a>
            <a className="sublinks" href="">
              About Us
            </a>
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
