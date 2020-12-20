import React from "react";
import Navbar from "./components/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Section from "./components/SectionContainer";
import Education from "./components/Education";
import ProjectContainer from "./components/ProjectContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Section title="Education">
        <Education />
      </Section>
      <ProjectContainer projects={Array(8).fill(8)} />
    </div>
  );
}

export default App;
