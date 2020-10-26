import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Img from "gatsby-image";

const Project = (props) => (
  <div className="project-item color-gray">
    <h3 className="color-violet">{props.projectTitle}</h3>
    {documentToReactComponents(props.projectDescription.json)}
    <a className="margin-bottom display-ib" href={props.projectLink}>
      Link to project
    </a>
    <div className="project-images">
      {props.projectImage.map((image) => (
        <Img
          imgStyle={{ width: `400px`, height: `400px` }}
          key={image.title}
          fixed={image.fixed}
          alt={image.title}
        />
      ))}
    </div>
  </div>
);

export default Project;
