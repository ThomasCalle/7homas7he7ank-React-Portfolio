import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setNameError(true);
    }
    if (!email) {
      setEmailError(true);
    }
    if (name && email) {
      // You can add your own backend functionality to send the message
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className={`form-control ${nameError ? 'is-invalid' : ''}`} id="name" name="name" value={name} onChange={handleNameChange} required />
                {nameError && <div className="invalid-feedback">Name is required</div>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className={`form-control ${emailError ? 'is-invalid' : ''}`} id="email" name="email" value={email} onChange={handleEmailChange} required />
                {emailError && <div className="invalid-feedback">A valid email is required</div>}
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" name="message" rows="5" value={message} onChange={handleMsgChange}></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
