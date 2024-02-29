import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import avatar from "../images/Portfolio_Headshot.png";
import "../style/About.css";

function About() {
  return (
    // About section
    <section id="about" className="py-5">
      <h1 className="about-heading">About Me</h1>
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
          >
            <Image src={avatar} rounded fluid className="about-image" />
          </Col>
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  About Thomas Calle
                </Card.Title>
                  <Card.Text>
                    Welcome, I'm Thomas Calle, a 29-year-old whose professional and personal pursuits have been as diverse as they are profound. My journey spans the intellectual challenges of Philosophy, the precision of Coding, the discipline of Sports Science, and the dedication of Philanthropy. Beyond my academic endeavors, my career has evolved over 14 years through the spheres of business operations, customer service, human resources, alongside strides in marketing, branding, and digital innovation.
                  </Card.Text>
                  <Card.Text>
                    My education was enriched at the University of Toronto, where I delved into a Full Stack Developer Coding Bootcamp, refining my technical acumen and reinforcing my problem-solving skills. This background in technology complements my vast experience, making me a versatile and strategic thinker in any professional setting.
                  </Card.Text>
                  <Card.Text>
                    A piece of wisdom that has profoundly influenced my journey was shared by a mentor: "Leave a lasting impression wherever you go." This philosophy has fueled my approach to every challenge, driving me to exceed expectations and become an essential contributor to any project or team.
                  </Card.Text>
                  <Card.Text>
                    In an unexpected twist, I've also been fortunate in modeling and acting, realms that, while distinct, have enhanced my professional trajectory. These experiences have not only broadened my network but also honed my presentation and communication skills, further enriching my professional toolkit.
                  </Card.Text>
                  <Card.Text>
                    I view every situation as an opportunity to learn and grow, applying a unique blend of analytical and creative thinking to achieve outstanding results. As a lifelong learner, I am eager to integrate into your organization, aligning my diverse skills with your strategic goals to drive success and innovation.
                  </Card.Text>
                  <Card.Text>
                    Together, we can forge a path of continuous improvement and excellence. I am committed to contributing to your team's success, drawing on my broad experiences and relentless drive. Let's shape the future with confidence, professionalism, and a shared commitment to excellence.
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// Export About
export default About;
