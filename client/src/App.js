import React from "react";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Section from "./components/SectionContainer";
import Education from "./components/Education";
import ProjectContainer from "./components/ProjectContainer";
import ProfessionalExperienceContainer from "./components/ProfessionalExperienceContainer";
import Contact from "./components/Contact";
import * as data from "./data.json";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About id="about" desc={data.aboutDesc} />
      <Section id="education" title="Education">
        <Education />
      </Section>
      <Section id="workexp" title="Work Experience">
        <ProfessionalExperienceContainer experiences={data.workExperience} />
      </Section>
      <Section id="projects" title="Projects">
        <ProjectContainer projects={data.projects} />
      </Section>
      <Section id="contact" title="Contact Me">
        <p style={{ fontSize: "0.9rem", fontColor: "lightgray" }}>
          I'm friendly, I swear
        </p>
        <Contact />
      </Section>
    </div>
  );
}

export default App;
