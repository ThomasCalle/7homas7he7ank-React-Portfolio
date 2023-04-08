import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube, faLinkedin, faTiktok } from "@fortawesome/free-brands-svg-icons";
import "../style/Footer.css";

// Array of social media objects with name, url, icon and color
const socials = [
  {
    name: "GitHub",
    url: "https://github.com/ThomasCalle",
    icon: faGithub,
    color: "#5DE512",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@thoscalle4104",
    icon: faYoutube,
    color: "#FF0000",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/thomas-calle/",
    icon: faLinkedin,
    color: "#2EACE8",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@thoscalle?lang=en",
    icon: faTiktok,
    color: "white",
  },
];

// Footer component
const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="footer-container">
        <section className="social-icons-wrapper d-flex flex-md-row justify-content-center">
          {socials.map(({ name, url, icon, color }) => (
            <div
              key={name}
              className="d-flex flex-column align-items-center mx-md-2 transparent-bg"
            >
              <a
                href={url}
                className={`icon ${name}`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={icon}
                  bounce
                  className="footer-icon-size" 
                  style={{ color: color }}
                />
              </a>
              <a href={url} target="_blank" rel="noreferrer">
                <span className="d-inline-block mx-1 name">{name}</span>
              </a>
            </div>
          ))}
        </section>
        <section className="form-footer">
        <h5 className="designer-text">Designed with ⏳ by Thomas Calle</h5>
          <p>
          <h6 className="copyright-text">&copy; {new Date().getFullYear()} All rights reserved.</h6>
          </p>
        </section>
      </div>
    </footer>
  );
};
// Export Footer
export default Footer;
