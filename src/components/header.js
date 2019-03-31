import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import svgElement from "../images/logo.svg";
import { FaGithubSquare, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";
const Header = () => (
  <header className="header is-transparent">
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={svgElement} alt="Logo" />
      </Link>
      <span className="name">Riadul Hoque</span>
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
        <ul onClick={() => handleMenuItemClick()} className="nav-menu">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Contact
            </Link>
          </li>
        </ul>
        <ul onClick={() => handleMenuItemClick()} className="menu-social">
          <li className="nav-item">
            <a className="nav-link" href="linkedin">
              <FaGithubSquare size="3em" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="linkedin">
              <FaLinkedinIn size="3em" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="linkedin">
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
  if (e.target.checked) {
    if (document.getElementsByClassName("header")[0].classList) {
      document
        .getElementsByClassName("header")[0]
        .classList.remove("is-transparent");
    }
  } else if (!e.target.checked && window.scrollY < 35) {
    if (document.getElementsByClassName("header")[0].classList) {
      document
        .getElementsByClassName("header")[0]
        .classList.add("is-transparent");
    }
  }
}

function handleMenuItemClick() {
  document.getElementsByTagName("html")[0].style.overflow = "unset";
}

export default Header;
