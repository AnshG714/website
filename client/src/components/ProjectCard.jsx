import React, { useState } from "react";
import "./ProjectCard.css";
import Modal from "react-bootstrap/Modal";

function renderTechLogos(techImageNames) {
  return (
    <div className="tech-stack-container">
      {techImageNames.map((techImageName, index) => (
        <div key={index} className="tech-pill">
          {techImageName}
        </div>
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
  extraLinks,
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
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <img
                className="link"
                src={require("../assets/github.png")}
                alt="GitHub logo"
              />
            </a>
          )}
          {otherLink && (
            <a href={otherLink} target="_blank" rel="noopener noreferrer">
              <img
                className="link"
                src={require("../assets/link.png")}
                alt="link icon"
                style={{ marginLeft: 20 }}
              />
            </a>
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
            <div className="project-header">
              <img
                className="small"
                src={require(`../assets/projects-supplements/${projectImage}.png`)}
                alt={projectImage}
              />
              <h1>{name}</h1>
            </div>
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
          {extraLinks && (
            <>
              <p>Other references:</p>
              <ul>
                {extraLinks.map(({ name, link }) => (
                  <li key={link}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
