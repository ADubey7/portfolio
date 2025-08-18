import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";
import "./ContactForm.css";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import emailjs from "@emailjs/browser";
import AOS from "aos";

function ContactForm() {
  // 🔹 Ensure AOS recalculates when component mounts
  useEffect(() => {
    setTimeout(() => {
      AOS.refresh();
    }, 500); // wait a bit for DOM (Particle, form fields) to load
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ktzcxvq",
        "template_9bgxcag",
        e.target,
        "3ykZM2msA1s8CBvoZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset();
          AOS.refresh(); // 🔹 refresh after reset
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <Container fluid className="contact-form-section">
      <Particle />

      <Row className="justify-content-center" style={{ position: "relative", zIndex: 1 }}>
        <Col md={10}>
          <h2 className="contact-heading" data-aos="fade-down">
            Contact Me
          </h2>
          <p
            className="contact-subheading"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Feel free to reach out if you have any questions or would like to
            work together. I'm always open to discussing new projects and
            opportunities.
          </p>

          <Row>
            {/* Left Column */}
            <Col
              md={4}
              className="contact-details"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <h4>Get In Touch</h4>
              <p>
                If you have any questions or would like to collaborate, feel
                free to reach out via any of the following methods or by using
                the contact form.
              </p>
              <p>
                <AiOutlinePhone style={{ marginRight: "8px" }} />
                <strong>Phone:</strong> +91 6206565525
              </p>
              <p>
                <AiOutlineMail style={{ marginRight: "8px" }} />
                <strong>Email:</strong> ashishdubey7224@gmail.com
              </p>
              <p>
                <GoLocation style={{ marginRight: "8px" }} />
                <strong>Location:</strong> Bangalore, Karnataka, India
              </p>
            </Col>

            {/* Right Column: Form */}
            <Col md={8} data-aos="fade-left" data-aos-delay="300">
              <Form onSubmit={sendEmail}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="user_name"
                    placeholder="What's your name?"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="user_email"
                    placeholder="What's your email?"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={5}
                    placeholder="What would you like to say?"
                    required
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="contact-submit-btn"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
