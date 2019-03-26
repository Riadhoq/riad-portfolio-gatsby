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
      <div className="hero-header">
        <h1 class="h1">Riadul Hoque</h1>
        <h2 class="h2">Full Stack Web Developer</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
          adipisci libero fugiat reprehenderit suscipit aliquid quos ab!
          Perspiciatis, provident officiis!
        </p>
      </div>
    </section>
    <section className="about">
    <div className="about-me">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero
        necessitatibus numquam, optio quos eum incidunt esse quasi ad earum
        cumque neque omnis officia suscipit quae aperiam enim expedita
        laboriosam.Odio sunt magnam quasi rerum nulla aperiam accusamus eaque
        recusandae atque, numquam vitae perspiciatis neque architecto reiciendis
        quis tempora mollitia. Sint nulla numquam quia quibusdam veritatis, eos
        iste tempore ullam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero
        necessitatibus numquam, optio quos eum incidunt esse quasi ad earum
        cumque neque omnis officia suscipit quae aperiam enim expedita
        laboriosam.Odio sunt magnam quasi rerum nulla aperiam accusamus eaque
        recusandae atque, numquam vitae perspiciatis neque architecto reiciendis
        quis tempora mollitia. Sint nulla numquam quia quibusdam veritatis, eos
        iste tempore ullam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero
        necessitatibus numquam, optio quos eum incidunt esse quasi ad earum
        cumque neque omnis officia suscipit quae aperiam enim expedita
        laboriosam.Odio sunt magnam quasi rerum nulla aperiam accusamus eaque
        recusandae atque, numquam vitae perspiciatis neque architecto reiciendis
        quis tempora mollitia. Sint nulla numquam quia quibusdam veritatis, eos
        iste tempore ullam.
      </p>
    </div>
    </section>
  </Layout>
);

export default IndexPage;
