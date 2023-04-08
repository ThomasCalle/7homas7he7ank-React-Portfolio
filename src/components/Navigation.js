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
              {/* <Nav.Link as={Link} to="7homas7he7ank-react-portfolio/home" className="fs-5">Home</Nav.Link> */}
              <Nav.Link as={Link} to="/7homas7he7ank-react-portfolio/about" className="fs-5">About Me</Nav.Link>
              <Nav.Link as={Link} to="/7homas7he7ank-react-portfolio/portfolio" className="fs-5">Portfolio</Nav.Link>
              <Nav.Link as={Link} to="/7homas7he7ank-react-portfolio/contact" className="fs-5">Contact</Nav.Link>
              <Nav.Link as={Link} to="/7homas7he7ank-react-portfolio/resume" className="fs-5">Resume</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
