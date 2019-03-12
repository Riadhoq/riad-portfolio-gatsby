import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import svgElement from '../images/logo.svg';

const Header = () => (
  <header className="header">
    <Link
      to="/"
      className="logo"
    >
      <img src={svgElement} alt="Logo" />
    </Link>
    <ul>
      <li>
        <Link
          to="/"
          className="logo"
        >
          About
      </Link>
      </li>
      <li>
        <Link
          to="/"
          className="logo"
        >
          Resume
      </Link>
      </li>
      <li>
        <Link
          to="/"
          className="logo"
        >
          Blog
      </Link>
      </li>
      <li>
        <Link
          to="/"
          className="logo"
        >
          Contact
      </Link>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
