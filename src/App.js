import React from "react";
import Navbar from "./components/NavBar";
import "./App.css";
import About from "./components/About";
import Section from "./components/SectionContainer";
import Education from "./components/Education";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      {/* <Section title="Education">
        <Education />
      </Section> */}
    </div>
  );
}

export default App;
