import React from "react";
import "./SectionContainer.css";

export default function SectionContainer({ title, id, children }) {
  return (
    <div id={id} className="section-container">
      <h1 className="title">{title}</h1>
      <div className="centered">{children}</div>
    </div>
  );
}
