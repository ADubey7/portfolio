import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
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
          <Col md={8} className="home-about-description" data-aos="fade-right">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p
              className="home-about-body"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              I fell in love with programming early on, and since then I’ve been
              constantly learning and building. 🤷‍♂️
              <br />
              <br />I am fluent in programming languages like
              <i>
                <b className="purple"> Java, JavaScript, C, and Python. </b>
              </i>
              <br />
              <br />
              My primary interest lies in developing&nbsp;
              <i>
                <b className="purple">Full Stack (MERN) Web Applications</b> and
                products.
              </i>
              <br />
              <br />I am also passionate about&nbsp;
              <i>
                <b className="purple">Data Science </b>
              </i>
              and enjoy solving complex problems using&nbsp;
              <i>
                <b className="purple">Machine Learning </b>
              </i>
              and&nbsp;
              <i>
                <b className="purple">Data Structures & Algorithms (DSA).</b>
              </i>
              <br />
              <br />
              Whenever possible, I love combining my knowledge of&nbsp;
              <i>
                <b className="purple">Java </b>
              </i>
              and
              <i>
                <b className="purple"> Spring Boot Framework </b>
              </i>
              with&nbsp;
              <i>
                <b className="purple">Machine Learning </b>
              </i>
              to build real-world applications.
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
              <li
                className="social-icons"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <a
                  href="https://github.com/ADubey7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li
                className="social-icons"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <a
                  href="https://x.com/AshishDubeyARA"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li
                className="social-icons"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <a
                  href="https://www.linkedin.com/in/dubey-ashish2024/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li
                className="social-icons"
                data-aos="zoom-in"
                data-aos-delay="700"
              >
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
