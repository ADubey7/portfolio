import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1
                style={{ paddingBottom: 15 }}
                className="heading"
                data-aos="fade-right"
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name" data-aos="fade-up">
                I'M
                <strong className="main-name"> ASHISH RAJ</strong>
              </h1>

              <div
                style={{ padding: 50, textAlign: "left" }}
                data-aos="fade-left"
              >
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} data-aos="zoom-in">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <div data-aos="fade-up">
        <Home2 />
      </div>
    </section>
  );
}

export default Home;
