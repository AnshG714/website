import React from "react";
import "./Education.css";

export default function Education() {
  return (
    <div className="container">
      <div className="cornell-info">
        <p className="em">B.S., Computer Science</p>
        <p className="em">Expected Graduation: December 2021</p>
        <p>
          On campus, I'm a part of{" "}
          <a href="https://www.cornelldti.org">
            Cornell Design and Tech Initiative
          </a>
          , and I've TA'd several classes before, including{" "}
          <a href="https://www.cs.cornell.edu/courses/cs1110/2019fa/">
            Introduction to Computer Science
          </a>
          ,{" "}
          <a href="https://www.cs.cornell.edu/courses/cs4820/2020sp/">
            Analysis of Algorithms
          </a>{" "}
          and{" "}
          <a href="https://www.cs.cornell.edu/courses/cs3110/2020fa/">
            Functional Programming and Data Structures
          </a>
        </p>
      </div>
      <img
        className="cornell-logo"
        src={require("../assets/cornell-logo.png")}
        alt="Cornell Logo"
      />
    </div>
  );
}
