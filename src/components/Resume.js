// Importing necessary modules and components
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../style/Resume.css";
import PDF from "../documentation/ThomasCalleResumeMay(2022).pdf";

// Resume component
function Resume() {
  return (
    <section id="resume" className="resume-margin">
      <Container className="resume-section">
        <Row>
          <Col className="text-center">
            <h1>Resume</h1>
            <hr className="star-primary" />
            <Button variant="dark" href={PDF} download>
              Download Resume
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Full Stack Development Skills</h3>
            <hr className="star-secondary" />
            <ul className="list-inline">
            <li className="list-inline-item">
                <strong>Languages:</strong> HTML5, CSS3, JavaScript, Python, Scratch, #C </li>
            <li className="list-inline-item">
                <strong>Libraries & Frameworks:</strong> Bootstrap, jQuery, React, D3.js, Node.js, Styled-Components, 
                Express.js, Angular, Handlebars, Sequelize.js.</li>
            <li className="list-inline-item">
                <strong>Databases:</strong> NoSQL, MySQL, MongoDB, PostgreSQL.</li>
            <li className="list-inline-item">
                <strong>DevOps & Tools:</strong> VS Code, Git, GitHub, GitLab, Heroku, Apollo, HRIS, Microsoft Azure,
                Microsoft Office 365, MongoDB Compass, Mongo DB Atlas, NPM, Insomnia, (CLI).</li>
            <li className="list-inline-item">
                <strong>Methodologies:</strong> Agile Project Managment, Scrum, Kanban, Version Control, E-Commerce, SEO, CMS-style, (TDD), (CI/CD), (PIR). </li>
              <li className="list-inline-item">
                <strong>Operating Systems:</strong> Windows, macOS, Linux, iOS, Android.</li>
            <li className="list-inline-item">
                <strong>Skills:</strong> Styled-Components, Responsive Web Design, UI/UX Design Principles, API Integration, Express.js, GraphQL, Object-Oriented Programming (OOP), Object Relational, Mapping(ORM),
                MERN Stack, GraphQL, Wireframe Design, (CRUD) operations.</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Education</h3>
            <hr className="star-secondary" />
            <div className="resume-item">
              <h4>Computer Science Degree in Software Development Spc. Full Stack Web Development</h4>
              <h5>University of Toronto April 2023</h5>
              <ul>
              <li>Achievements: Top of class (4.0 GPA)</li>
              <li>Projects: (20) Team Projects: (3)</li>
              <li>Curriculum: HTML5, CSS3, JavaScript, Git, GitHub, MongoDB, Express.js, React.js, Node.js, Front-end, Back-end, Full Stack, MERN Stack, DOM, MVC, ORM, CLI, PWA’s, OOP, jQuery, Bootstrap, API, SQL, MySQL, GraphQL, SWE, SDLC, Agile Methodology (SCRUM & Kanban), UI/UX Design, Principles, Wireframe, Responsive Web Design & Web Accessibility.</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Professional Experience</h3>
            <hr className="star-secondary" />
            <div className="resume-item">
              <h4>Marketing & Branding, Model</h4>
              <h5>Orange Model & Talent Management Inc. December 2022 – Present</h5>
              <p>• Enhancing B2B partners' marketing and branding strategies amplifying national impact and reach of Creative Arts campaigns.
                 • Championed Diversity and Inclusion (D&I) initiatives within PR modeling campaigns, actively promoting Equality & Representation.
              </p>
            </div>
            <div className="resume-item">
              <h4>Human Resources Director Assistant</h4>
              <h5>Skills for Change May 2022 - November 2022</h5>
              <p>
                body
              </p>
            </div>
            <div className="resume-item">
              <h4>Digital Marketing & Branding, AR Engagement Strategist</h4>
              <h5>DELL CND Inc., Summer 2022-2023</h5>
              <p>
                body
              </p>
            </div>
            <div className="resume-item">
              <h4>Web Developer Intern.</h4>
              <h5>DELL CND Inc., Summer 2022-2023</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                cursus bibendum magna, vitae dapibus felis ultricies ut. Sed ac
                odio eget est convallis ullamcorper. Duis bibendum vestibulum
                risus, non convallis odio aliquam eu.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Proficiencies</h3>
            {/* <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>
                <span className="teal-color">M</span>
                ongoDB
              </li>
              <li>
                <span className="teal-color">E</span>xpress
              </li>
              <li>
                <span className="teal-color">R</span>eact
              </li>
              <li>
                <span className="teal-color">N</span>ode.js
              </li>
              <li>SQL</li>
            </ul> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
// Export Resume
export default Resume;