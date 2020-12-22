import React from "react";
import Navbar from "./components/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Section from "./components/SectionContainer";
import Education from "./components/Education";
import ProjectContainer from "./components/ProjectContainer";
import ProfessionalExperienceContainer from "./components/ProfessionalExperienceContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Section title="Education">
        <Education />
      </Section>
      <Section title="Projects">
        <ProjectContainer projects={Array(8).fill(8)} />
      </Section>
      <Section title="Work Experience">
        <ProfessionalExperienceContainer experiences={Array(5).fill(8)} />
      </Section>
    </div>
  );
}

export default App;
