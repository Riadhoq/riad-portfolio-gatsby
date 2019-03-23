import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import svgElement from "../images/logo.svg";
import { FaGithubSquare, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";

const Header = () => (
  <header className="header">
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={svgElement} alt="Logo" />
      </Link>
      <input
        onChange={e => handleMenuToggle(e)}
        type="checkbox"
        name="menu"
        id="menu"
      />
      <label htmlFor="menu" className="hamburger">
        <span>Menu</span>
        <span className="line line-1" />
        <span className="line line-2" />
        <span className="line line-3" />
      </label>
      <div className="nav-menu-container">
        <ul
          onClick={() =>
            (document.getElementsByTagName("html")[0].style.overflow = "unset")
          }
          className="nav-menu"
        >
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Resume</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
        <ul
          onClick={() =>
            (document.getElementsByTagName("html")[0].style.overflow = "unset")
          }
          className="menu-social"
        >
          <li>
            <a href="linkedin">
              <FaGithubSquare size="3em" />
            </a>
          </li>
          <li>
            <a href="linkedin">
              <FaLinkedinIn size="3em" />
            </a>
          </li>
          <li>
            <a href="linkedin">
              <FaTwitterSquare size="3em" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

function handleMenuToggle(e) {
  document.getElementsByTagName("html")[0].style.overflow = e.target.checked
    ? "hidden"
    : "unset";
}

export default Header;
