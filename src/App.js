import React from "react";
import Navbar from "./components/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Section from "./components/SectionContainer";
import Education from "./components/Education";
import ProjectContainer from "./components/ProjectContainer";
import ProfessionalExperienceCard from "./components/ProfessionalExperienceCard";

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
      <Section>
        <ProfessionalExperienceCard />
      </Section>
    </div>
  );
}

export default App;
