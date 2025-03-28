import React from "react";
import border from "../assets/image/border.png";
import TryMe from "../Components/TryMe/TryMe";
import "./Education.css";

const educationData = [
  {
    id: 1,
    title: "Bachelor’s in Computer Engineering",
    institution: "International University",
    year: "2022 - Present",
  },
  {
    id: 2,
    title: "Frontend Development Training",
    institution: "Vica Web Solutions",
    year: "2024",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Experience Designer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Frontend Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const ExperienceCard = ({ title, description }) => {
  return (
    <div className="experience-card">
      <div className="timeline-dot"></div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const EducationCard = ({ title, institution, year }) => {
  return (
    <div className="education-card">
      <div className="timeline-dot"></div>
      <div>
        <h3>{title}</h3>
        <p>{institution}</p>
        <p>{year}</p>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <>
      <section className="education-experience">
        <p className="section-title">Education and Experience</p>
        <h2>Education & Experience</h2>

        <div className="education-container">
          <div className="image-container">
            <img src={border} alt="border" className="timeline-image" />
            <img src={border} alt="border" className="timeline-image" />
          </div>

          <div className="education-column">
            {educationData.map((edu) => (
              <EducationCard key={edu.id} {...edu} />
            ))}
          </div>

          <div className="image-container">
            <img src={border} alt="border" className="timeline-image" />
            <img src={border} alt="border" className="timeline-image" />
          </div>

          <div className="experience-column">
            {experienceData.map((exp) => (
              <ExperienceCard key={exp.id} {...exp} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <TryMe />
      </section>
    </>
  );
};

export default Education;
