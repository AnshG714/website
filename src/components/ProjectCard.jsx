import React from "react";
import "./ProjectCard.css";

export default function ProjectCard({
  title,
  projectImage,
  githubLink,
  otherLink,
}) {
  return (
    <div className="card-container shadowed">
      <h1>{title}</h1>
      <img
        className="project-picture"
        src={require(`../assets/${projectImage}`)}
        alt={projectImage}
      />
      <div className="links-container">
        {githubLink && (
          <img
            className="link"
            src={require("../assets/github.png")}
            alt="GitHub logo"
          />
        )}
        {otherLink && (
          <img
            className="link"
            src={require("../assets/link.png")}
            alt="link icon"
          />
        )}
      </div>
    </div>
  );
}
