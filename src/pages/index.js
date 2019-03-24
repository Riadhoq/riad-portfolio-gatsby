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
    <div className="hero">
      <BackgroundImage />
      <div className="hero-header">
        <h1>Riadul Hoque</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, amet.
        </h2>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
