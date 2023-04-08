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
                  Thomas Calle, a passionate 29-year-old, has discovered his
                  purpose across a diverse array of fields, including
                  Philosophy, Coding, Sports Science, and Philanthropy. As a
                  dedicated polymath, Thomas' intellect and steadfast
                  determination to excel led him to embark on an unforgettable
                  journey at the University of Toronto's esteemed 12-week
                  Full-Stack Developer Coding Bootcamp. Fueled by insatiable
                  curiosity and a genuine desire to make a difference in the
                  world, Thomas committed himself to mastering his craft and
                  pursuing excellence in every endeavor, regardless of the
                  challenges he faced.
                </Card.Text>
                <Card.Text>
                  On one occasion, his former boss shared a profound piece of
                  advice with Thomas, urging him to leave a lasting impression
                  wherever he went. Embracing this wisdom wholeheartedly, Thomas
                  has faced every challenge with unyielding enthusiasm and an
                  unwavering commitment to excellence. This journey has
                  transformed him into an invaluable asset for any team or
                  organization. As Thomas continues to forge ahead on his quest
                  for knowledge and growth, the horizon of possibilities extends
                  infinitely before him, leaving us eagerly anticipating the
                  next thrilling chapter in his never-ending adventure.
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
