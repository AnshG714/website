import React from "react";
import "./About.css";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { Spring } from "react-spring/renderprops";
import { aboutDesc } from "../data";

export default function About() {
  const { width } = useWindowDimensions();
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ duration: 700, delay: 200 }}
    >
      {(props) => (
        <div style={props} className="about-container">
          <Spring
            from={{ transform: `translate3d(-${width / 3 + 250}px, 0, 0)` }}
            to={{ transform: "translate3d(0, 0, 0)" }}
            config={{ duration: 150, delay: 600, tension: 300 }}
          >
            {(props) => (
              <img
                style={props}
                className="prof-pic"
                src={require("../assets/mypic.JPG")}
                alt="profile_pic"
              />
            )}
          </Spring>
          <Spring
            from={{ transform: `translate3d(${width / 3 + 650}px, 0, 0)` }}
            to={{ transform: "translate3d(0, 0, 0)" }}
            config={{ duration: 150, delay: 800, tension: 300 }}
          >
            {(props) => (
              <div style={props} className="about-info-container">
                {aboutDesc}
              </div>
            )}
          </Spring>
        </div>
      )}
    </Spring>
  );
}
