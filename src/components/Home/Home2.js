import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Home2() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          {/* 🔹 Text Section */}
          <Col
            md={8}
            className="home-about-description"
            data-aos="fade-right"
          >
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" data-aos="fade-up" data-aos-delay="200">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java, JavaScript, C, Python. </b>
              </i>
              <br />
              <br />
              My field of interest is in building&nbsp;
              <i>
                <b className="purple">Full Stack (MERN) Web Applications</b> and
                products.
              </i>
              <br />
              <br />
              I’m also passionate about&nbsp;
              <i>
                <b className="purple">Data Science</b>
              </i>
              &nbsp;and love solving problems using&nbsp;
              <i>
                <b className="purple">Machine Learning</b>
              </i>
              &nbsp;and&nbsp;
              <i>
                <b className="purple">Data Structures & Algorithms (DSA)</b>.
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Java</b> and
              <i>
                <b className="purple"> Spring Boot Framework</b>
              </i>
              &nbsp;as well as integrating
              <i>
                <b className="purple"> Machine Learning models </b>
              </i>
              into real-world applications.
            </p>
          </Col>

          {/* 🔹 Avatar Image */}
          <Col md={4} className="myAvtar" data-aos="zoom-in">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        {/* 🔹 Social Links */}
        <Row>
          <Col
            md={12}
            className="home-about-social"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons" data-aos="zoom-in" data-aos-delay="400">
                <a
                  href="https://github.com/ADubey7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons" data-aos="zoom-in" data-aos-delay="500">
                <a
                  href="https://x.com/AshishDubeyARA"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons" data-aos="zoom-in" data-aos-delay="600">
                <a
                  href="https://www.linkedin.com/in/dubey-ashish2024/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons" data-aos="zoom-in" data-aos-delay="700">
                <a
                  href="https://www.instagram.com/ashishdubey.7/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
