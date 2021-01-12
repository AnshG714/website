import React from "react";
import ProfessionalExperienceCard from "./ProfessionalExperienceCard.jsx";
import "./ProfessionalExperienceContainer.css";

function renderGrayBar(index) {
  return (
    <div className="connector centered" key={`${index}_`}>
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
          return <ProfessionalExperienceCard key={index} {...experience} />;
        } else {
          return (
            <>
              {renderGrayBar(index)}
              <ProfessionalExperienceCard key={index} {...experience} />
            </>
          );
        }
      })}
    </div>
  );
}
