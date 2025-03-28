import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import "./ProjectDetails.css";

const ProjectDetails = ({ project, onClose, onNext, onPrev }) => {
  return (
    <div className="project-details-overlay">
      <div className="project-details-container">
        <button className="slider-arrow left" onClick={onPrev}>
          <FaArrowLeft />
        </button>
        <button className="slider-arrow right" onClick={onNext}>
          <FaArrowRight />
        </button>

        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <div className="project-content">
          <img
            src={project.images[0]}
            alt={project.title}
            className="main-image"
          />

          <div className="info-section">
            <h1 className="project-title">{project.title}</h1>

            <div className="buttons-container">
              <a
                href={project.link}
                className="demo-btn"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a
                href={project.repo}
                className="github-btn"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> View Code
              </a>
            </div>

            <div className="description-box">
              <h2>Description</h2>
              <p>{project.description}</p>
            </div>

            <div className="tech-stack-box">
              <h2>Tech Stack</h2>
              <div className="tech-chips">
                {project.languages?.map((tech) => (
                  <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                ))}
                {project.libraries?.map((tech) => (
                  <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
