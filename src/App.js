import React from "react";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Section from "./components/SectionContainer";
import Education from "./components/Education";
import ProjectContainer from "./components/ProjectContainer";
import ProfessionalExperienceContainer from "./components/ProfessionalExperienceContainer";
import * as data from "./data.json";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <About desc={data.aboutDesc} />
      <Section title="Education">
        <Education />
      </Section>
      <Section title="Projects">
        <ProjectContainer projects={data.projects} />
      </Section>
      <Section title="Work Experience">
        <ProfessionalExperienceContainer experiences={Array(5).fill(8)} />
      </Section>
    </div>
  );
}

export default App;
