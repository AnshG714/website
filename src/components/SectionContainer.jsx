import React from "react";
import "./SectionContainer.css";

export default function SectionContainer({ title, children }) {
  return (
    <div className="section-container">
      <h1 className="title">{title}</h1>
      <div className="centered">{children}</div>
    </div>
  );
}
