import React from "react";
import Cards from "../Components/Cards/Cards";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <span>Portfolio</span>
          <h2>
            My Creative Works
            <span className="highlight">Latest Projects</span>
          </h2>
          <a
            target="_blank"
            className="primaryBtn"
            href="https://github.com/roaaalswidany"
          >
            <FaGithub style={{ marginRight: "8px" }} />
            View Github
          </a>
        </div>
        <Cards />
      </div>
    </section>
  );
};

export default Projects;
