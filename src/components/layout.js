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
      <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,400,700" />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
          <footer className="container">
            © {new Date().getFullYear()}, Designed & Implemented by
            {` `}
            <a href="https://www.riadulhoque.com">Riadul Hoque</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
