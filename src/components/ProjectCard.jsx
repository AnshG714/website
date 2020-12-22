import React, { useState } from "react";
import "./ProjectCard.css";
import Modal from "react-bootstrap/Modal";

function renderTechLogos(techImageNames) {
  return (
    <div className="tech-stack-container">
      {techImageNames.map((techImageName) => (
        <img
          className="tech-logo"
          src={require(`../assets/tech_logos/${techImageName}`)}
          alt={techImageName}
        />
      ))}
    </div>
  );
}

export default function ProjectCard({
  title,
  projectImage,
  githubLink,
  otherLink,
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="card-container shadowed"
        onClick={() => setShowModal(true)}
      >
        <h2 className="project-title">{title}</h2>
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
              style={{ marginLeft: 20 }}
            />
          )}
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ backgroundColor: "red", width: "100%" }}>
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      </Modal>
    </>
  );
}
