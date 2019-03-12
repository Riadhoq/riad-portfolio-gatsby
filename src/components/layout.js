import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import "../sass/main.scss"
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="portfolio">
        <Header siteTitle={data.site.siteMetadata.title} />
        <>
          <main>{children}</main>
          <footer>
            <p>© {new Date().getFullYear()}, Designed & Implemented by
            {` `}
              <a href="https://www.riadulhoque.com">Riadul Hoque</a>
            </p>
          </footer>
        </>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
