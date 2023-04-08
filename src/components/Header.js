import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKnight as solid } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";


function Header() {
  return (
    <>
      <Container fluid className="bg-dark">
        <Row className="justify-content-center">
          <Col xs="auto">
            <h1 className="text-white" style={{ fontSize: "76px" }}>
              <FontAwesomeIcon icon={solid} style={{ color: "#white", fontSize: "68px" }} />
              <Link to="/7homas7he7ank-react-portfolio/" className="text-white text-decoration-none">
                Thomas Calle
              </Link>
              <FontAwesomeIcon
                icon={solid}
                flip="horizontal"
                style={{ color: "white", fontSize: "68px" }}
              />
            </h1>
          </Col>
        </Row>
      </Container>
      <Navigation />
    </>
  );
}

export default Header;
