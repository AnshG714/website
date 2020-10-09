import React from "react";
import "./ProjectCard.css";

export default function ProjectCard({
  title,
  projectImage,
  githubLink,
  otherLink,
}) {
  return (
    <div className="card-container">
      <h1>{title}</h1>
      <img src={require(`../assets/${projectImage}`)} alt={projectImage} />
      <div className="links-container">
        {githubLink && (
          <img src={require("../assets/github.png")} alt="GitHub logo" />
        )}
        {otherLink && (
          <img src={require("../assets/link.png")} alt="link icon" />
        )}
      </div>
    </div>
  );
}
