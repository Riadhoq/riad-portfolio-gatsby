import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { BackgroundImage } from "../components/image";
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
    <BackgroundImage />
    <div className="hero-header">
      <h1>PROFESSIONAL WEB DEVELOPER</h1>
      <h2>I make ideas come to life</h2>
    </div>
  </Layout>
);

export default IndexPage;
