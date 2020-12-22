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
      <div className="work-time-container centered">
        <p>
          {startDate || "May 2021"} - {endDate || "Aug 2021"}
        </p>
      </div>
      <div className="company-logo-container centered">
        <img
          className="company-logo"
          alt={companyName}
          src={require("../assets/Facebook.png")}
        />
      </div>
      <div className="company-role centered">
        <p>{role || "Software Engineering Intern"}</p>
      </div>
    </div>
  );
}
