import React from "react";
import Hero from "../Components/Hero/Hero";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
