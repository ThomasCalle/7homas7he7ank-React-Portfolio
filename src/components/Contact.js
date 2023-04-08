import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../style/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const handleMsgChange = (e) => {
    setMessage(e.target.value);
    setMessageError(false);
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (name.length <= 5) {
      setNameError(true);
      valid = false;
    }
    if (!validateEmail(email)) {
      setEmailError(true);
      valid = false;
    }
    if (message.length < 150) {
      setMessageError(true);
      valid = false;
    }

    if (valid) {
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <section id="contact">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
          <h2 className="contact-header">Contact Me</h2>            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group>
                <Form.Label htmlFor="name">Name:</Form.Label>
                <Form.Control
                  type="text"
                  className={nameError ? 'is-invalid' : ''}
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
                {nameError && (
                  <div className="invalid-feedback">
                    Name must be more than 5 characters
                  </div>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="email">Email:</Form.Label>
                <Form.Control
                  type="email"
                  className={emailError ? 'is-invalid' : ''}
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                {emailError && (
                  <div className="invalid-feedback">A valid email is required</div>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="message">Message:</Form.Label>
                <Form.Control
                  as="textarea"
                  className={messageError ? 'is-invalid' : ''}
                  id="message"
                  name="message"
                  rows="5"
                  value={message}
                  onChange={handleMsgChange}
                />
                {messageError && (
                  <div className="invalid-feedback">
                    Message must be at least 150 characters
                  </div>
                )}
              </Form.Group>
              <Button type="submit" className="custom-send-message-button">Send Message</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;