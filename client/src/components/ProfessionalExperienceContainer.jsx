import React from "react";
import ProfessionalExperienceCard from "./ProfessionalExperienceCard.jsx";
import "./ProfessionalExperienceContainer.css";

function renderGrayBar() {
  return (
    <div className="connector centered">
      <div className="gray-bar" />
      <div className="gray-circle" />
    </div>
  );
}

export default function ProfessionalExperienceContainer({ experiences }) {
  return (
    <div className="centered" style={{ flexDirection: "column" }}>
      {experiences.map((experience, index) => {
        if (index === 0) {
          return <ProfessionalExperienceCard {...experience} />;
        } else {
          return (
            <>
              {renderGrayBar()}
              <ProfessionalExperienceCard {...experience} />
            </>
          );
        }
      })}
    </div>
  );
}
