import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faLinkdin, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import './Footer.css';
// import React from 'react';
// import './assets/css/style.css';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container">
        <section className="social-icons-wrapper d-flex flex-column flex-md-row justify-content-center my-3">
          <div className="d-flex flex-column align-items-center mx-md-2">
            <a href="https://github.com/ThomasCalle" className="icon ThomasCalle" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: 'lightblue' }} />
            </a>
          </div>
          <div className="d-flex flex-column align-items-center mx-md-2">
            <a href="https://github.com/ThomasCalle" className="icon ThomasCalle" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'lightblue' }} />
            </a>
          </div>
          <div className="d-flex flex-column align-items-center mx-md-2">
            <a href="https://github.com/ThomasCalle" className="icon ThomasCalle" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkdin} size="lg" style={{ color: 'lightblue' }} />
            </a>
          </div>
          <div className="d-flex flex-column align-items-center mx-md-2">
            <a href="https://github.com/ThomasCalle" className="icon ThomasCalle" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="lg" style={{ color: 'lightblue' }} />
            </a>
          </div>
        </section>
        <section className="footer" id="footer">
          <section className="form-footer">
            <h5 className="text-center mb-2">Designed with ⏳ by Thomas Calle</h5>
            <p className="text-center mb-0">
              <h6>&copy; 2023 All rights reserved.</h6>
            </p>
          </section>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

