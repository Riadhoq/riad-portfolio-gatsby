import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { BackgroundImage } from "../components/image";
import ContactMe from "../components/contact";
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
        <a href="#contact" className="btn btn-primary">Contact Now</a>
      </div>
    </section>
    <section className="about white" id="about">
      <div className="content-container about-container">
        <div className="about-item">
          <h2 className="h2">About Me</h2>
          <p className="m-0">
            I'm a full stack web developer with a passion for what I do. I like
            to develop <strong>fast, clean, and readable code</strong> that
            provides a great experience to all the users, whether they are my
            teammates or the customers.
          </p>
        </div>
        <div className="about-svg-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            className="about-svg w-100"
            viewBox="0 0 1076 755"
          >
            <path
              fill="#3f3d56"
              d="M864 702c-7 27-31 44-31 44s-13-27-6-53 31-44 31-44 13 27 6 53z"
            />
            <path
              fill="#6c63ff"
              d="M854 697c-20 19-22 49-22 49s29-2 49-22 22-48 22-48-30 1-49 21z"
            />
            <path
              fill="#2f2e41"
              d="M145 602h37l90-36s65-26 60 24-15 117-15 117-29-13-45-9-5-80-5-80-129 61-141 54-14-64-14-64z"
            />
            <path
              fill="#a0616a"
              d="M203 486l44 64 104 87s96 23 83 38-93-15-93-15-120-87-124-94l-47-68z"
            />
            <path fill="#d0cde1" d="M176 435l29 56s-6 28-17 31-55-35-55-35z" />
            <path
              fill="#2f2e41"
              d="M529 573l9 35a2 2 0 0 1 0 1l-39 121a2 2 0 0 1-4 0l-5-47a2 2 0 0 1 0-1l35-110a2 2 0 0 1 4 1z"
            />
            <path fill="#f2f2f2" d="M526 575l8 31-34 110-8-34 34-107z" />
            <path
              fill="#2f2e41"
              d="M354 740c1 4 137-1 138-3a29 29 0 0 0 3-5l2-5-5-43-134-5-4 53v8z"
            />
            <circle cx="196" cy="357" r="59" fill="#a0616a" />
            <path
              fill="#a0616a"
              d="M192 410s-20 34-24 52-59-37-59-37l-7-19s52-24 48-44 42 48 42 48zM203 512l54 71 129 96s93 20 72 35-82-14-82-14-130-69-158-98-79-78-79-78z"
            />
            <path
              fill="#2f2e41"
              d="M130 623l16 25 94-30c21-6 44-4 62 8 16 10 27 26 3 51-47 48-79 22-79 22S67 774 41 737s-28-55-28-55 101-63 117-59z"
            />
            <path
              fill="#d0cde1"
              d="M328 710s42 27-8 40-87-5-87-5-44 0-44-22 15-25 15-25l45 6s54-14 79 6z"
            />
            <path
              fill="#2f2e41"
              d="M245 342l12 5c4 1 9-1 11-5 2-2 2-5 2-7 0-7-1-15-5-21l-10-9-6-9c-5-11-14-21-26-24-5-2-10-2-16-2l-30 1-15 1c-9 3-17 12-23 20-5 5-10 11-14 18a65 65 0 0 0-7 32 30 30 0 0 0 1 8 47 47 0 0 0 3 8c6 11 9 25 3 36 11-5 22-11 29-20 4-5 6-10 11-13s11-3 14 1a13 13 0 0 1 1 6l2 11c1 4 5 5 8 4 6-1 6-10 10-14 3-3 8-3 13-4 5-2 9-6 11-11 1-3 1-13 4-15 4-2 13 2 17 3z"
            />
            <path
              fill="#d0cde1"
              d="M97 400a16 16 0 0 1 8 0c9 2 28 8 32 18 5 11 24 30 24 30s25 25 19 42-25 37-25 37 6 81-21 102-37 7-37 27-81 81-97 43c0 0 8-71 5-96-2-25 1-178 92-203z"
            />
            <path
              fill="#d0cde1"
              d="M139 433s81 60 66 85c0 0-48 23-59 22s-51-47-62-51-16-75 55-56z"
            />
            <circle cx="498" cy="237" r="65" fill="#f2f2f2" />
            <path fill="#3f3d56" d="M1035 153H671V77h364zm-363-2h361V78H672z" />
            <path fill="#6c63ff" d="M646 92h363v75H646z" />
            <circle cx="417" cy="15" r="6" fill="#6c63ff" />
            <circle cx="436" cy="15" r="6" fill="#6c63ff" />
            <circle cx="455" cy="15" r="6" fill="#6c63ff" />
            <path fill="#3f3d56" d="M1076 440H401V0h675zm-674-2h672V2H402z" />
            <path
              fill="#3f3d56"
              d="M401 24h674v2H401zM418 19a6 6 0 1 1 7-6 6 6 0 0 1-7 6zm0-11a5 5 0 1 0 5 5 5 5 0 0 0-5-5zM437 19a6 6 0 1 1 7-6 6 6 0 0 1-7 6zm0-11a5 5 0 1 0 5 5 5 5 0 0 0-5-5zM457 19a6 6 0 1 1 6-6 6 6 0 0 1-6 6zm0-11a5 5 0 1 0 4 5 5 5 0 0 0-4-5z"
            />
            <path fill="#3f3d56" d="M612 25h2v414h-2z" />
            <path fill="#f2f2f2" d="M689 229h118v16H689zM874 229h118v16H874z" />
            <path
              fill="#3f3d56"
              d="M814 238H694v-18h120zm-118-2h116v-14H696z"
            />
            <path fill="#f2f2f2" d="M689 353h118v16H689z" />
            <path
              fill="#3f3d56"
              d="M814 362H694v-18h120zm-118-2h116v-14H696z"
            />
            <path fill="#f2f2f2" d="M689 289h303v16H689z" />
            <path
              fill="#3f3d56"
              d="M1000 300H695v-18h305zm-304-2h302v-14H696zM999 238H880v-18h119zm-118-2h117v-14H881zM509 285a66 66 0 1 1 66-66 66 66 0 0 1-66 66zm0-130a64 64 0 1 0 64 64 64 64 0 0 0-64-64zM748 744h283v2H748z"
            />
          </svg>
        </div>
      </div>
    </section>
    <ContactMe />
  </Layout>
);

export default IndexPage;
