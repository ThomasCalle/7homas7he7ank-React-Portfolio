import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container">
        <section className="social-icons-wrapper d-flex flex-column flex-md-row justify-content-center my-3">
          {/* GitHub SECTION */}
          <div className="d-flex flex-column align-items-center mx-md-2 transparent-bg">
            <a href="https://github.com/ThomasCalle" className="icon GitHub" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} bounce size="3x" style={{ color: 'green' }} />
            </a>
            <a href="https://github.com/ThomasCalle" target="_blank" rel="noreferrer">
              <span className="d-inline-block mx-1 name">GitHub</span>
            </a>
          </div>
          {/* YouTube */}
          <div className="d-flex flex-column align-items-center mx-md-2 transparent-bg">
            <a href="https://www.youtube.com/@thoscalle4104" className="icon YouTube" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faYoutube} bounce size="3x" style={{ color: 'purple' }} />
            </a>
            <a href="https://www.youtube.com/@thoscalle4104" target="_blank" rel="noreferrer">
              <span className="d-inline-block mx-1 name">YouTube</span>
            </a>
          </div>
          {/* LinkedIn SECTION */}
          <div className="d-flex flex-column align-items-center mx-md-2 transparent-bg">
            <a href="https://www.linkedin.com/in/thomas-calle/" className="icon LinkedIn" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} bounce size="3x" style={{ color: 'orange' }} />
            </a>
            <a href="https://www.linkedin.com/in/thomas-calle/" target="_blank" rel="noreferrer">
            <span className="d-inline-block mx-1 name">LinkedIn</span>
            </a>
          </div>
          {/* TIKTOK SECTION */}  
          <div className="d-flex flex-column align-items-center mx-md-2 transparent-bg">
            <a href="https://www.tiktok.com/@thoscalle?lang=en" className="icon TikTok" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTiktok} bounce size="3x" style={{ color: 'orange' }} />
            </a>
            <a href="https://www.tiktok.com/@thoscalle?lang=en" target="_blank" rel="noreferrer">
            <span className="d-inline-block mx-1 name">TikTok</span>
            </a>
          </div>
        </section>
        <section className="footer" id="footer">
          <section className="form-footer">
            <h5 className="text-center mb-2">Designed with ⏳ by Thomas Calle</h5>
            <p className="text-center mb-0">
              <h6>&copy; {new Date().getFullYear()} All rights reserved.</h6>
            </p>
          </section>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
