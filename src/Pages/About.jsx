import React from "react";
import Skill from "../Components/Skill/Skill";
import "./About.css";

const About = () => {
  return (
    <section id="aboutMe" className="about_section">
      <div className="container">
        <div className="about_me">
          <Skill />

          <div className="about_content">
            <h1>About Me</h1>
            <p>
              I'm Roaa Al-Swidany, a passionate Front-End Developer who brings
              ideas to life through interactive and innovative web interfaces. I
              specialize in React.js and modern web technologies to create
              smooth and efficient user experiences.
            </p>

            <div className="skills_progress">
              <div className="skill_bar">
                <span>HTML5</span>
                <div className="progress">
                  <div className="progress_fill" style={{ width: "90%" }}></div>
                  <span className="progress_label">90%</span>
                </div>
              </div>
              <div className="skill_bar">
                <span>CSS3</span>
                <div className="progress">
                  <div className="progress_fill" style={{ width: "80%" }}></div>
                  <span className="progress_label">80%</span>
                </div>
              </div>
              <div className="skill_bar">
                <span>Javascript</span>
                <div className="progress">
                  <div className="progress_fill" style={{ width: "95%" }}></div>
                  <span className="progress_label">95%</span>
                </div>
              </div>
              <div className="skill_bar">
                <span>React</span>
                <div className="progress">
                  <div className="progress_fill" style={{ width: "90%" }}></div>
                  <span className="progress_label">90%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
