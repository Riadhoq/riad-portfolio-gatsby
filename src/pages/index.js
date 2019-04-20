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
    <section className="hero">
      <BackgroundImage />
      <div className="hero-header animated slideInUp">
        <h1 className="h1">Riadul Hoque</h1>
        <h2 className="h2">Full Stack Web Developer</h2>
        <p className="p">Complex problems, simple solutions</p>
      </div>
    </section>
    <section className="about">
      <div className="about-container">
        <div className="about-item">
          <h2 className="h2">About Me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            vero necessitatibus numquam, optio quos eum incidunt esse quasi ad
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
