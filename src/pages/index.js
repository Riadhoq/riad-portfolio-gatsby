import React from "react"
// import { Link } from "gatsby"
import svgElement from '../images/polygon.svg';
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`riadul hoque`, 'portfolio', `application`, `react`]} />
    <h1>Riadul Hoque</h1>
    <p>Currently working on the portfolio page</p>
    <div>
      <img src={svgElement} alt="Logo" />
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
