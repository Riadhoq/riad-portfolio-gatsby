import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO
      title={"Home"}
      keywords={[
        `riadul hoque`,
        "portfolio",
        `gold on black`,
        `full stack`,
        `web developer`,
        "dotnet",
        `application`,
        `react`
      ]}
    />
    <div className="hero" />
    <div className="hero-header">
      <h1>RIADUL HOQUE</h1>
      <h2>Full Stack Web Developer</h2>
    </div>
  </Layout>
);

export default IndexPage;
