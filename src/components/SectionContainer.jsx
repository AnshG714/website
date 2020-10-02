import React from "react";
import "./SectionContainer.css";

export default function SectionContainer({ title, children }) {
  return (
    <div className="section-container">
      <div className="title">{title}</div>
      {children}
    </div>
  );
}
