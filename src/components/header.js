import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import svgElement from '../images/LOGO-1.svg';

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link
          to="/"
        >
          <div className="container">
            <img src={svgElement} alt="Logo" />
          </div>
        </Link>
      </h1>
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
