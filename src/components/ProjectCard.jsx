import React, { useState } from "react";
import "./ProjectCard.css";
import Modal from "react-bootstrap/Modal";

function renderTechLogos(techImageNames) {
  return (
    <div className="tech-stack-container">
      {techImageNames.map((techImageName) => (
        <img
          className="tech-logo"
          src={require(`../assets/tech_logos/${techImageName}.png`)}
          alt={techImageName}
        />
      ))}
    </div>
  );
}

export default function ProjectCard({
  name,
  projectImage,
  githubLink,
  otherLink,
  desc,
  supplementaryImage,
  techStack,
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="card-container shadowed"
        onClick={() => setShowModal(true)}
      >
        <h4 className="project-title">{name || "Undefined Name"}</h4>
        <img
          className="project-picture"
          src={require(`../assets/projects-supplements/${projectImage}.png`)}
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

      <Modal
        size="lg"
        dialogClassName="modal-90w"
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ width: "100%" }}>
            <h1>{name}</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {renderTechLogos(techStack)}
          <p>{desc}</p>
          {supplementaryImage && (
            <img
              className="supplementary-img"
              src={require(`../assets/projects-supplements/${supplementaryImage}.png`)}
              alt={supplementaryImage}
            />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
