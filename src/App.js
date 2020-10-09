import React from "react";
import Navbar from "./components/NavBar";
import "./App.css";
import About from "./components/About";
import Section from "./components/SectionContainer";
import Education from "./components/Education";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Section title="Education">
        <Education />
      </Section>
      <ProjectCard
        title="test"
        projectImage="mypic.JPG"
        githubLink="aa"
        otherLink="a"
      />
    </div>
  );
}

export default App;
