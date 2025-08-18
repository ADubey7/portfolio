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
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Row
        style={{ justifyContent: "center", position: "relative" }}
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>

      <Row
        className="resume"
        data-aos="zoom-in"
        data-aos-delay="400"
        data-aos-duration="1000"
        style={{ overflowX: "hidden" }}
      >
        <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
          <Document file={pdf} className="d-flex justify-content-center">
            <Page 
              pageNumber={1} 
              scale={width > 786 ? 1.2 : 0.6} 
              renderTextLayer={false} 
              renderAnnotationLayer={false} 
            />
          </Document>
        </div>
      </Row>

      <Row
        style={{ justifyContent: "center", position: "relative" }}
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="1000"
      >
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  );
}

export default ResumeNew;
