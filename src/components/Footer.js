import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/ThomasCalle',
    icon: faGithub,
    color: 'orange'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@thoscalle4104',
    icon: faYoutube,
    color: '#cc0000'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/thomas-calle/',
    icon: faLinkedin,
    color: '#3683f4'
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@thoscalle?lang=en',
    icon: faTiktok,
    color: 'white'
  }
];

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container">
        <section className="social-icons-wrapper d-flex flex-column flex-md-row justify-content-center my-3">
          {socials.map(({ name, url, icon, color }) => (
            <div key={name} className="d-flex flex-column align-items-center mx-md-2 transparent-bg">
              <a href={url} className={`icon ${name}`} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={icon} bounce size="3x" style={{ color: color }} />
              </a>
              <a href={url} target="_blank" rel="noreferrer">
                <span className="d-inline-block mx-1 name">{name}</span>
              </a>
            </div>
          ))}
        </section>
        <section className="form-footer">
          <h5 className="text-center mb-2">Designed with ⏳ by Thomas Calle</h5>
          <p className="text-center mb-0">
            <h6>&copy; {new Date().getFullYear()} All rights reserved.</h6>
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
