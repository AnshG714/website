import React, { useState } from "react";
import "./ProfessionalExperienceCard.css";
import Modal from "react-bootstrap/Modal";

export default function ProfessionalExperienceCard({
  startDate,
  endDate,
  company,
  role,
  desc,
  extraLinks,
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="project-card-container shadowed"
        onClick={() => setShowModal(true)}
      >
        <div className="company-logo-container centered">
          <img
            className="company-logo"
            alt={company}
            src={require(`../assets/${company}.png`)}
          />
        </div>
        <div className="company-role centered">
          <p style={{ fontWeight: "600" }}>
            {role || "Software Engineering Intern"}
          </p>
          <p>
            {startDate || "May 2021"} - {endDate || "Aug 2021"}
          </p>
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
            <img
              className="small"
              src={require(`../assets/${company}.png`)}
              alt={company}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{desc}</p>
          {extraLinks && (
            <>
              <p>Other references:</p>
              <ul>
                {extraLinks.map(({ name, link }) => (
                  <li>
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
