import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <footer className="footer">
        <div className="footer_content">
          <p className="footer_text">@ 2024. All Rights Reserved</p>
          <p>Develpoment by Roaa</p>
          <div className="footer_social">
            <a
              aria-label="Roaa's LinkedIn"
              className="footer_social_link linkedin"
              href="https://www.linkedin.com/in/roaa-alswidany-a6174533b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              aria-label="Roaa's GitHub"
              className="footer_social_link github"
              href="https://github.com/roaaalswidany"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              aria-label="Roaa's Instagram"
              className="footer_social_link instagram"
              href="https://www.instagram.com/rmys_026"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              aria-label="Roaa's Facebook"
              className="footer_social_link facebook"
              href="https://www.facebook.com/share/1AACWNe8HH/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
