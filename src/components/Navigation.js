import React from 'react';
import '../style/Navigation.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
          <Navbar.Brand as={Link} to="/7homas7he7ank-react-portfolio/">Thomas Calle</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <Nav.Link as={Link} to="7homas7he7ank-react-portfolio/home">Home</Nav.Link> */}
              <Nav.Link as={Link} to="/7homas7he7ank-react-portfolio/about">About Me</Nav.Link>
              <Nav.Link as={Link} to="/7homas7he7ank-react-portfolio/portfolio">Portfolio</Nav.Link>
              <Nav.Link as={Link} to="/7homas7he7ank-react-portfolio/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/7homas7he7ank-react-portfolio/resume">Resume</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
