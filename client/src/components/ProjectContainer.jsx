import React from "react";
import "./ProjectContainer.css";
import ProjectCard from "./ProjectCard";

export default function ProjectsContainer({ projects }) {
  return (
    <div className="project-container">
      {projects.map((p) => {
        return <ProjectCard {...p} />;
      })}
    </div>
  );
}
