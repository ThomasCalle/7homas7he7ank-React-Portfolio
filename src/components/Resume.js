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
          <hr className="star-secondary" />
          <h3>Professional Summary</h3>
            <div className="resume-item">
              <ul>
                <p>
                  Highly qualified and motivated Full Stack Web Developer, recently graduated from the University of Toronto's Computer Science Bootcamp April 2023, seeking a junior developer or internship position to enhance my technical skills and understanding of project management principles. 
                  With 14 years of demonstrated experience in business operations, customer service, and human resources, I specialize in merging technical expertise with superior interpersonal communication across all management levels. Dedicated to continuous learning and eager to contribute to and advance within your esteemed organization.  
                </p>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
              <hr className="star-secondary" />
              <h3> Top Projects (3) </h3>
                <div className="resume-item">
                <h4><a href="https://github.com/ThomasCalle/Thomas-SQL-Employee-Tracker" target="_blank">Human Resources SQL Employee Tracker (Jan 2023 - Apr 2023)</a></h4>
                    <ul>
                        <li><strong>Technology:</strong> GitHub | JavaScript | Node.js | Inquirer | MySQL</li>
                        <li>SQL Database Management: Developed a CLI application using Node.js, Inquirer.js, and MySQL2 for dynamic CRUD operations on an SQL employee database.</li>
                        <li>User-Centric CLI: Created a user-friendly interface for seamless management of employee data, with a focus on UX.</li>
                    </ul>
                </div>
                <div className="resume-item">
                <h4><a href="https://github.com/ThomasCalle/Thomas-Model-View-Controller-MVC-Tech-Blog" target="_blank">Model View Controller (MVC) Chess Blog (Jan 2023 - Apr 2023)</a></h4>
                  <ul>
                    <li><strong>Technology:</strong> GitHub, Express, JavaScript, Handlebars, ORM, MVC.</li>
                    <li>Deployed CMS-style Heroku platform, integrating MVC for streamlined blog and comment CRUD operations.</li>
                    <li>Enhanced UI/UX and security, using bcrypt for encryption and intuitive design for easy navigation.</li>
                    <li>Combined Node.js, Express.js, and Sequelize ORM for robust backend, with secure session management.</li>
                  </ul>
                </div>
                <div className="resume-item">
                <h4><a href="https://github.com/ThomasCalle/10-Things-To-Do-In-Toronto" target="_blank">Scrum Lead | 10 Things to do in Toronto (Jan 2023 - Apr 2023)</a></h4>
                  <ul>
                      <li><strong>Technology:</strong> GitHub, HTML5, CSS3, JavaScript, API, Agile.</li>
                      <li>Developed accessible and responsive design for multi-device compatibility, focusing on visual impairment.</li>
                      <li>Integrated Server-Side APIs for dynamic, user-friendly interactions across desktop and mobile platforms.</li>
                      <li>Applied Agile methodologies, using Kanban for team collaboration and efficient MVP delivery.</li>
                  </ul>
                </div>
            </Col>
        </Row>
        <Row>
          <Col>
          <hr className="star-secondary" />
            <h3>Full Stack Development Skills</h3>
            {/* <hr className="star-secondary" /> */}
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
            <hr className="star-secondary" />
            <h3>Education</h3>
            {/* <hr className="star-secondary" /> */}
            <div className="resume-item">
              <h4>Computer Science Degree in Software Development Spc. Full Stack Web Development</h4>
              <h5>University of Toronto | Toronto, Ontario | Jan 2023 - April 2023</h5>
              <ul>
                <li>Achievements: Top of class (4.0 GPA)</li>
                <li>Curriculum: Unit Projects: (20) Team Projects: (3)</li>
                <li>Curriculum: HTML5, CSS3, JavaScript, Git, GitHub, MongoDB, Express.js, React.js, Node.js, Full Stack, MERN Stack, DOM, MVC, ORM, CLI, PWA’s, OOP, jQuery, Bootstrap, API, SQL, MySQL, GraphQL, SWE, SDLC, Agile Methodology (SCRUM & Kanban), UI/UX Design, Principles, Wireframe, Responsive Web Design & Web Accessibility.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Bachelor of Applied Science, Human Resources and Industrial Relations</h4>
              <h5>University of Toronto | Toronto, Ontario | April 2020 - April 2022</h5>
              <ul>
                  <li>GPA: 3.0</li>
                  <li>Curriculum: Human Resources, Business Management, Finance and Economics, Marketing, Data Analysis, Strategy.</li>
              </ul>
            </div>  
            <div className="resume-item">
              <h4>Associate Degree. Humanities, General Arts & Science.</h4>
              <h5>George Brown College | Toronto, Ontario | April 2018 - April 2020</h5>
              <ul>
                  <li>GPA: 3.0</li>
                  <li>Curriculum: Project Management, Research Methods, Psychology, Sociology, Philosophy, Research and Writing Analysis.</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr className="star-secondary" />
            <h3>Professional Experience</h3>
            {/* <hr className="star-secondary" /> */}
            <div className="resume-item">
              <h4>Digital Marketing & Branding Manager</h4>
              {/* <h5>Client @hasbulla.hushetskiy 2021 - Present</h5> */}
              <h5>Client <a href="https://www.instagram.com/hasbulla.hushetskiy/?hl=en" target="_blank" rel="noopener noreferrer">@hasbulla.hushetskiy</a> | Toronto, Ontario December 2021 - Present</h5>
              <ul>
                <li>Project Link: <a href="https://www.instagram.com/ar/245529254340388/" target="_blank" rel="noopener noreferrer"> Hasbulla Instagram AR Filter</a></li>
                <li>Developed and marketed "Hasbulla Filter" on Instagram and Facebook, generating over 16.4 million impressions and (335,000) shares, enhancing visibility</li>
                <li>Achieved over (2) million views for the "Hasbulla Filter" within two months, markedly boosting engagement</li>
                <li>Conducted market analysis, inform strategic decisions and achieving over 16.4 million impressions since Dec 2021</li>
                <li>Partnered with B2B entities to improve SEO and AR, leading to a (4798.51%) surge in impressions, fostering positive community engagement on Meta and Discord</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Marketing & Branding Model</h4>
              <h5>Orange Model & Talent Management Inc. | Toronto, Ontario December 2022 - Present</h5>
              <ul>
                <li>Utilized 14 years of Customer Service and Business Operations, to improve B2B marketing/branding strategies, significantly expanding media campaign reach and impact.</li>
                <li>Championed Diversity and Inclusion (D&I) initiatives within PR modeling campaigns, actively promoting Equality & Representation.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Human Resources Director Assistant</h4>
              <h5>Skills for Change | Toronto, Ontario May 2022 - November 2022</h5>
              <ul>
              <li>Led HR department in Director's absence, ensuring policy compliance and proficient HRIS use</li>
              <li>Resolved issues from part-time staff to executives, providing daily strategy reports to CEO.</li>
              <li>Managed recruitment and onboarding for 58 employees across all levels, ensuring compliance and effective training.</li>
              <li>Launched Mental Health & Wellness initiative with weekly "Wellness Wednesday" events, averaging 18+ employee attendance.</li>
              {/* <li></li> */}
              </ul>
            </div>
            <div className="resume-item">
              <h4>Account Management Administration</h4>
              <h5>Government of Ontario | Toronto, Ontario May 2022 - May 2023</h5>
              <ul>
                <li>Managed account and data entry for Covid-19 immunology records, enhancing corporate communication and customer service, and reducing partner discrepancies.</li>
                <li>Exceeded regional health conflict resolutions by 51%, aiding 150-250 weekly reported illnesses.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Management, Supervisor</h4>
              <h5>Liberty Entertainment Group Ltd. | Toronto, Ontario May 2017 - October 2019 </h5>
              <ul>
                  <li>Enhanced HR and payroll efficiency using ADP Software, managing over 100 employees and reducing discrepancies.</li>
                  <li>Improved recruitment and onboarding with a personalized mentorship program, streamlining integration and increasing workplace confidence.</li>
              </ul>
            </div>
            <h4>Merchandise & Retail Sales Associate Lead</h4>
            <h5>Maple Leaf Sports & Entertainment Ltd. (MLSE) | Toronto, Ontario March 2011 - July 2017 </h5>
              <ul>
                <li>Progressed through four roles due to exceptional performance in customer relations and team management.</li>
                <li>Led a team of 5+, enhancing organizational development and teamwork to meet sales KPIs.</li>
                <li>Conducted 16+ successful seasonal training sessions, improving recruitment and employee performance.</li>
                <li>Achieved highest store sales, increasing units-per-transaction from 1.8 to 2.3 during major events.</li>
                <li>Received 15+ Customer Service Awards and 2 Corporate-wide Employee of the Year Awards.</li>
              </ul>   
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <hr className="star-secondary" />
            <h3>Proficiencies</h3> */}
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