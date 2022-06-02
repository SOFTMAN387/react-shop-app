import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
     
        <footer >
          <div className="footer-content">
            <h4>SoftMart Apple Phone</h4>
            <p>
               Here each tutorial is
              beautifully described step by step with the required source code.
            </p>
            <ul className="socials">
              <li>
                <NavLink className="bg-primary" to="/">
                  <i className="fa fa-facebook"></i>
                </NavLink>
              </li>
              <li>
                <NavLink className="bg-primary" to="/">
                  <i className="fa fa-twitter"></i>
                </NavLink>
              </li>
              <li>
                <NavLink className="bg-primary" to="/">
                  <i className="fa fa-google-plus"></i>
                </NavLink>
              </li>
              <li>
                <NavLink className="bg-primary" to="/">
                  <i className="fa fa-youtube"></i>
                </NavLink>
              </li>
              <li>
                <NavLink className="bg-primary" to="/">
                  <i className="fa fa-linkedin-square"></i>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-bottom">
            <p className="text-light">
              copyright &copy; 2022 <a
                href="https://er-manishgupta-portfolio.netlify.app/"
                target="_SoftwareEnigneer"
              >Er. Manish Gupta
              </a>
            </p>
            <div className="footer-menu">
              <ul className="f-menu text-info">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
               
                <li>
                  <NavLink to="/">ContNavLinkct</NavLink>
                </li>
                <li>
                  <NavLink to="/">Blog</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      
    </>
  );
};

export default Footer;
