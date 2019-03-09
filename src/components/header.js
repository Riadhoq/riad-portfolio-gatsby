import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import svgElement from '../images/logo.svg';

const Header = () => (
  <header>
    <div>
      <Link
        to="/"
      >
        <img src={svgElement} width="125" alt="Logo" />
        <a class="button" href="#">Default Button</a>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
