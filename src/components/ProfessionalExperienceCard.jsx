import React from "react";
import "./ProfessionalExperienceCard.css";

export default function ProfessionalExperienceCard({
  startDate,
  endDate,
  companyImage,
  companyName,
  role,
}) {
  return (
    <div className="project-card-container shadowed">
      <div className="company-logo-container centered">
        <img
          className="company-logo"
          alt={companyName}
          src={require("../assets/Facebook.png")}
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
  );
}
