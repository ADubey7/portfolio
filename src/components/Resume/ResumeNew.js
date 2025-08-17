import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Ashish_Raj_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container
        fluid
        className="resume-section"
        data-aos="fade-zoom-in"      // 👈 interesting zoom + fade animation
        data-aos-delay="200"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <Particle />

        <Row
          style={{ justifyContent: "center", position: "relative" }}
          data-aos="fade-up"
          data-aos-delay="300"      // stagger button animation
        >
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload /> &nbsp;Download CV
          </Button>
        </Row>

        <Row
          className="resume"
          data-aos="zoom-in"          // zoom effect for PDF
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row
          style={{ justifyContent: "center", position: "relative" }}
          data-aos="fade-up"
          data-aos-delay="500"      // stagger second button
        >
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload /> &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
