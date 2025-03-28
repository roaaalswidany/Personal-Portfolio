import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGithub,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import "./Skill.css";

const Skill = () => {
  return (
    <div className="skill_icons">
      <FontAwesomeIcon icon={faHtml5} size="3x" color="#E44D26" />
      <FontAwesomeIcon icon={faCss3Alt} size="3x" color="#1572B6" />
      <FontAwesomeIcon icon={faJs} size="3x" color="#F7DF1E" />
      <FontAwesomeIcon icon={faReact} size="3x" color="#61DAFB" />
      <FontAwesomeIcon icon={faGithub} size="3x" color="#000" />
      <FontAwesomeIcon icon={faFigma} size="3x" color="#F24E1E" />
    </div>
  );
};

export default Skill;
